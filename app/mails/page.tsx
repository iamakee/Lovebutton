import Link from 'next/link';
import { Lily } from '../../components/Lily';
import { letter } from '../../data/comfort';

export default function MailsPage() {
  return (
    <main className="paper-grain min-h-[100svh] overflow-hidden px-5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-xs tracking-[.16em] text-[#7d887b]">← HOME</Link>
        <header className="mt-11 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.15rem] bg-[#e7b9b2] text-3xl shadow-sm">✉</div>
          <p className="mt-5 text-[10px] uppercase tracking-[.3em] text-[#9e846f]">One unread message</p>
          <h1 className="serif mt-3 text-5xl text-[#465448] sm:text-6xl">Mails</h1>
        </header>

        <article className="handmade-letter relative mt-12 overflow-hidden rounded-sm px-7 py-12 shadow-[0_18px_45px_rgba(78,60,37,.18)] sm:px-14 sm:py-16">
          <Lily className="absolute -right-8 -top-8 opacity-20" size={150} />
          <p className="relative text-right text-xs italic text-[#887864]">{letter.date}</p>
          <div className="relative mt-10 font-[Caveat,'Comic_Sans_MS',cursive] text-[1.28rem] leading-9 text-[#585a4d] sm:text-[1.45rem] sm:leading-10">
            <p>{letter.greeting}</p>
            {letter.paragraphs.map((paragraph) => <p key={paragraph} className="mt-7">{paragraph}</p>)}
            <p className="mt-10">{letter.signOff}<br /><span className="text-3xl text-[#9d7069]">{letter.signature}</span></p>
          </div>
        </article>

        <p className="mt-8 text-center text-xs leading-5 text-[#8b8578]">To write your letter, edit <code>letter</code> in <code>data/comfort.ts</code>.</p>
      </div>
    </main>
  );
}
