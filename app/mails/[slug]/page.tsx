import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Lily } from '../../../components/Lily';
import { letters } from '../../../data/comfort';

export function generateStaticParams() {
  return letters.map((letter) => ({ slug: letter.slug }));
}

export default function LetterPage({ params }: { params: { slug: string } }) {
  const letter = letters.find((item) => item.slug === params.slug);
  if (!letter) notFound();

  return (
    <main className="paper-grain min-h-[100svh] overflow-hidden px-5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <Link href="/mails" className="text-xs tracking-[.16em] text-[#7d887b]">← MAILS</Link>
        <article className="handmade-letter relative mt-10 overflow-hidden rounded-sm px-7 py-12 shadow-[0_18px_45px_rgba(78,60,37,.22)] sm:px-14 sm:py-16">
          <Lily className="absolute -right-8 -top-8 opacity-20" size={150} />
          <p className="relative text-right text-xs italic text-[#887864]">{letter.date}</p>
          <div className="relative mt-10 font-[Caveat,'Comic_Sans_MS',cursive] text-[1.28rem] leading-9 text-[#585a4d] sm:text-[1.45rem] sm:leading-10">
            <p>{letter.greeting}</p>
            {letter.paragraphs.map((paragraph) => <p key={paragraph} className="mt-7">{paragraph}</p>)}
            <p className="mt-10">{letter.signOff}<br /><span className="text-3xl text-[#9d7069]">{letter.signature}</span></p>
          </div>
        </article>
      </div>
    </main>
  );
}
