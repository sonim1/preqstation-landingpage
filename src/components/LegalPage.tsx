interface Section {
  heading: string;
  content: string;
}

interface Props {
  title: string;
  lastUpdated: string;
  sections: Section[];
  backLabel: string;
  backHref: string;
}

export default function LegalPage({ title, lastUpdated, sections, backLabel, backHref }: Props) {
  return (
    <div className="min-h-screen bg-kitchen-white">
      <nav className="sticky top-0 z-50 border-b border-steel backdrop-blur-md bg-kitchen-white/80">
        <div className="max-w-3xl mx-auto px-6 flex items-center h-16">
          <a href={backHref} className="text-charcoal/70 hover:text-charcoal transition text-sm font-medium">
            {backLabel}
          </a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-charcoal">{title}</h1>
        <p className="text-charcoal/50 text-sm mt-2">{lastUpdated}</p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl font-semibold text-charcoal mb-3">{section.heading}</h2>
              <p className="text-charcoal/70 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-8 bg-charcoal text-white/50 text-center text-sm">
        &copy; 2026 Preq Station. Open Source.
      </footer>
    </div>
  );
}
