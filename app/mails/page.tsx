import Link from 'next/link';
import { letters } from '../../data/comfort';

export default function MailsPage() {
  return (
    <main className="paper-grain min-h-[100svh] overflow-hidden px-5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-xs tracking-[.16em] text-[#7d887b]">← HOME</Link>
        <header className="mt-11 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.15rem] bg-[#e7b9b2] text-3xl shadow-sm">✉</div>
          <p className="mt-5 text-[10px] uppercase tracking-[.3em] text-[#9e846f]">A little post from me</p>
          <h1 className="serif mt-3 text-5xl text-[#465448] sm:text-6xl">Mails</h1>
        </header>

        <section className="mt-12 grid gap-4" aria-label="Letters">
          {letters.map((letter, index) => (
            <Link key={letter.slug} href={`/mails/${letter.slug}`} className="group glass flex items-center gap-4 rounded-[1.35rem] p-4 text-left transition-transform duration-200 hover:-translate-y-0.5 sm:p-5">
              <div className="mini-envelope relative grid h-16 w-20 shrink-0 place-items-center rounded-md shadow-sm"><span className="relative z-10 text-[#91685d]">♥</span></div>
              <div className="min-w-0 flex-1"><p className="text-[10px] uppercase tracking-[.18em] text-[#a48870]">Letter {index + 1}</p><h2 className="serif mt-1 truncate text-3xl text-[#4b5a4d]">{letter.subject}</h2><p className="mt-1 truncate text-sm text-[#727a70]">{letter.preview}</p></div>
              <span className="text-xl text-[#aa8176] transition-transform group-hover:translate-x-1">›</span>
            </Link>
          ))}
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-[#8b8578]">To write or add letters, edit <code>letters</code> in <code>data/comfort.ts</code>.</p>
      </div>
    </main>
  );
}
