import Link from 'next/link';
import { Lily } from '../../components/Lily';
import { missMeMoments } from '../../data/comfort';

export default function MissMePage() {
  return (
    <main className="paper-grain min-h-[100svh] overflow-hidden px-5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-xs tracking-[.16em] text-[#7d887b]">← HOME</Link>
        <header className="mx-auto mt-12 max-w-xl text-center">
          <Lily className="mx-auto mb-6" size={92} />
          <p className="text-[10px] uppercase tracking-[.3em] text-[#9e846f]">Open whenever you need me</p>
          <h1 className="serif mt-4 text-5xl leading-[.9] text-[#465448] sm:text-7xl">For when you<br />miss me.</h1>
          <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-[#677168]">A little place full of us, until I can be right there beside you.</p>
        </header>

        <section className="mt-16 grid gap-7 sm:grid-cols-3" aria-label="Little memories to add">
          {missMeMoments.map((moment, index) => {
            const isVideo = /\.(mov|mp4|webm)$/i.test(moment.image ?? '');
            return <article key={moment.title} className="glass overflow-hidden rounded-[1.5rem] p-3">
              {isVideo ? (
                <video autoPlay loop muted playsInline preload="metadata" className="aspect-[4/5] w-full rounded-[1rem] object-cover" aria-label={moment.title}>
                  <source src={moment.image} />
                </video>
              ) : moment.image ? (
                <img src={moment.image} alt={moment.title} className="aspect-[4/5] w-full rounded-[1rem] object-cover" />
              ) : (
                <div className="photo-placeholder flex aspect-[4/5] items-center justify-center rounded-[1rem] border border-dashed border-[#bcae94] px-6 text-center text-xs leading-5 text-[#8b8578]">
                  Add photo {index + 1} here
                </div>
              )}
              <div className="px-3 pb-4 pt-5">
                <h2 className="serif text-3xl text-[#4b5a4d]">{moment.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#6c756c]">{moment.text}</p>
              </div>
            </article>;
          })}
        </section>

        <p className="mt-12 text-center text-xs leading-5 text-[#8b8578]">You can add your photos, videos, and words in <code>data/comfort.ts</code>.</p>
        <div className="mt-9 text-center"><Link href="/mails" className="inline-flex min-h-11 items-center rounded-full border border-[#cbb29a] bg-white/65 px-6 py-3 text-sm text-[#556154] shadow-sm">There&apos;s a mail waiting too</Link></div>
      </div>
    </main>
  );
}
