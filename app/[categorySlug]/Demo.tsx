'use client';

import { Tab } from '@headlessui/react';

export default function Demo({
  illustration,
  code,
}: {
  illustration: React.ReactNode;
  code: React.ReactNode;
}) {
  const tabClasses =
    'bg-white bg-opacity-0 ui-not-selected:hover:bg-opacity-10 ui-selected:bg-opacity-[0.15] pointer-events-auto flex rounded-md px-3 py-2 text-xs font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50';

  return (
    <Tab.Group
      as="aside"
      className="lg:col-span-3 relative min-h-0 p-1 flex-1 rounded-lg border border-dashed border-zinc-800 bg-[#050911]"
    >
      {/*<div className="pointer-events-none absolute inset-x-0 top-0 right-2 z-10 m-0.5 md:left-auto">*/}
      {/*  <Tab.List className="flex items-stretch justify-end rounded-t-[10px] px-3 py-1 md:m-1 md:rounded-lg space-x-1">*/}
      {/*    <Tab className={tabClasses}>Illustration</Tab>*/}
      {/*    <Tab className={tabClasses}>Code</Tab>*/}
      {/*  </Tab.List>*/}
      {/*</div>*/}
      <Tab.Panels className="h-full overflow-auto">
        {/*<Tab.Panel>{illustration}</Tab.Panel>*/}
        <Tab.Panel className="bg-slate-900 h-full">{code}</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
