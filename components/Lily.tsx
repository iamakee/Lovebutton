type Props = { className?: string; size?: number };
export function Lily({ className = '', size = 84 }: Props) {
  return <img src="/assets/random-o1-pink-lily-flower.png" alt="" aria-hidden="true" width={size} height={size} className={`object-contain ${className}`} />;
}
