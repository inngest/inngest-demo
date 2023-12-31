'use client';

import useCases, { type Example } from '@/app/useCases';
import Link from 'next/link';
import InngestLogo from './InngestLogo';
import { useSelectedLayoutSegment } from 'next/navigation';
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
          <XIcon className="block w-6 text-slate-400" />
        ) : (
          <MenuIcon className="block w-6 text-slate-400" />
        )}
      </button>

      <nav
        className={`overflow-y-auto lg:static lg:block ${
          isOpen ? 'fixed inset-x-0 bottom-0 top-14 mt-px bg-[#050911]' : `hidden`
        }`}
      >
        <ul className="space-y-6 px-2 py-5">
          {useCases.map((category) => {
            const segment = useSelectedLayoutSegment();
            const isActive = segment === category.slug;

            return (
              <li key={category.name} className="space-y-2">
                <span
                  className={`px-2 text-xs font-semibold uppercase tracking-wider 
                  ${isActive ? 'text-white' : 'text-gray-400/80'}`}
                >
                  {category.name}
                </span>

                <ul className="space-y-1">
                  {category.examples.map((item) => (
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
  item: Example;
  categorySlug: string;
  close: () => false | void;
}) {
  return (
    <li>
      <Link
        onClick={close}
        href={`/${categorySlug}#${item.slug}`}
        className="block rounded-md p-2 text-sm font-medium hover:text-slate-200 text-slate-400 hover:bg-slate-800"
      >
        {item.name}
      </Link>
    </li>
  );
}
