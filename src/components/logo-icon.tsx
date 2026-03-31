type IconVariant = "dark" | "teal" | "white";

const variants: Record<IconVariant, { bg: string; ball: string; ballOpacity: number; play: string; seamStroke: string; seamOpacity: number; orbit: string; dot: string }> = {
  dark: { bg: "#1A1A2E", ball: "#0D9488", ballOpacity: 1, play: "white", seamStroke: "white", seamOpacity: 0.2, orbit: "#FFB347", dot: "#FF6B35" },
  teal: { bg: "#0D9488", ball: "white", ballOpacity: 0.95, play: "#0D9488", seamStroke: "#0D9488", seamOpacity: 0.2, orbit: "#FFB347", dot: "#FF6B35" },
  white: { bg: "white", ball: "#0D9488", ballOpacity: 1, play: "white", seamStroke: "white", seamOpacity: 0.2, orbit: "#FFB347", dot: "#FF6B35" },
};

export function LogoIcon({ variant = "dark", size = 64 }: { variant?: IconVariant; size?: number }) {
  const v = variants[variant];
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="16" fill={v.bg} />
      <ellipse cx="32" cy="32" rx="26" ry="8" stroke={v.orbit} strokeWidth="2.5" transform="rotate(-18 32 32)" />
      <circle cx="32" cy="32" r="18" fill={v.ball} opacity={v.ballOpacity} />
      <path d="M22,18 Q32,32 22,46" stroke={v.seamStroke} strokeWidth="1.5" opacity={v.seamOpacity} />
      <path d="M42,18 Q32,32 42,46" stroke={v.seamStroke} strokeWidth="1.5" opacity={v.seamOpacity} />
      <polygon points="26,22 26,42 42,32" fill={v.play} />
      <circle cx="8" cy="24" r="4.5" fill={v.dot} />
      <circle cx="56" cy="40" r="4.5" fill={v.dot} />
    </svg>
  );
}
