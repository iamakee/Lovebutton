import { Lily } from '../components/Lily';
import { Reveal } from '../components/Reveal';

export function StoryEnding() {
  return <>
    <section className="relative overflow-hidden px-6 py-32 text-center">
      <Lily className="mx-auto mb-8 text-[#d9afa7]" />
      <Reveal><p className="mb-4 text-[10px] uppercase tracking-[.28em] text-[#9b806b]">There is so much ahead</p><h2 className="serif text-5xl leading-[.9] text-[#465448] sm:text-6xl">Our story isn&apos;t finished.</h2></Reveal>
      <p className="mt-8 text-sm tracking-[.1em] text-[#748074]">More memories loading<span className="inline-block w-6 animate-pulse">...</span></p>
    </section>
    <footer className="bg-[#405044] px-6 py-24 text-center text-[#f7f1e9]"><p className="serif mx-auto max-w-xl text-4xl leading-tight sm:text-5xl">No matter how many kilometres separate us...<br/>You&apos;ll always have a home in my heart.</p><p className="mt-10 text-2xl text-[#efc8c1]">♥</p><p className="mt-4 text-xs tracking-[.2em] text-[#d6ded4]">— VISHWA</p></footer>
  </>;
}
