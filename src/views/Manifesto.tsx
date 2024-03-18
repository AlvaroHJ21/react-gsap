import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Manifesto = () => {
  const scope = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({});

      tl.from('#image', {
        width: 400,
        height: 600,
      });

      tl.from('#paragraph', {
        y: 100,
        opacity: 0,
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: '#image-container',
        start: 'top top',
        end: '+=1000 bottom',
        markers: true,
        scrub: 1,
        pin: '#image-container',
        // toggleActions: 'play none none none',
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={scope} className="min-h-screen text-white bg-black">
      <div id="container" className="pt-40">
        <h1 className="flex flex-col items-center text-7xl">
          <span>THE MANIFESTO</span> <span className="font-bold">PORTFOLIO WEBSITE</span>
        </h1>
        <div className="flex my-10">
          <div className="flex-1"></div>
          <div className="flex flex-col flex-1">
            <span>Experience the</span>
            <span>perfect blend or creativity</span>
            <span>and functionality</span>
          </div>
        </div>

        <div
          id="image-container"
          className="relative grid h-screen overflow-hidden place-content-center"
        >
          <img
            id="image"
            src="http://manifesto.clapat.com/images/00hero.jpg"
            alt=""
            className="block object-cover w-full h-full"
          />
          <p
            id="paragraph"
            className="absolute bottom-0 px-8 pb-20 text-6xl font-bold text-center uppercase"
          >
            Stand out from the crowd and make a statement with our sleek and stylish portfolio
            template that speaks volumes about your creativity.
          </p>
        </div>
      </div>
    </main>
  );
};
