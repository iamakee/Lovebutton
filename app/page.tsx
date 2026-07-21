'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { memories } from '../data/memories';
import { Lily } from '../components/Lily';
import { Reveal } from '../components/Reveal';

function Heading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <Reveal className="mx-auto max-w-xl text-center"><p className="mb-4 text-[10px] uppercase tracking-[.28em] text-[#9b806b]">{eyebrow}</p><h2 className="serif text-5xl leading-[.9] text-[#465448] sm:text-6xl">{title}</h2>{copy && <p className="mt-6 leading-7 text-[#677168]">{copy}</p>}</Reveal>;
}

export default function Home() {
  const [entered, setEntered] = useState(false);
  return <main className="paper-grain overflow-hidden">
    <section className="relative flex min-h-[100svh] items-center justify-center px-5 sm:px-6">
      <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-[#efd9d2]/45 blur-3xl"/><div className="absolute -right-24 bottom-8 h-96 w-96 rounded-full bg-[#dbe4d7]/55 blur-3xl"/>
      <Reveal className="relative z-10 max-w-2xl text-center"><Lily className="mx-auto mb-8" size={124}/><p className="mb-6 text-[10px] uppercase tracking-[.3em] text-[#9e846f]">A little date, from Vellore to Mumbai</p><h1 className="serif text-6xl leading-none sm:text-8xl">Hi Aru <span className="text-[#c98e84]">♥</span></h1><p className="mx-auto mt-9 max-w-md whitespace-pre-line text-[15px] leading-8 text-[#657067]">I know things haven&apos;t been easy lately.{`\n\n`}I wish I could be there to hug you.{`\n\n`}Since I can&apos;t...{`\n\n`}I thought I&apos;d bring a few memories to you instead.</p><button onClick={() => { setEntered(true); document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' }); }} className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#cbb29a] bg-white/60 px-7 py-3 text-sm text-[#556154] shadow-sm"><span>Let&apos;s go on another date</span><Lily size={20}/></button></Reveal>
    </section>
    <motion.div id="memories" initial={{ opacity: 0 }} animate={{ opacity: entered ? 1 : .72 }} transition={{ duration: .65 }}>
      <section className="px-5 py-24 sm:px-6"><Heading eyebrow="A timeline of us" title="Little chapters, kept close" copy="Each stop is ready for you to make it yours."/><div className="relative mx-auto mt-16 max-w-5xl"><div className="timeline-line absolute bottom-8 left-3 top-8 w-px md:left-1/2"/>{memories.map((memory, index) => <Reveal key={memory.title} className={`relative mb-20 ml-8 flex flex-col gap-5 md:mb-28 md:ml-0 md:w-[calc(50%-2.5rem)] ${index % 2 ? 'md:ml-[calc(50%+2.5rem)]' : ''}`}><span className="absolute -left-[29px] top-8 h-3 w-3 rounded-full border-2 border-[#fcfaf5] bg-[#c99688]"/><div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-[#e8e1d7]"><img src={memory.image} alt={memory.title} loading={index < 2 ? 'eager' : 'lazy'} className="h-full w-full object-contain object-center"/></div><article className="glass rounded-[1.5rem] p-6"><p className="text-[10px] uppercase tracking-[.2em] text-[#a48870]">{memory.date}</p><h3 className="serif mt-3 text-4xl leading-none">{memory.title}</h3><p className="mt-5 text-sm leading-7 text-[#667166]">{memory.story}</p><p className="serif mt-5 border-l border-[#d6b7ad] pl-4 text-lg italic text-[#788274]">“{memory.quote}”</p></article></Reveal>)}</div></section>
      <footer className="bg-[#405044] px-5 py-24 text-center text-[#f7f1e9]"><p className="serif mx-auto max-w-xl text-4xl leading-tight sm:text-5xl">No matter how many kilometres separate us...<br/>You&apos;ll always have a home in my heart.</p><p className="mt-10 text-2xl text-[#efc8c1]">♥</p><p className="mt-4 text-xs tracking-[.2em] text-[#d6ded4]">— VISHWA</p></footer>
    </motion.div>
  </main>;
}
