'use client';

import { Tab } from '@headlessui/react';

export default function IllustrationDemoSwitcher({
  illustration,
  code,
}: {
  illustration: React.ReactNode;
  code: React.ReactNode;
}) {
  return (
    <Tab.Group
      as="aside"
      className="lg:col-span-3 h-96 [contain:size] relative min-h-full flex flex-col gap-6 rounded-lg p-6 border border-dashed border-zinc-800 bg-[#050911]"
    >
      <Tab.List className="flex gap-4">
        <Tab>Illustration</Tab>
        <Tab>Code</Tab>
      </Tab.List>
      <Tab.Panels className="flex-1 overflow-auto">
        <Tab.Panel>{illustration}</Tab.Panel>
        <Tab.Panel>{code}</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
