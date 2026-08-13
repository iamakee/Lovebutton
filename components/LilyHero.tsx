'use client';

import { useEffect, useRef, useState } from 'react';
import {
  cubicBezier,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';

const TEPAL_PATH = 'M0,0 C-3,-20 -14,-30 -17,-55 C-20,-85 -16,-115 -7,-138 C-12,-144 -11,-150 -4,-153 C3,-156 10,-152 10,-145 C17,-120 18,-88 15,-58 C13,-32 3,-18 0,0 Z';

const OUTER_TEPALS = [
  { budAngle: -11, bloomAngle: -100 },
  { budAngle: -2, bloomAngle: -18 },
  { budAngle: 6, bloomAngle: 55 },
];

const INNER_TEPALS = [
  { budAngle: -6, bloomAngle: -55 },
  { budAngle: 2, bloomAngle: 18 },
  { budAngle: 11, bloomAngle: 100 },
];

const STAMEN_ANGLES = [-72, -43, -14, 14, 43, 72];
const EASE_IN_OUT = cubicBezier(0.42, 0, 0.58, 1);
const BLOOM_EASE = cubicBezier(0.22, 1, 0.36, 1);

type TepalProps = {
  bloom: MotionValue<number>;
  budAngle: number;
  bloomAngle: number;
  bloomScale: number;
  layer: 'outer' | 'inner';
  reducedMotion: boolean;
};

function Tepal({ bloom, budAngle, bloomAngle, bloomScale, layer, reducedMotion }: TepalProps) {
  const rotate = useTransform(bloom, [0, 1], [budAngle, bloomAngle]);
  const scaleX = useTransform(bloom, [0, 1], [0.34, bloomScale]);
  const budOpacity = useTransform(bloom, [0, 0.18, 0.42, 1], [1, 1, 0, 0]);
  const flowerOpacity = useTransform(bloom, [0, 0.18, 0.42, 1], [0, 0, 1, 1]);

  const flowerFill = layer === 'outer' ? 'url(#lily-outer-tepal)' : '#fffdf8';
  const flowerStroke = layer === 'outer' ? '#c98f7e' : '#c9a45a';

  return (
    <motion.g
      style={{
        rotate: reducedMotion ? bloomAngle : rotate,
        scaleX: reducedMotion ? bloomScale : scaleX,
        transformBox: 'fill-box',
        transformOrigin: '50% 100%',
      }}
    >
      <motion.path
        d={TEPAL_PATH}
        fill="url(#lily-bud-tepal)"
        stroke="#6f7e59"
        strokeWidth="1.35"
        style={{ opacity: reducedMotion ? 0 : budOpacity }}
      />
      <motion.path
        d={TEPAL_PATH}
        fill={flowerFill}
        stroke={flowerStroke}
        strokeWidth={layer === 'outer' ? '1.55' : '1.15'}
        style={{ opacity: reducedMotion ? 1 : flowerOpacity }}
      />
      <motion.path
        d="M0,-6 C1,-44 0,-97 0,-142"
        fill="none"
        stroke="#c9a99a"
        strokeWidth="1.05"
        strokeLinecap="round"
        style={{ opacity: reducedMotion ? 0.4 : flowerOpacity }}
      />
    </motion.g>
  );
}

function Stamen({ angle, opacity, reducedMotion }: { angle: number; opacity: MotionValue<number>; reducedMotion: boolean }) {
  return (
    <motion.g transform={`rotate(${angle})`} style={{ opacity: reducedMotion ? 1 : opacity }}>
      <path d="M0,0 Q10,-45 6,-88" fill="none" stroke="#b98f52" strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="6" cy="-94" rx="4" ry="11" fill="#c9973f" transform="rotate(16 6 -94)" />
      <ellipse cx="4.8" cy="-97" rx="1.15" ry="4.6" fill="#e1bc70" opacity="0.64" transform="rotate(16 4.8 -97)" />
    </motion.g>
  );
}

function Pistil({ opacity, reducedMotion }: { opacity: MotionValue<number>; reducedMotion: boolean }) {
  return (
    <motion.g transform="rotate(-3)" style={{ opacity: reducedMotion ? 1 : opacity }}>
      <path d="M0,0 Q4,-70 0,-125" fill="none" stroke="#9fae7a" strokeWidth="2.25" strokeLinecap="round" />
      <circle cx="-4" cy="-126" r="4.2" fill="#8a9c68" />
      <circle cx="1" cy="-129" r="4.2" fill="#8a9c68" />
      <circle cx="5" cy="-125" r="4.2" fill="#8a9c68" />
    </motion.g>
  );
}

export function LilyHero() {
  const wrapperRef = useRef<HTMLElement>(null);
  const flowerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const [layout, setLayout] = useState({ flowerHeight: 278, viewportHeight: 800 });
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const updateLayout = () => {
      const flowerHeight = flowerRef.current?.getBoundingClientRect().height ?? 278;
      const viewportHeight = window.innerHeight;

      setLayout((current) => (
        Math.abs(current.flowerHeight - flowerHeight) < 1 && current.viewportHeight === viewportHeight
          ? current
          : { flowerHeight, viewportHeight }
      ));
    };

    updateLayout();
    const observer = new ResizeObserver(updateLayout);
    if (flowerRef.current) observer.observe(flowerRef.current);
    window.addEventListener('resize', updateLayout);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateLayout);
    };
  }, []);

  // The canvas begins just below the viewport; its visible bloom settles near 18vh.
  // Until 45% scroll progress, only this transform changes.
  const restingY = layout.flowerHeight - (layout.viewportHeight * 0.93);
  const riseY = useTransform(scrollYProgress, [0, 0.45], [0, restingY], { ease: EASE_IN_OUT });

  // These ranges intentionally begin after the rise is fully complete.
  const outerBloom = useTransform(scrollYProgress, [0.45, 0.85], [0, 1], { ease: BLOOM_EASE });
  const innerBloom = useTransform(scrollYProgress, [0.55, 0.9], [0, 1], { ease: BLOOM_EASE });
  const glowOpacity = useTransform(outerBloom, [0, 0.34, 1], [0, 0.28, 0.5]);
  const centerOpacity = useTransform(scrollYProgress, [0.83, 0.9], [0, 1], { ease: BLOOM_EASE });

  return (
    <section
      ref={wrapperRef}
      className={`lily-hero relative ${reducedMotion ? 'h-[100svh]' : 'h-[340svh]'}`}
      aria-label="A lily blooming as you scroll"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div
          ref={flowerRef}
          className="pointer-events-none absolute bottom-[-8svh] left-1/2 w-[86vw] max-w-[26rem]"
          style={{ x: '-50%', y: reducedMotion ? restingY : riseY }}
        >
          <svg viewBox="-190 -175 380 260" className="block h-auto w-full overflow-visible" aria-hidden="true" focusable="false">
            <defs>
              <radialGradient id="lily-outer-tepal" cx="50%" cy="100%" r="112%">
                <stop offset="0%" stopColor="#e7b8a8" />
                <stop offset="58%" stopColor="#f5d7cf" />
                <stop offset="100%" stopColor="#fffdfa" />
              </radialGradient>
              <linearGradient id="lily-bud-tepal" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#7c8a5f" />
                <stop offset="100%" stopColor="#fbf6e6" />
              </linearGradient>
              <radialGradient id="lily-throat" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#d9c65a" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#d9c65a" stopOpacity="0" />
              </radialGradient>
            </defs>

            <motion.ellipse
              cx="0"
              cy="-7"
              rx="79"
              ry="47"
              fill="url(#lily-throat)"
              style={{ opacity: reducedMotion ? 0.5 : glowOpacity }}
            />

            {OUTER_TEPALS.map((tepal) => (
              <Tepal
                key={tepal.bloomAngle}
                bloom={outerBloom}
                {...tepal}
                bloomScale={1}
                layer="outer"
                reducedMotion={reducedMotion}
              />
            ))}
            {INNER_TEPALS.map((tepal) => (
              <Tepal
                key={tepal.bloomAngle}
                bloom={innerBloom}
                {...tepal}
                bloomScale={0.88}
                layer="inner"
                reducedMotion={reducedMotion}
              />
            ))}

            {STAMEN_ANGLES.map((angle) => (
              <Stamen key={angle} angle={angle} opacity={centerOpacity} reducedMotion={reducedMotion} />
            ))}
            <Pistil opacity={centerOpacity} reducedMotion={reducedMotion} />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
