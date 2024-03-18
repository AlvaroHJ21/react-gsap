import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

export const Scroll = () => {
  const scope = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({});

      tl.to('#indicator', {
        width: '100%',
        duration: 2,
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: '#contenido',
        start: '92px 92px',
        end: 'bottom bottom',
        markers: true,
        // toggleActions: 'play none none none',
        scrub: true,
        // pin: '#indicator',
      });
    }, scope);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={scope}>
      <div id="indicator" className="fixed top-0 w-0 h-4 bg-blue-500"></div>
      {/* <div className="box"></div> */}
      <div id="contenido" className="h-[200vh]"></div>
    </div>
  );
};
