import { makeProductPage } from './shared.js';

export default makeProductPage({
  code: 'B2',
  tag: 'CUSS 1 ↔ CUSS 2 bridge',
  title: 'Run a CUSS 2 application on any CUSS 1 airport platform.',
  lede: 'CUSS 2 migration is a lockstep problem — airlines wait for airports to upgrade, airports wait for airlines to demand it. Bridge2to1 removes the dependency. Your CUSS 2 application runs unchanged on any RP 1706b-compliant CUSS 1 platform, so you can move on your own timeline.',
  features: [
    { tag: 'Compatibility', title: 'Any CUSS 1 vendor.', body: 'Built against the published RP 1706b surface — not a single vendor. Same binary works at airports running every major legacy platform.' },
    { tag: 'Transparent', title: "Your app doesn't change.", body: 'Drop the bridge into your app bundle. No new code paths. No conditional logic. It detects the host platform at startup and adapts.' },
    { tag: 'Runtime', title: 'Modern runtime, no legacy dependencies.', body: 'Implemented in Deno TypeScript. No JVM, no CORBA — modern OpenJDK distributions dropped CORBA support anyway. Smaller attack surface, no additional licensing overhead.' },
    { tag: 'Audit', title: 'Every translated call, logged.', body: 'See exactly which CUSS 1 directives map to which CUSS 2 calls at runtime. Useful for certification, useful for forensics.' },
  ],
  included: 'A drop-in library plus a Portal-managed license. Toggle on per airport; toggle off when each airport finishes its own CUSS 2 cutover.',
  specs: [
    ['Compatibility', 'IATA RP 1706b (any vendor) ↔ RP 1706c'],
    ['Runtime', 'Deno TypeScript · zero JVM'],
    ['Bundle size', '< 4 MB added to your app'],
    ['Cert', 'Pre-validated against major CUSS 1 platforms'],
    ['Licensing', 'Per app × airport, revocable from the Portal'],
  ],
  extra: `
    <section>
      <div class="wrap">
        <div style="background: var(--bg-2); border:1px solid var(--line); border-radius: var(--radius-lg); padding: 40px;">
          <h2 class="display" style="margin-top:14px; max-width:24ch;">Ship CUSS 2 today. Sunset the bridge per-airport.</h2>
          <p class="lead" style="margin-top:14px; max-width:64ch;">As each airport finishes its own CUSS 2 cutover, just disable the bridge license for that location. Your app keeps running — natively now.</p>
        </div>
      </div>
    </section>
  `,
});
