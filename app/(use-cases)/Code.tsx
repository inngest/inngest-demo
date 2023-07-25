import { Code as SyntaxHighlighter } from 'bright';
import theme from '@/app/(use-cases)/theme.json';

export default async function Code({ fileURL }: { fileURL: URL }) {

  const fileContent = await fetch(fileURL).then((res) => res.text());

  return (
    <SyntaxHighlighter className="!-my-[1em] text-mono text-xs" theme={theme} lang="ts">
      {fileContent}
    </SyntaxHighlighter>
  );
}
