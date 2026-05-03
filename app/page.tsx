export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For QA Engineers &amp; Developers
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Record and replay browser workflows as tests
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Capture every click, input, and navigation in your browser. Instantly convert recordings into Playwright, Cypress, or Puppeteer test scripts — no manual scripting required.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Recording — $25/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { icon: "⏺", title: "One-click record", desc: "Install the extension and hit record. Every interaction is captured automatically." },
          { icon: "⚙️", title: "Export to any framework", desc: "Generate Playwright, Cypress, or Puppeteer scripts ready to run in CI." },
          { icon: "📋", title: "Workflow docs", desc: "Export step-by-step documentation for QA handoffs and onboarding." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-white mb-1 text-sm">{f.title}</h3>
            <p className="text-xs text-[#8b949e] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2">Pro</div>
          <div className="text-4xl font-bold text-white mb-1">$25<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to automate browser testing.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited recordings",
              "Export to Playwright, Cypress, Puppeteer",
              "Workflow documentation export",
              "Dashboard to manage all recordings",
              "Chrome & Firefox extension",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the browser extension work?",
              a: "Install the Chrome or Firefox extension, navigate to any web app, and click Record. The extension captures clicks, form inputs, and navigation events, then sends them to your dashboard where they're converted into test scripts."
            },
            {
              q: "Which test frameworks are supported?",
              a: "We currently support Playwright, Cypress, and Puppeteer. Scripts are generated with best practices and are ready to drop into your existing CI/CD pipeline."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes, you can cancel anytime from your account settings. You'll retain access until the end of your billing period with no additional charges."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        <p>&copy; {new Date().getFullYear()} Browser Tab Recorder. All rights reserved.</p>
      </footer>
    </main>
  );
}
