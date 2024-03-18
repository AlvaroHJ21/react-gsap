import { gsap } from 'gsap';
import { useEffect, useLayoutEffect, useRef } from 'react';

interface ItemProps {
  children: React.ReactNode;
  onClickOption: () => void;
}

export const TabItem = ({ children, onClickOption }: ItemProps) => {
  return (
    <li
      onClick={onClickOption}
      className="relative w-40 px-4 py-2 text-center text-white cursor-pointer"
    >
      {children}
    </li>
  );
};

interface Props {
  items: {
    text: string;
  }[];
}

export const TabMenu = ({ items }: Props) => {
  const scope = useRef(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLUListElement>(null);
  const width = useRef(0);

  useLayoutEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    const padding = 16;
    width.current = ((containerRef.current?.clientWidth ?? 1) - padding) / items.length;
    console.log(width.current);
    return () => {};
  }, [items.length]);

  const animateTabChange = (id: number) => {
    const padding = 16;
    const width = ((containerRef.current?.clientWidth ?? 1) - padding) / items.length;
    gsap.to(indicatorRef.current, {
      x: id * width,
      width: width,
      duration: 0.3,
    });
  };

  return (
    <nav ref={scope}>
      <ul ref={containerRef} className="relative flex p-2 bg-gray-500 rounded-md max-w-fit">
        <div ref={indicatorRef} className="absolute bg-black rounded-md top-2 bottom-2"></div>
        {items.map((item, idx) => (
          <TabItem key={item.text} onClickOption={() => animateTabChange(idx)}>
            <p>{item.text}</p>
          </TabItem>
        ))}
      </ul>
    </nav>
  );
};
