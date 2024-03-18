import { useLayoutEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './ui.module.css';

interface CircleHandle {
  moveTo: (x: number, y: number) => void;
}

interface Props {}

export const Circle = forwardRef<CircleHandle, Props>((_, ref) => {
  const elementRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        moveTo(x, y) {
          gsap.to(elementRef.current, {
            x,
            y,
            // duration: 1,
          });
        },
      };
    },
    []
  );

  return (
    <div
      ref={elementRef}
      className={`${styles.circle} fixed top-0 left-0 w-px h-px -translate-x-1/2 -translate-y-1/2 bg-green-400 rounded-full pointer-events-none`}
    ></div>
  );
});

export const Mouse = () => {
  const circleRef = useRef<CircleHandle>(null);
  // const circleRefs = useRef<CircleHandle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const { innerWidth, innerHeight } = window;
    console.log({ innerWidth, innerHeight });

    circleRef.current?.moveTo(0, 0);

    const onMove = ({ clientX, clientY }: PointerEvent) => {
      circleRef.current?.moveTo(clientX, clientY);
    };

    // window.addEventListener('pointermove', onMove);
    // LIMITADO POR UN CONTAINER
    const container = containerRef.current;
    container?.addEventListener('pointermove', onMove);

    // return () => window.removeEventListener('pointermove', onMove);
    return () => container?.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div ref={containerRef} className="relative bg-gray-950 h-96 cursor-none">
      <Circle ref={circleRef} />
    </div>
  );
};
