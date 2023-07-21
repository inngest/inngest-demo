'use client';

import Link from 'next/link';
import InngestLogo from './InngestLogo';
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';
import { useState } from 'react';

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      ></path>
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export type Item = {
  name: string;
  slug: string;
};

export const useCases: { name: string; description: string; slug: string; items: Item[] }[] = [
  {
    name: 'Background Jobs',
    description: 'Run reliable background jobs without deploying any new infrastructure.',
    slug: 'background-jobs',
    items: [
      {
        name: 'CSV File Import',
        slug: 'csv-file-import',
      },
    ],
  },
  {
    name: 'Workflows',
    description: 'Build complex workflows in minutes without file configurations.',
    slug: 'workflows',
    items: [
      {
        name: 'Customer Onboarding',
        slug: 'customer-onboarding',
      },
    ],
  },
  {
    name: 'Scheduled Functions',
    description: 'Run functions on a schedule that automatically retries on failure.',
    slug: 'scheduled-functions',
    items: [
      {
        name: 'Monthly Report',
        slug: 'monthly-report',
      },
    ],
  },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-zinc-800 bg-[#050911] lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r">
      <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
        <Link href="/" className="group flex w-full gap-x-2.5" onClick={close}>
          <InngestLogo className="h-6 w-auto" />
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XIcon className="block w-6 text-gray-400" />
        ) : (
          <MenuIcon className="block w-6 text-gray-400" />
        )}
      </button>

      <nav
        className={`overflow-y-auto lg:static lg:block ${
          isOpen ? 'fixed inset-x-0 bottom-0 top-14 mt-px bg-[#050911]' : `hidden`
        }`}
      >
        <ul className="space-y-6 px-2 py-5">
          {useCases.map((category) => {
            const segments = useSelectedLayoutSegments();
            const isActive = segments.includes(category.slug);

            return (
              <li key={category.name} className="space-y-2">
                <span
                  className={`px-3 text-xs font-semibold uppercase tracking-wider 
                  ${isActive ? 'text-white' : 'text-gray-400/80'}`}
                >
                  {category.name}
                </span>

                <ul className="space-y-1">
                  {category.items.map((item) => (
                    <NavItem
                      key={item.slug}
                      item={item}
                      categorySlug={category.slug}
                      close={close}
                    />
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

function NavItem({
  item,
  categorySlug,
  close,
}: {
  item: Item;
  categorySlug: string;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <li>
      <Link
        onClick={close}
        href={`/use-cases/${categorySlug}#${item.slug}`}
        className={`block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300
          ${isActive ? 'text-white' : 'text-gray-400 hover:bg-gray-800'}`}
      >
        {item.name}
      </Link>
    </li>
  );
}
