'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'home',
  },
  '/experience': {
    name: 'experience',
  },
  '/about': {
    name: 'about',
  },
  '/contact': {
    name: 'contact',
  },
};

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="min-[600px]:mb-16 mb-9 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-col min-[479px]:flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="w-20 min-w-[60px] mb-4 min-[479px]:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 67.47">
                <g data-name="group 2">
                  <g data-name="group 1">
                    <path
                      d="M38.84 67.28 77.68 0H0l38.84 67.28zM86.22.2 47.38 67.47h77.68L86.22.2zm46.1.03v67.24H210L132.32.23z"
                      fill="#fff"
                    />
                    <path
                      fill="#dd0b1b"
                      d="M202.74 51.26V9.62h-48.1l48.1 41.64z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex flex-row space-x-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                      {
                        "text-neutral-500": !isActive,
                      }
                    )}
                  >
                    <span className="relative py-1 px-2">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                          layoutId="sidebar"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
