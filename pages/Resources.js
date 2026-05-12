export default {
  computed: {
    resources() {
      return [
        { code: 'WS', tag: 'Specification', title: 'IATA RP 1706c', body: 'The CUSS 2 standard, hosted by IATA. The source of truth for everything we build against.', href: 'https://www.iata.org/en/programs/passenger/common-use/' },
        { code: 'DV', tag: 'Developer hub', title: 'cuss2.dev', body: 'SDKs in TypeScript, Angular, and React. Live sandbox, migration guide, code samples.', href: 'https://cuss2.dev' },
        { code: 'DC', tag: 'Documentation', title: 'C2-Platform Docs', body: 'Full platform documentation — runtime, Manager, Portal, security model, supported hardware.', href: 'https://elevationai-cuss2.netlify.app/' },
        { code: 'CM', tag: 'Community', title: 'Developer Discord', body: 'Real-time conversation with the Elevation team and the broader CUSS 2 developer community.', href: 'https://discord.gg/MSMtXN3cs9' },
        { code: 'AC', tag: 'Advisory', title: 'ACI World', body: 'Operational guidance for airports transitioning to web-native CUSS 2 environments.', href: 'https://aci.aero' },
        { code: 'WB', tag: 'Webinar', title: 'IATA Technical Deep-Dive', body: 'Recordings and live sessions from the IATA CUSS task force — covering implementation considerations.', href: 'https://cuss2.app' },
      ];
    },
    kiosks() {
      return [
        { name: 'CX 200', src: 'https://elevationaistorage.blob.core.windows.net/media/CX200.svg' },
        { name: 'SITA S4', src: 'https://elevationaistorage.blob.core.windows.net/media/SITAS4.svg' },
        { name: 'IER 919', src: 'https://elevationaistorage.blob.core.windows.net/media/IER919.svg' },
        { name: 'KK 12', src: 'https://elevationaistorage.blob.core.windows.net/media/KK-12.svg' },
        { name: 'TP 120', src: 'https://elevationaistorage.blob.core.windows.net/media/TP120.svg' },
      ];
    }
  },
  template: `
    <section class="hero" style="padding-bottom:40px;">
      <div class="blob a" style="width:500px; height:500px; top:-80px; right:-100px;"></div>
      <div class="wrap hero-inner">
        <h1 class="display" style="margin-top:18px;">Read, then <span style="color:var(--accent);">build</span>.</h1>
        <p class="lead" style="margin-top:24px;">Everything we publish — documentation, specs, conversation, code.</p>
      </div>
    </section>

    <section style="padding-top:20px;">
      <div class="wrap">
        <div class="product-grid">
          <a v-for="r in resources" :key="r.title" :href="r.href" target="_blank" class="product-card">
            <div class="row" style="justify-content:space-between;">
              <div class="pc-mark">{{ r.code }}</div>
              <span class="card-tag">{{ r.tag }}</span>
            </div>
            <h3>{{ r.title }}</h3>
            <p class="muted" style="font-size:15px;">{{ r.body }}</p>
            <div class="row" style="margin-top:auto;">
              <span class="btn-text">Open →</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <h2 class="display" style="margin-top:18px; max-width:24ch;">Some of the kiosks we run on.</h2>
        <p class="lead" style="margin-top:14px; max-width:60ch;">C2-Platform supports every major airport kiosk. Here are a few we see most often.</p>
        <div class="product-grid" style="margin-top:32px; grid-template-columns: repeat(4, 1fr);">
          <div v-for="k in kiosks" :key="k.name" class="kiosk-card">
            <img :src="k.src" :alt="k.name" loading="lazy" />
            <div class="name">{{ k.name }}</div>
          </div>
        </div>
      </div>
    </section>

    <CTABand />
  `
};
