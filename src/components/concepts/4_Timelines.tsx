import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { LayoutSection } from '../../layouts/LayoutSection';

export const Timelines = () => {
  const scope = useRef(null);

  const timelineRef = useRef<gsap.core.Timeline>();
  const [reversed, setReversed] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        yoyo: true,
        repeat: 1,
      });

      timelineRef.current = tl;

      tl.to('.box', {
        x: 300,
      });
      tl.to(
        '.box',
        {
          rotate: 360,
        },
        0
      );
      tl.to('.box', { width: 500 });

      // tl.set('.box p', {
      //   xPercent: 100,
      //   duration: 0,
      // });

      tl.fromTo(
        '.box p',
        {
          xPercent: 65,
          duration: 0,
          // repeat: -1,
        },
        {
          xPercent: -64,
          duration: 6,
          // repeat: -1,
        }
      );

      // tl.fromTo('.box p', { fontSize: 20 }, { fontSize: 60 });
    }, scope);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    timelineRef.current?.reversed(reversed);
  }, [reversed]);

  const handleToggle = () => {
    // console.log('click');
    setReversed(!reversed);
  };

  return (
    <LayoutSection title="Timelines">
      <button onClick={handleToggle} className="btn">
        Toggle
      </button>
      <div ref={scope}>
        <div className="overflow-hidden box">
          <p className="text-6xl tracking-[2rem] uppercase whitespace-nowrap">
            Alvaro Huaysara Jauregui
          </p>
        </div>
      </div>
      <div className="box">Box</div>
    </LayoutSection>
  );
};
