type LogoVariant = "dark" | "light" | "white" | "teal";

const variants: Record<LogoVariant, { ball: string; ballOpacity: number; play: string; seamStroke: string; seamOpacity: number; orbit: string; dot: string }> = {
  dark: { ball: "#0D9488", ballOpacity: 1, play: "white", seamStroke: "white", seamOpacity: 0.2, orbit: "#FFB347", dot: "#FF6B35" },
  light: { ball: "#0D9488", ballOpacity: 1, play: "#F0FDFA", seamStroke: "#0A7E73", seamOpacity: 0.3, orbit: "#FFB347", dot: "#FF6B35" },
  white: { ball: "#0D9488", ballOpacity: 1, play: "white", seamStroke: "white", seamOpacity: 0.3, orbit: "#FFB347", dot: "#FF6B35" },
  teal: { ball: "white", ballOpacity: 0.95, play: "#0D9488", seamStroke: "#0D9488", seamOpacity: 0.25, orbit: "#FFB347", dot: "#FF6B35" },
};

export function Logo({ variant = "dark", className }: { variant?: LogoVariant; className?: string }) {
  const v = variants[variant];
  const isCutout = variant === "light" || variant === "white";

  return (
    <svg viewBox="0 0 90 86" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="45" cy="43" rx="36" ry="11" stroke={v.orbit} strokeWidth="2.5" transform="rotate(-18 45 43)" />
      {isCutout ? (
        <>
          <defs>
            <mask id={`play-cutout-${variant}`}>
              <circle cx="45" cy="43" r="22" fill="white" />
              <polygon points="38,32 38,54 58,43" fill="black" />
            </mask>
          </defs>
          <circle cx="45" cy="43" r="22" fill={v.ball} opacity={v.ballOpacity} mask={`url(#play-cutout-${variant})`} />
          <path d="M33,25 Q45,43 33,61" stroke={v.seamStroke} strokeWidth="1.5" opacity={v.seamOpacity} mask={`url(#play-cutout-${variant})`} />
          <path d="M57,25 Q45,43 57,61" stroke={v.seamStroke} strokeWidth="1.5" opacity={v.seamOpacity} mask={`url(#play-cutout-${variant})`} />
        </>
      ) : (
        <>
          <circle cx="45" cy="43" r="22" fill={v.ball} opacity={v.ballOpacity} />
          <path d="M33,25 Q45,43 33,61" stroke={v.seamStroke} strokeWidth="1.5" opacity={v.seamOpacity} />
          <path d="M57,25 Q45,43 57,61" stroke={v.seamStroke} strokeWidth="1.5" opacity={v.seamOpacity} />
          <polygon points="38,32 38,54 58,43" fill={v.play} />
        </>
      )}
      <circle cx="11" cy="33" r="4.5" fill={v.dot} />
      <circle cx="79" cy="53" r="4.5" fill={v.dot} />
    </svg>
  );
}
