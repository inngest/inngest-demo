import { Code as SyntaxHighlighter } from 'bright';
import theme from '@/app/(use-cases)/theme.json';
import { readFile } from 'node:fs/promises';

export default async function Code({ filePath }: { filePath: string }) {
  const fileContent = await readFile(filePath, { encoding: 'utf8' });
  return (
    <SyntaxHighlighter className="!-my-[1em] text-mono text-xs" theme={theme} lang="ts" lineNumbers>
      {fileContent}
    </SyntaxHighlighter>
  );
}
