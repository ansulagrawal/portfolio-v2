import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Projects';
import React from 'react';

function Page() {
  return (
    <>
      <Hero />
      <div className="mt-20 space-y-20">
        <Projects />
      </div>
    </>
  );
}

export default Page;
