import { Nav } from "@/components/nav";
import { SectionHero } from "@/components/section-hero";
import { SectionStory } from "@/components/section-story";
import { SectionColors } from "@/components/section-colors";
import { SectionTypography } from "@/components/section-typography";
import { SectionLogo } from "@/components/section-logo";
import { SectionPersonality } from "@/components/section-personality";
import { SectionUIPreview } from "@/components/section-ui-preview";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <SectionHero />
        <SectionStory />
        <SectionColors />
        <SectionTypography />
        <SectionLogo />
        <SectionPersonality />
        <SectionUIPreview />
      </main>
    </>
  );
}
