import { name } from '@/config/home';
import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <>
      <div className="relative w-full pt-20 pb-64 flex justify-center text-center flex-col items-center">
        <p className="text-xl mb-5">Hey, I'm {name}.</p>
        <div className="relative">
          <h1 className="inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold">
            I enjoy <span className="text-fun-pink">building</span> apps for the <span className=" text-fun-pink">web</span> and <span className="text-fun-pink">android</span>.
          </h1>

          <Image src="/img/doodles/hero/html.svg" height={65} width={64} className="hero-img top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]" />

          <Image src="/img/doodles/hero/nextjs.svg" height={80} width={44} className="hero-img top-[75px] right-0 opacity-40" />

          <Image src="/img/doodles/hero/coder.svg" height={270} width={300} className="hero-img hidden sm:block bottom-[-250px] left-[-130px]" />

          <Image src="/img/doodles/hero/js.svg" height={70} width={80} className="hero-img hidden sm:block left-[100px] lg:left-[160px] bottom-[-60px]" />

          <Image src="/img/doodles/hero/dino.svg" height={170} width={170} className="hero-img bottom-[-200px] right-[65%] sm:right-[45%]" />

          <Image src="/img/doodles/hero/paintbrush.svg" height={220} width={170} className="hero-img right-[-60px] sm:right-11 bottom-[-100px]" />

          <Image src="/img/doodles/hero/pop1.svg" height={125} width={90} className="hero-img hidden sm:block top-[-130px] sm:left-[12%] lg:left-[80px]" id="pop1" />

          <Image src="/img/doodles/hero/code.svg" height={125} width={90} className="hero-img left-[-35px] bottom-[-85px] sm:bottom-[-50px] sm:left-5 opacity-40" />
        </div>
      </div>
    </>
  );
}

export default Hero;
