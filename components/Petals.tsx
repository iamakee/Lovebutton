'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const petals = Array.from({ length: 9 }, (_, i) => ({ left: `${18 + ((i * 31) % 64)}%`, delay: i * .12, rotate: i % 2 ? 130 : -130 }));

export function Petals() {
  const [opening, setOpening] = useState(false);
  const [visible, setVisible] = useState(true);
  const open = () => { setOpening(true); window.setTimeout(() => setVisible(false), 1650); };
  return <AnimatePresence>{visible && <motion.div exit={{ opacity: 0 }} transition={{ duration: .45 }} className="fixed inset-0 z-50 flex items-center justify-center bg-[#fcfaf5] paper-grain">
    <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#efd9d2]/45 blur-3xl"/><div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#dbe4d7]/50 blur-3xl"/>
    <button onClick={open} disabled={opening} aria-label="Open your memory book" className="relative z-10 flex flex-col items-center text-[#dda89f]">
      <motion.span className="block h-48 w-32" animate={opening ? { scale: [1, 1.12, .25], opacity: [1, 1, 0] } : { y: [0, -7, 0] }} transition={opening ? { duration: 1.35 } : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}><img src="/assets/pressed-white-lily.png" alt="A pressed white lily" className="h-full w-full object-contain"/></motion.span>
      {!opening && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }} className="mt-7 text-[10px] uppercase tracking-[.3em] text-[#a27f75]">tap the lily</motion.span>}
    </button>
    {opening && petals.map((petal, i) => <motion.i key={i} className="petal z-20" style={{ left: petal.left, top: '42%', width: 20, height: 28 }} initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }} animate={{ opacity: [0, .8, .55, 0], x: (i - 4) * 28, y: '58vh', rotate: petal.rotate }} transition={{ duration: 1.35, delay: petal.delay, ease: 'easeIn' }}/>) }
  </motion.div>}</AnimatePresence>;
}
