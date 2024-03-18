import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { LayoutSection } from '../../layouts/LayoutSection';

export const Context = () => {
  const comp = useRef(null); //crear una referencia para el elemento de nivel raíz (para el alcance)
  const circle = useRef(null);

  useLayoutEffect(() => {
    //creamos nuestro contexto. Esta función se invoca
    //inmediatamente y todas las animaciones GSAP y
    //ScrollTriggers creados durante la ejecución de esta
    //función se registran para que podamos revert()
    //más tarde (limpieza)
    const ctx = gsap.context(() => {
      // gsap.to(".box", {...});
      // gsap.to(circle.current, {
      gsap.to('.box', {
        rotation: 360,
        // duration: 3,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <LayoutSection title="Context">
      <div ref={comp} className="flex justify-center gap-8 py-8 m-auto">
        <div
          ref={circle}
          className="grid w-20 h-20 bg-green-400 rounded-md box place-content-center"
        >
          Selector
        </div>
        <div
          ref={circle}
          className="grid w-20 h-20 bg-purple-400 rounded-full box place-content-center"
        >
          Ref
        </div>
      </div>
    </LayoutSection>
  );
};
