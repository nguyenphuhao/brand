export const colors = {
  primary: "#0D9488",
  accent: "#FF6B35",
  ai: "#FFB347",
  dark: "#1A1A2E",
  light: "#F0FDFA",
  error: "#EF4444",
  darkCard: "#252540",
  darkBg2: "#111122",
  darkText: "#F0FDFA",
  darkTextMuted: "#A0A0B8",
  lightText: "#1A1A2E",
  lightTextMuted: "#4A4A5E",
} as const;

export const typeScale = [
  { name: "Display", size: "3rem", weight: 800, lineHeight: 1.1, tracking: "-0.5px", usage: "Hero section only" },
  { name: "H1", size: "2.25rem", weight: 700, lineHeight: 1.2, tracking: "-0.5px", usage: "Page titles" },
  { name: "H2", size: "1.75rem", weight: 700, lineHeight: 1.25, tracking: "0", usage: "Section headings" },
  { name: "H3", size: "1.375rem", weight: 600, lineHeight: 1.3, tracking: "0", usage: "Card titles" },
  { name: "H4", size: "1.125rem", weight: 600, lineHeight: 1.4, tracking: "0", usage: "Labels" },
  { name: "Body", size: "1rem", weight: 400, lineHeight: 1.6, tracking: "0", usage: "Main content" },
  { name: "Body Small", size: "0.875rem", weight: 400, lineHeight: 1.5, tracking: "0", usage: "Secondary text" },
  { name: "Caption", size: "0.75rem", weight: 500, lineHeight: 1.4, tracking: "0.5px", usage: "Metadata" },
  { name: "Overline", size: "0.6875rem", weight: 600, lineHeight: 1.3, tracking: "1px", usage: "Section labels" },
] as const;

export const brandAdjectives = [
  { word: "Energetic", desc: "Năng lượng thể thao, chuyển động" },
  { word: "Connected", desc: "Kết nối người chơi, CLB, sân" },
  { word: "Friendly", desc: "Ấm áp, welcoming" },
  { word: "Smart", desc: "AI-powered, voice-first" },
  { word: "Trustworthy", desc: "Đáng tin cậy cho booking, payment, quản lý" },
] as const;
