'use client';

import { routes } from '@/config/global';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <nav className="z-10 relative">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center text-lg font-bold">
          <Image src="/img/logo.svg" alt="logo" width={60} height={60} className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500" />
          {'AnsulAgrawal'.split('').map((letter, index) => {
            return (
              <span key={index} className={`hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim ${index === 4 ? 'mr-1' : ''}`}>
                {letter}
              </span>
            );
          })}
        </Link>
        <button onClick={toggleMenu} className="burger visible md:hidden">
          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
      </div>

      {isMenuOpen && (
        <ul className="flex flex-col absolute h-[calc(100vh-4.5rem)] w-full bg-bg gap-4 py-10">
          {routes.map((rt, ind) => (
            <li key={rt.key} className="border-b list-none text-gray-100 border-gray-900 text-sm font-semibold pb-5" style={{ transitionDelay: `${150 + ind * 25}ms` }}>
              <Link href={rt.path}>{rt.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default MobileNavbar;

function MenuIcon(props) {
  return (
    <svg className="h-6 w-6 absolute text-gray-100" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M2.5 7.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 12.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 17.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CrossIcon(props) {
  return (
    <svg
      className="h-6 w-6 absolute"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}>
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
