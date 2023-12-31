import { Code as SyntaxHighlighter } from 'bright';
import theme from '@/app/[categorySlug]/theme.json';

export default async function Code({ fileURL }: { fileURL: URL }) {
  const fileContent = await fetch(fileURL).then((res) => res.text());

  const startString = 'inngest.createFunction(';

  const inngestFunctionCode = fileContent.substring(fileContent.indexOf(startString)).trimEnd();

  return (
    <SyntaxHighlighter style={{ margin: 0 }} className="text-mono text-xs leading-5" theme={theme} lang="ts">
      {inngestFunctionCode}
    </SyntaxHighlighter>
  );
}
