import { I18nProvider } from "../i18n/context";
import type { Translations } from "../i18n";
import ParticleBackground from "./ParticleBackground/ParticleBackground";
import Nav from "./common/Nav";
import Hero from "./Hero/Hero";
import Problem from "./Problem/Problem";
import Solution from "./Solution/Solution";
import WhyPreq from "./WhyPreq/WhyPreq";
import Features from "./Features/Features";
import MultiEngine from "./MultiEngine/MultiEngine";
import Pricing from "./Pricing/Pricing";
import WhoIsItFor from "./WhoIsItFor/WhoIsItFor";
import FAQ from "./FAQ/FAQ";
import CTA from "./CTA/CTA";
import Footer from "./common/Footer";
import SectionReveal from "./common/SectionReveal";

interface Props {
  translations: Translations;
  locale: string;
}

export default function PageContent({ translations, locale }: Props) {
  return (
    <I18nProvider translations={translations}>
      <ParticleBackground />
      <Nav locale={locale} />
      <main className="relative z-10">
        <div id="overview" className="scroll-mt-32 md:scroll-mt-40">
          <Hero />
        </div>
        <SectionReveal id="problem" className="scroll-mt-32 md:scroll-mt-40">
          <Problem />
        </SectionReveal>
        <SectionReveal id="solution" className="scroll-mt-32 md:scroll-mt-40">
          <Solution />
        </SectionReveal>
        <SectionReveal id="who" className="scroll-mt-32 md:scroll-mt-40">
          <WhoIsItFor />
        </SectionReveal>
        <SectionReveal id="why-preq" className="scroll-mt-32 md:scroll-mt-40">
          <WhyPreq />
        </SectionReveal>
        <SectionReveal id="features" className="scroll-mt-32 md:scroll-mt-40">
          <Features />
        </SectionReveal>
        <SectionReveal id="engines" className="scroll-mt-32 md:scroll-mt-40">
          <MultiEngine />
        </SectionReveal>
        <SectionReveal id="pricing" className="scroll-mt-32 md:scroll-mt-40">
          <Pricing />
        </SectionReveal>
        <SectionReveal id="faq" className="scroll-mt-32 md:scroll-mt-40">
          <FAQ />
        </SectionReveal>
        <SectionReveal id="start" className="scroll-mt-32 md:scroll-mt-40">
          <CTA />
        </SectionReveal>
      </main>
      <Footer />
    </I18nProvider>
  );
}
