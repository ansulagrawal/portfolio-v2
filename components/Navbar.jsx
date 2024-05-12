'use client';

import { routes } from '@/config/global';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Navbar() {
  const { pathname } = usePathname();
  const url = pathname?.split?.('/')?.[1] || 'home';

  return (
    <header className="flex items-center justify-between shadow-sm">
      <Link href="/" className="flex font-black items-center text-xl cursor-pointer">
        <Image src="/img/logo.svg" alt="logo" width={60} height={60} className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500" />
        {'AnsulAgrawal'.split('').map((letter, index) => {
          return (
            <span key={index} className={`hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim ${index === 4 ? 'mr-1' : ''}`}>
              {letter}
            </span>
          );
        })}
      </Link>
      <nav>
        <ul className="flex items-center gap-10">
          {routes.map(rt => (
            <li key={rt.key} className={`list-none cursor-pointer ${url === rt.key ? 'opacity-100' : 'opacity-40 hover:opacity-100 transition-opacity'}`}>
              <Link href={rt.path}>{rt.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
