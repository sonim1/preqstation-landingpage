import { I18nProvider } from "../i18n/context";
import type { Translations } from "../i18n";
import Nav from "./common/Nav";
import Hero from "./Hero/Hero";
import Problem from "./Problem/Problem";
import Solution from "./Solution/Solution";
import WhyPreq from "./WhyPreq/WhyPreq";
import Features from "./Features/Features";
import Pipeline from "./Pipeline/Pipeline";
import MultiEngine from "./MultiEngine/MultiEngine";
import Pricing from "./Pricing/Pricing";
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
      <Nav locale={locale} />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <WhyPreq />
        <Features />
        <Pipeline />
        <MultiEngine />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </I18nProvider>
  );
}
