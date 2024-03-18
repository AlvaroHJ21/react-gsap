import { LayoutSection } from '../../layouts/LayoutSection';
import { useLayoutEffect } from 'react';

import gsap from 'gsap';

export const Interaction = () => {
  // const comp = useRef(null); //cree una referencia para el elemento de nivel raíz (lo usaremos más adelante)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      //Animaciones aquí
    });

    // const onMove = () => {
    //   console.log('move');
    // };

    // window.addEventListener('pointermove', onMove);

    return () => {
      ctx.revert();

      // window.removeEventListener('pointermove', onMove);
    };
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // console.log(e.currentTarget);
    // console.log('handleMouseEnter');
    gsap.to(e.currentTarget, {
      scale: 1.5,
      background: 'rgb(251 146 60 / 1)', //orange
    });
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // console.log(e.currentTarget);
    // console.log('handleMouseLeave');
    gsap.to(e.currentTarget, {
      scale: 1,
      backgroundColor: 'rgb(74 222 128 / 1', //green
    });
  };

  return (
    <LayoutSection title="Interaction">
      {/* Box */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="grid w-20 h-20 bg-green-400 rounded-md place-content-center"
      >
        <p className="font-bold text-white">Hover Me</p>
      </div>
    </LayoutSection>
  );
};
