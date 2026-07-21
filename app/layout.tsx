import type { Metadata } from 'next';
import { Caveat, Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const serif = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['400', '500', '600'] });
const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500'] });
const handwritten = Caveat({ subsets: ['latin'], variable: '--font-hand', weight: ['400', '500'] });

export const metadata: Metadata = { title: 'A little book of us', description: 'A quiet collection of memories.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${serif.variable} ${sans.variable} ${handwritten.variable}`}>{children}</body></html>;
}
