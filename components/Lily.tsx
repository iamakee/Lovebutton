type Props = { className?: string; size?: number };
export function Lily({ className = '', size = 84 }: Props) {
  return <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <g fill="currentColor" opacity=".85"><path d="M50 49C29 39 15 19 21 7c15 4 26 22 29 42Z"/><path d="M50 49C71 39 85 19 79 7c-15 4-26 22-29 42Z"/><path d="M50 53C28 55 11 43 10 30c15-3 33 8 40 23Z"/><path d="M50 53c22 2 39-10 40-23-15-3-33 8-40 23Z"/><path d="M50 50c-8-19-7-38 3-46 10 12 8 30-3 46Z"/></g><circle cx="50" cy="50" r="4" fill="#c8917d"/><path d="M50 54c-3 17-2 30 6 41" stroke="currentColor" strokeWidth="2" opacity=".6"/></svg>;
}
