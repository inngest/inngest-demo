import Button from '@/app/(use-cases)/Button';
import Code from '@/app/(use-cases)/Code';
import Demo from '@/app/(use-cases)/Demo';
import { Suspense } from 'react';

type UseCaseExampleProps = {
  name: string;
  description: string;
  benefits: {
    name: string;
    description: string;
  }[];
  docsHref: string;
  githubHref: string;
  illustration: React.ReactNode;
  action: () => Promise<void>;
};

export default function Example({
  name,
  description,
  benefits,
  docsHref,
  githubHref,
  illustration,
  action,
}: UseCaseExampleProps) {

  const gitHubFileURL = new URL(githubHref);
  gitHubFileURL.searchParams.set("raw", "true");

  return (
    <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-5">
      <div className="gap-4 lg:col-span-2 flex flex-col justify-between">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{name}</h2>
          <div className="space-y-2">
            <p>{description}</p>
            <h3 className="text-lg font-semibold">Benefits</h3>
            <dl className="space-y-2">
              {benefits.map((benefit) => (
                <div key={benefit.name} className="relative pl-9">
                  <CheckCircle className="w-5 h-5 text-indigo-500 absolute left-1 top-0.5" />
                  <dt className="inline font-medium text-indigo-500">{benefit.name}:</dt>{' '}
                  <dd className="inline">{benefit.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="flex gap-2">
          <Button href={docsHref}>Docs</Button>
          <Button href={githubHref}>GitHub</Button>
        </div>
      </div>
      <div className="lg:col-span-3 h-96 [contain:size] relative min-h-full flex flex-col gap-4">
        <Demo
          illustration={illustration}
          code={
            <Suspense fallback={<p>Loading code...</p>}>
              <Code fileURL={gitHubFileURL} />
            </Suspense>
          }
        />
        <div className="flex justify-between gap-2">
          <Button action={action}>Trigger</Button>
          <Button href="http://localhost:8288/">Open Result</Button>
        </div>
      </div>
    </div>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="6" fill="white" />
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
