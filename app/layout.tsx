import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'A little book of us', description: 'A quiet collection of memories.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
