'use client';

import { useEffect, useState } from 'react';

export default function TriggerButton({ action }: { action: () => Promise<void> }) {
  let [triggerCount, setTriggerCount] = useState(0);
  let isTriggered = triggerCount > 0;

  useEffect(() => {
    if (triggerCount > 0) {
      let timeout = setTimeout(() => setTriggerCount(0), 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [triggerCount]);

  return (
    <button
      className={` inline-flex items-center text-sm gap-x-1.5 py-2 pr-4 pl-3.5 relative font-medium text-slate-200 rounded bg-slate-800 transition hover:bg-slate-700
         
        `}
      onClick={() => {
        action().then(() => {
          setTriggerCount((count) => count + 1);
        });
      }}
    >
      <span
        aria-hidden={isTriggered}
        className={`pointer-events-none inline-flex gap-x-1.5 items-center transition duration-300
          ${isTriggered && '-translate-y-1.5 opacity-0'}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-3 h-3"
        >
          <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
        </svg>
        Trigger
      </span>
      <span
        aria-hidden={!isTriggered}
        className={`pointer-events-none absolute inset-0 flex items-center justify-center text-indigo-400 transition duration-300
            ${!isTriggered && 'translate-y-1.5 opacity-0'}`}
      >
        Triggered!
      </span>
    </button>
  );
}
