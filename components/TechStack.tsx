"use client";

import React from "react";
import { cn } from "@/lib/utils";

const LOGOS = [
  {
    src: "/re.svg",
    alt: "React Logo",
  },
  {
    src: "/next.svg",
    alt: "Next.js Logo",
  },
  {
    src: "/tail.svg",
    alt: "Tailwind Logo",
  },
  {
    src: "/ts.svg",
    alt: "TypeScript Logo",
  },
  {
    src: "/three.svg",
    alt: "Three.js Logo",
  },
  {
    src: "/fm.svg",
    alt: "Framer Motion Logo",
  },
  {
    src: "/stream.svg",
    alt: "Stream Logo",
  },
  {
    src: "/c.svg",
    alt: "C Logo",
  },
  {
    src: "/gsap.svg",
    alt: "GSAP Logo",
  },
];

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: typeof LOGOS;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    setStart(true);
  }, []);

  const speedMap = {
    fast: 30,
    normal: 50,
    slow: 70,
  };

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 max-w-7xl overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-8",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          "--animation-duration": `${speedMap[speed]}s`,
          "--animation-direction": direction === "left" ? "forwards" : "reverse",
        } as React.CSSProperties}
      >
        {[...items, ...items].map((item, idx) => (
          <li
            key={idx}
            className="relative w-[150px] max-w-full flex-shrink-0 px-6 py-4 bg-black/5 rounded-xl border border-white/[0.2] backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:border-purple/50"
          >
            <img 
              src={item.src} 
              alt={item.alt} 
              className="object-contain w-full h-full transition-all duration-300 hover:brightness-110" 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function TechStack() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-black py-20">
      <h1 className="heading mb-16">
        My Tech <span className="text-purple">Stack</span>
      </h1>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <InfiniteMovingCards items={LOGOS} speed="slow" />
      </div>
    </div>
  );
} 