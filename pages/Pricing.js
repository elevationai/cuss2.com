export default {
  data() {
    return { billing: 'monthly' };
  },
  computed: {
    faqs() {
      return [
        { q: 'Do I need separate licenses for CUSS 1 and CUSS 2 airlines on the same kiosk?', a: 'No. One C2-Platform license covers every airline running on that kiosk, regardless of which CUSS version each carrier targets.' },
        { q: 'Can I downgrade or revoke licenses?', a: 'Anytime. From the Portal, in a click. Pro-rated to the day.' },
        { q: 'Is there a setup fee?', a: 'Not on Free or Starter. Enterprise deals occasionally include a one-off integration fee when a custom DCS or peripheral is involved — always quoted in writing first.' },
        { q: 'What happens at the end of the Bridge2to1 first-year inclusion on Starter?', a: "You either keep it (pricing is the same as any other Starter license), or your airports have finished migrating and you don't need it anymore. Either way, no surprise renewal." },
        { q: 'Can early customers lock in pricing?', a: 'Yes. Anyone on the waitlist today gets a 24-month price lock at launch rates.' },
      ];
    }
  },
  template: `
    <section class="hero" style="padding-bottom:40px;">
      <div class="blob a" style="width:500px; height:500px; top:-80px; left:-100px;"></div>
      <div class="wrap hero-inner">
        <h1 class="display" style="margin-top:18px;">Honest, <span style="color:var(--accent);">per-machine</span> pricing.</h1>
        <p class="lead" style="margin-top:24px; max-width:60ch;">Every product is a connection to the Portal. One license per machine, per account. That's the whole model — and all four products are free on the Free tier.</p>
        <div class="row" style="margin-top:24px;">
          <div style="background:var(--bg-2); padding:4px; border-radius:999px; border:1px solid var(--line); display:inline-flex;">
            <button @click="billing='monthly'" style="padding:8px 16px; border-radius:999px; font-size:13px;" :style="billing==='monthly' ? 'background:var(--accent); color:var(--accent-ink);' : 'color:var(--ink-2);'">Monthly</button>
            <button @click="billing='yearly'" style="padding:8px 16px; border-radius:999px; font-size:13px;" :style="billing==='yearly' ? 'background:var(--accent); color:var(--accent-ink);' : 'color:var(--ink-2);'">Yearly · save 20%</button>
          </div>
        </div>
      </div>
    </section>

    <section style="padding-top:20px;">
      <div class="wrap">
        <div class="pricing-grid">
          <div class="tier">
            <div class="tier-name">Free</div>
            <div class="tier-price">
              <span class="num">$0</span>
              <span class="unit">/forever</span>
            </div>
            <p class="muted" style="font-size:14px;">All four products. Free, forever, for development, evaluation, and production pilots. No card required.</p>
            <ul>
              <li>1 license per product, per account</li>
              <li>All 4 products included</li>
              <li>1 Portal user seat</li>
              <li>Community support</li>
              <li>30-day telemetry retention</li>
              <li>Sandbox certification toolkit</li>
            </ul>
            <a href="/waitlist" class="btn btn-ghost" style="margin-top:auto;">Start free</a>
          </div>

          <div class="tier featured">
            <div class="row" style="justify-content:space-between;">
              <div class="tier-name" style="color:var(--accent);">Starter · popular</div>
              <span class="tag"><span class="dot"></span> Most picked</span>
            </div>
            <div class="tier-price">
              <span class="num">\${{ billing==='monthly' ? '49' : '39' }}</span>
              <span class="unit">/license/month</span>
            </div>
            <p class="muted" style="font-size:14px;">For real production — small fleets, single-airline apps, regional airports.</p>
            <ul>
              <li>Unlimited licenses, billed per active</li>
              <li>Up to 10 Portal seats</li>
              <li>Email + chat support · 4hr business response</li>
              <li>1 year telemetry retention</li>
              <li>SSO via SAML</li>
              <li>Bridge2to1 included for first year</li>
            </ul>
            <a href="/waitlist" class="btn btn-primary" style="margin-top:auto;">Pick Starter</a>
          </div>

          <div class="tier">
            <div class="tier-name">Enterprise</div>
            <div class="tier-price">
              <span class="num">Let's talk</span>
            </div>
            <p class="muted" style="font-size:14px;">For airport authorities, major carriers, fleet operators with > 50 connections.</p>
            <ul>
              <li>Volume pricing per license</li>
              <li>Unlimited Portal seats · role-based access</li>
              <li>15-minute P1 SLA · named TAM</li>
              <li>Forever telemetry retention</li>
              <li>Single-tenant Portal option</li>
              <li>Custom DCS + peripheral integrations</li>
              <li>White-glove certification assistance</li>
            </ul>
            <a href="/waitlist" class="btn btn-ghost" style="margin-top:auto;">Talk to us</a>
          </div>
        </div>

        <div style="margin-top:60px; padding: 28px; background: var(--bg-2); border: 1px dashed var(--line-2); border-radius: var(--radius);">
          <div class="row" style="justify-content:space-between;">
            <div>
              <div class="card-tag">What counts as a license?</div>
              <p style="margin-top:8px; max-width:60ch;" class="muted">One running instance of one product talking to the Portal. A C2-Platform on a single kiosk is one license. An Elevated Tagging app at one airport is one license. A Platform-Monitor agent is one license — no matter how many devices it watches.</p>
            </div>
            <a href="/resources" class="btn btn-ghost">Read more</a>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="split-2">
          <div>
            <h2 class="display" style="margin-top:18px;">Common questions.</h2>
          </div>
          <div>
            <details v-for="q in faqs" :key="q.q" style="border-top:1px solid var(--line); padding:20px 0;">
              <summary style="cursor:pointer; font-weight:500; font-size:17px;">{{ q.q }}</summary>
              <p class="muted" style="margin-top:10px; font-size:15px;">{{ q.a }}</p>
            </details>
          </div>
        </div>
      </div>
    </section>

    <CTABand />
  `
};
