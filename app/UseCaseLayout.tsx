export default function UseCaseLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4 space-y-24">
      <div className="mx-auto max-w-2xl px-4 lg:text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none space-y-28">{children}</div>
    </div>
  );
}
