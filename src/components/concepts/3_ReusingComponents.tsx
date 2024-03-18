import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { LayoutSection } from '../../layouts/LayoutSection';

interface Props {
  children: React.ReactNode;
  className?: string;
  animate?: string;
}
export const Box = ({ children, className, animate }: Props) => {
  return (
    <div
      data-animate={animate}
      className={`w-20 h-20 rounded-md bg-green-400 text-white font-bold grid place-content-center text-center ${className} box`}
    >
      {children}
    </div>
  );
};

export const ReusingComponents = () => {
  const app = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("[data-animate='rotate']", {
        rotation: 360,
        // yoyo: true,
        // repeat: -1,
        // repeatDelay: 1,
      });
      
      gsap.to("[data-animate='move']", {
        x: 360,
        // yoyo: true,
        // repeat: -1,
        // repeatDelay: 1,
      });

      gsap.set('.nothing', { backgroundColor: 'red' });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <LayoutSection title="Reusing Components">
      <div ref={app} className="flex flex-col gap-4">
        <Box animate="rotate">Box 1</Box>
        <Box className="nothing">No hacer nada</Box>
        <Box animate="move">Box 3</Box>
      </div>
    </LayoutSection>
  );
};
