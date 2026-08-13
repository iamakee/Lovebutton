import { memories } from '../data/memories';
import { Lily } from '../components/Lily';
import { Reveal } from '../components/Reveal';
import { LilyHero } from '../components/LilyHero';

function Heading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <Reveal className="mx-auto max-w-xl text-center"><p className="mb-4 text-[10px] uppercase tracking-[.28em] text-[#9b806b]">{eyebrow}</p><h2 className="serif text-5xl leading-[.9] text-[#465448] sm:text-6xl">{title}</h2>{copy && <p className="mt-6 leading-7 text-[#677168]">{copy}</p>}</Reveal>;
}

export default function Home() {
  return <main className="paper-grain overflow-hidden">
    <LilyHero />
    <div id="memories">
      <section className="px-5 py-24 sm:px-6"><Heading eyebrow="A timeline of us" title="From respect button to love button" copy="Each story is a memory of how our love grew and will continue to grow forever."/><div className="relative mx-auto mt-16 max-w-5xl"><div className="timeline-line absolute bottom-8 left-3 top-8 w-px md:left-1/2"/>{memories.map((memory, index) => <Reveal key={memory.title} className={`relative mb-20 ml-8 flex flex-col gap-5 md:mb-28 md:ml-0 md:w-[calc(50%-2.5rem)] ${index % 2 ? 'md:ml-[calc(50%+2.5rem)]' : ''}`}><span className="absolute -left-[29px] top-8 h-3 w-3 rounded-full border-2 border-[#fcfaf5] bg-[#c99688]"/><div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-[#e8e1d7]"><img src={memory.image} alt={memory.title} loading={index < 2 ? 'eager' : 'lazy'} className="h-full w-full object-contain object-center"/></div><article className="glass rounded-[1.5rem] p-6"><p className="text-[10px] uppercase tracking-[.2em] text-[#a48870]">{memory.date}</p><h3 className="serif mt-3 text-4xl leading-none">{memory.title}</h3><p className="mt-5 text-sm leading-7 text-[#667166]">{memory.story}</p><p className="serif mt-5 border-l border-[#d6b7ad] pl-4 text-lg italic text-[#788274]">“{memory.quote}”</p></article></Reveal>)}</div></section>
      <section className="px-5 py-28 text-center"><Lily className="mx-auto mb-7" size={76}/><Heading eyebrow="There is so much ahead" title="Our story isn&apos;t finished."/><p className="mx-auto mt-7 max-w-md text-sm leading-7 text-[#677168]">This isn&apos;t completed yet — it&apos;s only the beginning. There will be many more versions of this page, so don&apos;t worry.</p><p className="mt-8 text-sm tracking-[.1em] text-[#748074]">Many more memories loading<span className="inline-block w-7 animate-pulse">...</span></p></section>
      <footer className="bg-[#405044] px-5 py-24 text-center text-[#f7f1e9]"><p className="serif mx-auto max-w-xl text-4xl leading-tight sm:text-5xl">No matter how many kilometres separate us...<br/>You&apos;ll always have a home in my heart.</p><p className="mt-10 text-2xl text-[#efc8c1]">♥</p><p className="mt-4 text-xs tracking-[.2em] text-[#d6ded4]">— VISHWA</p></footer>
    </div>
  </main>;
}
