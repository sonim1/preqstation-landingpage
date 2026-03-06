import { I18nProvider } from "../i18n/context";
import type { Translations } from "../i18n";
import ParticleBackground from "./ParticleBackground/ParticleBackground";
import Nav from "./common/Nav";
import Hero from "./Hero/Hero";
import Problem from "./Problem/Problem";
import Solution from "./Solution/Solution";
import WhyPreq from "./WhyPreq/WhyPreq";
import Features from "./Features/Features";
import Pipeline from "./Pipeline/Pipeline";
import MultiEngine from "./MultiEngine/MultiEngine";
import Pricing from "./Pricing/Pricing";
import WhoIsItFor from "./WhoIsItFor/WhoIsItFor";
import FAQ from "./FAQ/FAQ";
import CTA from "./CTA/CTA";
import Footer from "./common/Footer";

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
        <Hero />
        <Problem />
        <Solution />
        <WhyPreq />
        <Features />
        <Pipeline />
        <MultiEngine />
        <Pricing />
        <WhoIsItFor />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </I18nProvider>
  );
}
