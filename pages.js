// pages.js — all page components for the CUSS2 marketing site

// --------- HOME ---------
const HomePage = {
  props: ['products'],
  setup() {
    const words = ['airline', 'airport', 'kiosk'];
    const wordPlural = { airline: 'airlines', airport: 'airports', kiosk: 'kiosks' };
    const idx = ref(0);
    const wordKey = ref(0);
    const paused = ref(false);
    let timer = null;
    const current = computed(() => words[idx.value]);

    function setIdx(n) {
      idx.value = n;
      wordKey.value++;
      paused.value = true;
      clearInterval(timer);
      timer = setInterval(tick, 3200);
    }
    function tick() {
      if (paused.value) { paused.value = false; }
      idx.value = (idx.value + 1) % words.length;
      wordKey.value++;
    }
    onMounted(() => { timer = setInterval(tick, 2800); });
    onUnmounted(() => clearInterval(timer));

    // Airlines: brand-neutral airline-codey logo cells
    const airlines = [
      { code: 'AA', name: 'American' }, { code: 'DL', name: 'Delta' },
      { code: 'UA', name: 'United' }, { code: 'AS', name: 'Alaska' },
      { code: 'WN', name: 'Southwest' }, { code: 'B6', name: 'JetBlue' },
      { code: 'AC', name: 'Air Canada' }, { code: 'LH', name: 'Lufthansa' },
      { code: 'BA', name: 'British' }, { code: 'AF', name: 'Air France' },
      { code: 'EK', name: 'Emirates' }, { code: 'QF', name: 'Qantas' },
    ];

    const kiosks = [
      { name: 'CX200', url: 'https://elevationaistorage.blob.core.windows.net/media/CX200.svg' },
      { name: 'SITAS4', url: 'https://elevationaistorage.blob.core.windows.net/media/SITAS4.svg' },
      { name: 'IER919', url: 'https://elevationaistorage.blob.core.windows.net/media/IER919.svg' },
      { name: 'KK-12', url: 'https://elevationaistorage.blob.core.windows.net/media/KK-12.svg' },
      { name: 'TP120', url: 'https://elevationaistorage.blob.core.windows.net/media/TP120.svg' },
    ];

    // Airports as SVG coords in 720x360 viewBox (lon→x, lat→y, equirectangular)
    const cityLatLng = [
      ['SFO',  37.6, -122.4], ['LAX',  33.9, -118.4], ['DEN',  39.9, -104.7],
      ['ORD',  42.0,  -87.9], ['JFK',  40.6,  -73.8], ['ATL',  33.6,  -84.4],
      ['MIA',  25.8,  -80.3], ['YYZ',  43.7,  -79.6], ['GRU', -23.4,  -46.5],
      ['LHR',  51.5,   -0.5], ['CDG',  49.0,    2.5], ['FRA',  50.0,    8.6],
      ['AMS',  52.3,    4.8], ['DXB',  25.3,   55.4], ['DOH',  25.3,   51.6],
      ['BOM',  19.1,   72.9], ['SIN',   1.4,  103.9], ['HKG',  22.3,  114.0],
      ['NRT',  35.8,  140.4], ['ICN',  37.5,  126.4], ['SYD', -33.9,  151.2],
    ];
    const cities = cityLatLng.map(([code, lat, lon]) => ({
      code, x: (lon + 180) * 2, y: (90 - lat) * 2,
    }));

    // Continent outlines as (lat, lng) point lists — converted to SVG via toPoints()
    const continents = [
      { name: 'na', coords: [
        [70,-165],[71,-153],[70,-141],[69,-128],[72,-118],[73,-105],
        [74,-92],[73,-80],[66,-70],[60,-62],[47,-53],[45,-62],
        [43,-66],[40,-70],[35,-75],[29,-81],[25,-80],[25,-83],
        [30,-87],[29,-94],[22,-97],[19,-96],[16,-94],[14,-92],
        [9,-78],[16,-88],[21,-88],[21,-92],[19,-104],[16,-100],
        [23,-106],[27,-111],[33,-117],[38,-123],[45,-124],[49,-125],
        [55,-130],[59,-141],[60,-149],[57,-158],[60,-166],[65,-167],
      ]},
      { name: 'gl', coords: [
        [83,-30],[80,-15],[75,-20],[65,-35],[60,-45],[63,-50],[70,-55],[78,-65],
      ]},
      { name: 'sa', coords: [
        [12,-72],[11,-62],[4,-52],[1,-50],[-5,-35],[-23,-41],
        [-33,-52],[-37,-57],[-50,-69],[-55,-68],[-52,-72],
        [-44,-74],[-30,-71],[-15,-76],[-5,-81],[3,-78],[10,-75],
      ]},
      { name: 'eu', coords: [
        [71,28],[70,30],[68,17],[62,5],[58,5],[54,8],
        [51,3],[50,-1],[48,-5],[44,-2],[43,-9],[36,-9],
        [36,-2],[37,3],[38,9],[41,9],[44,8],[40,18],
        [40,24],[37,27],[40,28],[45,29],[48,30],
        [55,38],[64,42],[68,42],
      ]},
      { name: 'uk', coords: [
        [58,-3],[56,-2],[53,1],[51,1],[50,-4],[51,-5],[55,-5],[58,-7],
      ]},
      { name: 'af', coords: [
        [36,-6],[35,-1],[33,11],[32,20],[30,25],[22,36],
        [12,43],[10,51],[2,46],[-12,40],[-20,35],[-26,33],
        [-35,20],[-30,17],[-25,14],[-20,12],[-10,13],[4,9],
        [5,3],[6,-3],[10,-13],[14,-17],[21,-17],[27,-13],[33,-9],
      ]},
      { name: 'me', coords: [
        [30,33],[28,35],[25,40],[21,40],[14,43],[12,50],
        [22,57],[29,49],[31,46],[33,40],
      ]},
      { name: 'as', coords: [
        [71,30],[78,68],[80,100],[78,140],[70,178],[60,177],
        [56,164],[52,142],[45,135],[38,128],[36,124],[25,121],
        [22,115],[13,108],[8,103],[12,98],[16,98],[22,92],
        [22,89],[27,92],[30,80],[33,75],[35,72],
        [38,67],[38,60],[43,52],[48,50],[52,38],[55,30],
        [60,30],[65,32],
      ]},
      { name: 'in', coords: [
        [26,68],[22,68],[18,73],[8,77],[10,80],[18,84],[22,89],[27,92],[28,80],[28,73],
      ]},
      { name: 'id', coords: [
        [6,95],[3,97],[-2,103],[-8,114],[-9,123],[-6,131],[-4,134],[0,131],[3,128],[5,118],[5,108],
      ]},
      { name: 'jp', coords: [
        [44,141],[42,144],[37,141],[34,135],[33,131],[34,135],[37,139],[40,141],
      ]},
      { name: 'au', coords: [
        [-11,142],[-15,144],[-21,150],[-28,153],[-34,151],[-37,148],[-38,140],[-35,138],
        [-32,134],[-32,127],[-35,118],[-32,116],[-22,115],[-17,123],[-14,127],[-12,132],[-11,135],
      ]},
      { name: 'an', coords: [
        [-65,-180],[-70,-150],[-78,-130],[-78,-100],[-72,-70],[-66,-60],[-72,-30],
        [-70,0],[-66,30],[-70,60],[-66,90],[-68,120],[-72,150],[-66,180],[-65,180],[-65,-180],
      ]},
    ];

    function toPoints(coords) {
      return coords.map(([lat, lng]) => `${(lng + 180) * 2},${(90 - lat) * 2}`).join(' ');
    }

    return { words, idx, wordKey, current, setIdx, airlines, cities, continents, toPoints, kiosks, wordPlural };
  },
  template: `
    <section class="hero">
      <div class="blob a" style="width:600px; height:600px; top:-100px; left:-200px;"></div>
      <div class="blob b" style="width:500px; height:500px; top:200px; right:-150px;"></div>
      <div class="blob c" style="width:400px; height:400px; bottom:-200px; left:30%;"></div>
      <div class="grid-bg"></div>
      <div class="wrap hero-inner">
        <div class="row" style="margin-bottom:32px;">
          <span class="tag"><span class="dot"></span> Airports onboarding now</span>
        </div>
        <h1 class="display">
          Modern self-service for every <span class="swap-host"><span class="swap-word" :key="wordKey">{{ current }}</span></span>.
        </h1>
        <p class="lead" style="margin-top:28px; max-width: 60ch;">
          Four products. One cloud Portal. Plain-language pricing. We handle the spec so you can run the operation — whether you're an airline migrating an app, an airport modernizing a hundred kiosks, or anywhere in between.
        </p>
        <div class="row" style="margin-top:40px; align-items:center;">
          <a href="#/waitlist" class="btn btn-primary btn-lg">Join the waitlist <span aria-hidden>→</span></a>
          <a href="#/products" class="btn btn-ghost btn-lg">See the products</a>
          <div class="swap-tabs" style="margin-left:auto;">
            <button v-for="(w, i) in words" :key="w" :class="{ on: idx===i }" @click="setIdx(i)">{{ wordPlural[w] }}</button>
          </div>
        </div>

        <div class="swap-panel">
          <!-- airlines -->
          <div class="swap-stage" :class="{ on: current==='airline' }">
            <div class="logo-grid">
              <div v-for="a in airlines" :key="a.code" class="logo-cell">
                <div class="stack">
                  <span style="font-size:22px;">{{ a.code }}</span>
                  <span class="iata">{{ a.name.toUpperCase() }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- airports -->
          <div class="swap-stage" :class="{ on: current==='airport' }">
            <div class="world-panel">
              <div class="world-wrap">
                <svg class="world-svg" viewBox="0 0 720 360" preserveAspectRatio="none" aria-hidden>
                  <g class="land">
                    <polygon v-for="c in continents" :key="c.name" :points="toPoints(c.coords)"/>
                  </g>
                  <g class="grats">
                    <line v-for="lng in [-120,-60,0,60,120]" :key="'v'+lng" :x1="(lng+180)*2" y1="0" :x2="(lng+180)*2" y2="360"/>
                    <line v-for="lat in [-60,-30,0,30,60]" :key="'h'+lat" x1="0" :y1="(90-lat)*2" x2="720" :y2="(90-lat)*2"/>
                  </g>
                  <g class="cities">
                    <g v-for="(p, j) in cities" :key="p.code">
                      <circle :cx="p.x" :cy="p.y" r="5" class="city-ring" :style="'animation-delay:' + (j*0.22) + 's'"/>
                      <circle :cx="p.x" :cy="p.y" r="2.2" class="city-dot"/>
                    </g>
                  </g>
                </svg>
                <div class="world-scan"></div>
              </div>
              <div class="row" style="justify-content:space-between; padding: 0 4px;">
                <span class="mono" style="font-size:11px; color:var(--ink-3); letter-spacing:0.12em;">69 LOCATIONS · 18 COUNTRIES</span>
                <span class="mono" style="font-size:11px; color:var(--accent); letter-spacing:0.12em;">● LIVE FLEET</span>
              </div>
            </div>
          </div>

          <!-- kiosks -->
          <div class="swap-stage" :class="{ on: current==='kiosk' }">
            <div class="kiosk-rail">
              <div class="kiosk-rail-track">
                <div v-for="(k, i) in [...kiosks, ...kiosks, ...kiosks]" :key="i" class="kiosk-rail-cell">
                  <img :src="k.url" :alt="k.name" loading="lazy"/>
                  <div class="name">{{ k.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="stats" style="margin-top:80px;">
          <div class="stat"><div class="value">4</div><div class="label">Products, one Portal</div></div>
          <div class="stat"><div class="value">0</div><div class="label">Lockstep dependencies</div></div>
          <div class="stat"><div class="value">2,000+</div><div class="label">Kiosks managed today</div></div>
          <div class="stat"><div class="value">69</div><div class="label">Airport locations</div></div>
        </div>
      </div>
    </section>

    <div class="marquee">
      <div class="marquee-track">
        <span>IATA RP 1706c</span><span>Built for airlines</span><span>Built for airports</span><span>Hardware-agnostic</span><span>OAuth 2.0 · TLS 1.2+</span><span>Cloud-managed</span><span>Side-by-side CUSS 1+2</span>
        <span>IATA RP 1706c</span><span>Built for airlines</span><span>Built for airports</span><span>Hardware-agnostic</span><span>OAuth 2.0 · TLS 1.2+</span><span>Cloud-managed</span><span>Side-by-side CUSS 1+2</span>
      </div>
    </div>

    <section style="padding-top:48px; padding-bottom:0;">
      <div class="wrap">
        <div class="row" style="justify-content:space-between; align-items:baseline; margin-bottom:20px;">
          <span class="eyebrow">Free with the Free tier</span>
          <span class="mono" style="font-size:11px; color:var(--ink-3); letter-spacing:0.12em;">NO CARD · NO TRIAL</span>
        </div>
        <div class="promo-grid">
          <a href="#/products/bridge2to1" class="promo-card">
            <div class="promo-eyebrow mono">B2 · Bridge2to1</div>
            <h3>Upgrade your CUSS 1<br/>Check-In app. <span style="color:var(--accent);">Free.</span></h3>
            <p class="muted" style="margin-top:12px;">Drop the bridge into your existing app bundle. Same code paths, now talking CUSS 2 — no rewrite, no risk.</p>
            <span class="btn-text" style="margin-top:auto;">See how it works →</span>
          </a>
          <a href="#/products/c2-platform" class="promo-card">
            <div class="promo-eyebrow mono">C2 · C2-Platform</div>
            <h3>Run our platform on<br/>any hardware. <span style="color:var(--accent);">Free.</span></h3>
            <p class="muted" style="margin-top:12px;">Bring a kiosk, BYOD, or a back-office machine. The platform runs anywhere, reports to the Portal, and never holds your hardware hostage.</p>
            <span class="btn-text" style="margin-top:auto;">Spin it up →</span>
          </a>
        </div>
      </div>
    </section>

    <section style="padding-top:0;">
      <div class="wrap">
        <div class="split-2" style="margin-bottom:60px;">
          <div>
            <span class="eyebrow">The whole kit</span>
            <h2 class="display" style="margin-top:18px;">Pick one. Or run them all.</h2>
          </div>
          <p class="lead">Every product is useful on its own, and they all feed into the same cloud Portal — so a single license, dashboard, and team can manage the whole operation.</p>
        </div>
        <div class="product-grid">
          <a v-for="p in products" :key="p.id" :href="'#/products/'+p.id" class="product-card">
            <div class="row" style="justify-content:space-between; align-items:flex-start;">
              <div class="pc-mark">{{ p.code }}</div>
              <span class="card-tag">{{ p.tag }}</span>
            </div>
            <div>
              <h3>{{ p.name }}</h3>
              <p class="muted" style="margin-top:8px; font-size:15px;">{{ p.summary }}</p>
            </div>
            <div class="row" style="justify-content:space-between; margin-top:auto;">
              <span class="mono" style="color:var(--accent);">{{ p.stat }}</span>
              <span class="btn-text">Read more</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="split-2">
          <div>
            <span class="eyebrow">How it fits together</span>
            <h2 class="display" style="margin-top:18px;">One Portal. Every connection licensed.</h2>
            <p class="lead" style="margin-top:24px;">Each product opens a connection to the Portal. The Portal is where you configure, monitor, deploy, and bill. One license per connection — count licenses, not seats.</p>
            <div class="row" style="margin-top:32px;">
              <a href="#/pricing" class="btn btn-primary">See pricing</a>
              <a href="#/waitlist" class="btn btn-ghost">Get a license</a>
            </div>
          </div>
          <div class="diagram">
            <div style="text-align:center; padding: 18px; border:1px solid var(--accent); border-radius: 14px; background: var(--accent-soft); margin-bottom: 32px;">
              <div class="mono" style="font-size:11px; color:var(--accent); letter-spacing:0.15em;">CLOUD PORTAL</div>
              <div class="display" style="font-size:24px; margin-top:4px;">elevation.ai</div>
              <div class="muted" style="font-size:12px; margin-top:4px;">Fleet · Telemetry · Licenses · Billing</div>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
              <div v-for="p in products" :key="p.id" style="padding:14px; background:var(--bg-3); border:1px solid var(--line); border-radius:10px;">
                <div class="mono" style="font-size:10px; color:var(--ink-3); letter-spacing:0.12em;">{{ p.tag.toUpperCase() }}</div>
                <div style="font-weight:500; margin-top:4px;">{{ p.name }}</div>
                <div style="display:flex; align-items:center; gap:6px; margin-top:6px;">
                  <span style="width:6px; height:6px; border-radius:50%; background:var(--good);" class="pulse"></span>
                  <span class="mono" style="font-size:10px; color:var(--ink-3);">1 license</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div style="text-align:center; max-width: 700px; margin: 0 auto;">
          <span class="eyebrow">No surprises</span>
          <h2 class="display" style="margin-top:18px;">Built for the people who'll<br/>get paged at 4am.</h2>
          <p class="lead" style="margin: 24px auto 0;">Plain-language docs. Real status indicators. A support team that picks up the phone. The CUSS 2 standard is technical — your dashboard doesn't have to be.</p>
        </div>
        <div class="bento" style="margin-top:60px;">
          <div class="card">
            <div class="big-num">15<span style="font-size:.5em; color:var(--ink-3);">min</span></div>
            <div class="muted" style="margin-top:12px; font-size:14px;">P1 incident response — written into every Enterprise contract.</div>
          </div>
          <div class="card">
            <div class="big-num">99.97<span style="font-size:.5em; color:var(--ink-3);">%</span></div>
            <div class="muted" style="margin-top:12px; font-size:14px;">Platform uptime across our managed fleet, 2025.</div>
          </div>
          <div class="card wide">
            <h3 class="display">Every license is a story.</h3>
            <p class="muted" style="margin-top:12px; max-width:60ch;">A license is one product, talking to the Portal, doing one job. Issue them, revoke them, swap them between kiosks. Nothing is glued to hardware.</p>
            <div class="row" style="margin-top:20px;">
              <span class="sticky">Like good infra should be.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTABand />
  `
};

// --------- PRODUCTS OVERVIEW ---------
const ProductsPage = {
  props: ['products'],
  template: `
    <section class="hero" style="padding-bottom:60px;">
      <div class="blob a" style="width:500px; height:500px; top:-80px; right:-100px;"></div>
      <div class="wrap hero-inner">
        <span class="eyebrow">Solutions</span>
        <h1 class="display" style="margin-top:24px;">Four ways into <span style="color:var(--accent);">CUSS 2</span>.</h1>
        <p class="lead" style="margin-top:24px;">A single license model. Every product reports to the same cloud Portal. Mix and match.</p>
      </div>
    </section>

    <section style="padding-top:20px;">
      <div class="wrap">
        <div class="product-grid">
          <a v-for="p in products" :key="p.id" :href="'#/products/'+p.id" class="product-card" style="min-height:280px;">
            <div class="row" style="justify-content:space-between; align-items:flex-start;">
              <div class="pc-mark">{{ p.code }}</div>
              <span class="card-tag">{{ p.tag }}</span>
            </div>
            <h3>{{ p.name }}</h3>
            <p class="muted" style="font-size:15px;">{{ p.summary }}</p>
            <div class="row" style="justify-content:space-between; margin-top:auto;">
              <span class="mono" style="color:var(--accent);">{{ p.stat }}</span>
              <span class="btn-text">Open product →</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="split-2" style="margin-bottom:40px;">
          <div>
            <span class="eyebrow">Side-by-side</span>
            <h2 class="display" style="margin-top:18px;">Which one is for you?</h2>
          </div>
          <p class="lead">A quick compare across what each product does, who it's for, and what it talks to.</p>
        </div>
        <div class="card" style="padding:0;">
          <div class="spec-row" style="grid-template-columns: 1.2fr 1fr 1fr 1fr; padding:18px 24px;">
            <div class="label">Product</div>
            <div class="label">Best for</div>
            <div class="label">Runs on</div>
            <div class="label">Licensed by</div>
          </div>
          <div v-for="p in compareRows" :key="p.name" class="spec-row" style="grid-template-columns: 1.2fr 1fr 1fr 1fr; padding:20px 24px; align-items:center;">
            <div>
              <div style="font-weight:500;">{{ p.name }}</div>
              <div class="muted" style="font-size:13px;">{{ p.tag }}</div>
            </div>
            <div class="muted" style="font-size:14px;">{{ p.best }}</div>
            <div class="muted" style="font-size:14px;">{{ p.runs }}</div>
            <div class="muted" style="font-size:14px;">{{ p.license }}</div>
          </div>
        </div>
      </div>
    </section>

    <CTABand />
  `,
  computed: {
    compareRows() {
      return [
        { name: 'Elevated Tagging', tag: 'Kiosk app', best: 'Airlines without an app team', runs: 'Any CUSS 2 platform', license: 'Per machine, per account' },
        { name: 'Bridge2to1', tag: 'Compatibility layer', best: 'Airlines waiting on airports', runs: 'Inside your CUSS 2 app', license: 'Per machine, per account' },
        { name: 'C2-Platform', tag: 'Kiosk platform', best: 'Airports modernizing hardware-first', runs: 'Any kiosk hardware', license: 'Per machine, per account' },
        { name: 'Platform-Monitor', tag: 'Observability', best: 'Anyone with kiosks / sensors / belts', runs: 'Anything that can ping a URL', license: 'Per machine, per account' },
      ];
    }
  }
};

// --------- CTA Band (shared) ---------
const CTABand = {
  template: `
    <section style="padding-top:0;">
      <div class="wrap">
        <div style="background: var(--bg-2); border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 60px 40px; text-align:center; position:relative; overflow:hidden;">
          <div class="blob a" style="width:300px; height:300px; top:-100px; left:-100px;"></div>
          <div class="blob b" style="width:300px; height:300px; bottom:-100px; right:-100px;"></div>
          <div style="position:relative; z-index:1;">
            <h2 class="display" style="max-width: 22ch; margin: 0 auto;">Tell us where you're stuck. <span style="color:var(--accent);">We'll un-stick it.</span></h2>
            <p class="lead" style="margin: 20px auto 28px; max-width: 56ch;">48-hour reply. No sales gauntlet. Just a real engineer who's shipped CUSS 2 in production.</p>
            <a href="#/waitlist" class="btn btn-primary btn-lg">Join the waitlist <span aria-hidden>→</span></a>
          </div>
        </div>
      </div>
    </section>
  `
};

// --------- Product detail base helper ---------
function makeProductPage(opts) {
  return {
    template: `
      <section class="hero" style="padding-bottom:60px;">
        <div class="blob a" style="width:500px; height:500px; top:-80px; right:-100px;"></div>
        <div class="wrap hero-inner">
          <div class="row" style="margin-bottom:24px;">
            <a href="#/products" class="btn-text" style="color:var(--ink-2);">← All products</a>
          </div>
          <span class="eyebrow">${opts.code} · ${opts.tag}</span>
          <h1 class="display" style="margin-top:18px; max-width: 18ch;">${opts.title}</h1>
          <p class="lead" style="margin-top:24px;">${opts.lede}</p>
          <div class="row" style="margin-top:32px;">
            <a href="#/waitlist" class="btn btn-primary">Get a license</a>
            <a href="#/pricing" class="btn btn-ghost">See pricing</a>
          </div>
        </div>
      </section>
      <section style="padding-top:20px;">
        <div class="wrap">
          <div class="bento">
            ${opts.features.map((f,i) => `
              <div class="card${i === 0 ? ' wide' : ''}">
                <div class="card-tag">${String(i+1).padStart(2,'0')} · ${f.tag}</div>
                <h3 class="display" style="margin-top:14px;">${f.title}</h3>
                <p class="muted" style="margin-top:10px; font-size:15px; max-width:56ch;">${f.body}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
      <section>
        <div class="wrap">
          <div class="split-2">
            <div>
              <span class="eyebrow">The fine print</span>
              <h2 class="display" style="margin-top:18px;">What's included.</h2>
              <p class="lead" style="margin-top:18px;">${opts.included}</p>
            </div>
            <div class="card">
              ${opts.specs.map(s => `
                <div class="spec-row">
                  <div class="label">${s[0]}</div>
                  <div>${s[1]}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>
      ${opts.extra || ''}
      <CTABand />
    `
  };
}

const ProductElevatedTagging = makeProductPage({
  code: 'ET',
  tag: 'White-label kiosk app',
  title: 'Your check-in app, in airline livery, on every CUSS 2 kiosk.',
  lede: 'We build the application. You bring the brand, the DCS, and the passenger experience you want. Low/mid-service ships in weeks; full-service in months — not the 9–12 month industry norm.',
  features: [
    { tag: 'Brand', title: 'Fully white-labelled.', body: 'Every pixel is yours — colors, type, illustrations, copy. Passengers see your carrier, not us. We stay invisible.' },
    { tag: 'Speed', title: 'Weeks to first kiosk.', body: 'Low/mid-service experiences (check-in, BP print, basic bag) typically ship inside 6–8 weeks. Full-service with payments, biometrics, recovery flows: months.' },
    { tag: 'Coverage', title: 'Built once, runs everywhere.', body: 'Targets the CUSS 2 spec directly. Pair with Bridge2to1 and it runs on legacy CUSS 1 airports during the migration window.' },
    { tag: 'Accessible', title: 'WCAG 2.2 AA baseline.', body: 'Audio mode, screen-reader narration, high-contrast, motor-impaired flows — all in the box. Not a checklist later.' },
  ],
  included: 'A complete check-in experience, configured to your DCS, branded to your airline, deployed across your CUSS 2 footprint.',
  specs: [
    ['Targets', 'IATA RP 1706c · CUSS 2.4.x'],
    ['DCS', 'Amadeus · Sabre · Navitaire · Travelport · TravelSky · custom'],
    ['Languages', '150+ via the Portal CMS'],
    ['Bag tag', 'AEA/ITPS · RFID Gen2 · Heavy/priority/limited release'],
    ['Payments', 'EMV · contactless · Apple/Google Pay'],
    ['Recovery', 'Misconnect · IRROPS · same-day change'],
  ]
});

const ProductBridge = makeProductPage({
  code: 'B2',
  tag: 'CUSS 1 ↔ CUSS 2 bridge',
  title: "Run your CUSS 2 app on yesterday's airport platforms.",
  lede: 'Migration is a lockstep problem — airlines wait for airports, airports wait for airlines. Bridge2to1 breaks the loop. Ship a modern CUSS 2 app today and it runs on any RP 1706b-compliant CUSS 1 platform, unchanged.',
  features: [
    { tag: 'Compatibility', title: 'Any CUSS 1 vendor.', body: 'Built against the published RP 1706b surface — not a single vendor. Same binary works at airports running every major legacy platform.' },
    { tag: 'Transparent', title: "Your app doesn't change.", body: 'Drop the bridge into your app bundle. No new code paths. No conditional logic. It detects the host platform at startup and adapts.' },
    { tag: 'Deno', title: 'No JVM. No CORBA.', body: "Reimplemented in Deno TypeScript. Modern OpenJDK distributions dropped CORBA — Bridge2to1 doesn't need it. Smaller attack surface, zero licensing." },
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
          <span class="eyebrow">Migration window</span>
          <h2 class="display" style="margin-top:14px; max-width:24ch;">Ship CUSS 2 today. Sunset the bridge per-airport.</h2>
          <p class="lead" style="margin-top:14px; max-width:64ch;">As each airport finishes its own CUSS 2 cutover, just disable the bridge license for that location. Your app keeps running — natively now.</p>
        </div>
      </div>
    </section>
  `
});

const ProductC2 = makeProductPage({
  code: 'C2',
  tag: 'Hardware-agnostic platform',
  title: 'The CUSS 2 platform. Yours, on whatever hardware you already own.',
  lede: "A full IATA RP 1706c platform that runs on every major airport kiosk and bag-drop in the field today. Serves CUSS 1 and CUSS 2 airlines side-by-side, so the airlines on your kiosks don't have to migrate on your timeline.",
  features: [
    { tag: 'Hardware', title: "Every vendor we've seen.", body: 'CX200, SITA S4, IER 919, KK-12, TP120 — and most of the rest. The platform abstracts the device layer so the hardware vendor stops mattering.' },
    { tag: 'Coexistence', title: 'CUSS 1 + CUSS 2 in the same bank.', body: 'Legacy airlines keep running while modern airlines onboard. The CUSS 1.X plugin auto-loads only when a legacy carrier needs it.' },
    { tag: 'Launcher', title: 'Deno-powered cloud bootstrap.', body: 'The EAI Launcher pulls platform versions and plugins from the cloud on boot. No re-imaging. Different terminals can run different versions, governed centrally.' },
    { tag: 'Telemetry', title: 'Every kiosk, one Portal.', body: 'Health, paper, recovery, session count, error codes — streamed to the Portal in real time. Build dashboards. Page yourself on what matters.' },
  ],
  included: 'The platform binary, the Launcher, all bundled peripheral drivers, the CUSS 1.X compatibility plugin, and a Portal Manager seat.',
  specs: [
    ['Standard', 'IATA RP 1706c · CUSS 2.4.x'],
    ['Hardware', 'AEA/ITPS printers · all major scanners · most kiosks'],
    ['CUSS 1.x', 'RP 1706b airlines supported side-by-side'],
    ['Security', 'TLS 1.2+ · OAuth 2.0 · OWASP ASVS L2'],
    ['Latency', 'P99 < 120ms peripheral round-trip'],
    ['Updates', 'Cloud-delivered, per-terminal staged'],
  ]
});

const ProductMonitor = makeProductPage({
  code: 'PM',
  tag: 'Universal telemetry agent',
  title: 'Anything that has a heartbeat — straight into the Portal.',
  lede: 'A lightweight agent you point at any system you want to watch. Kiosks, bag scales, conveyor PLCs, network switches, door sensors. If it speaks any protocol, Platform-Monitor speaks it back.',
  features: [
    { tag: 'Universal', title: 'No protocol is exotic.', body: 'HTTP, SNMP, MQTT, RS-232, Modbus, raw TCP — the agent reads anything and shapes it into normalized events for the Portal.' },
    { tag: 'Lightweight', title: 'Runs on a Pi.', body: 'Single static binary. < 30 MB resident. Designed for the small box quietly humming under the bag scale.' },
    { tag: 'Workflows', title: 'Trigger actions, not just charts.', body: 'Wire telemetry to Portal Workflows: paper-out triggers an email, conveyor stall pages the on-call, sensor anomaly fires a webhook.' },
    { tag: 'History', title: 'Forever-retention by default.', body: 'Every event archived. Replayable. Searchable. Comparable across years. Your bag scales remember more than your last Director did.' },
  ],
  included: 'Agent binaries for every common architecture, configuration profiles for common devices, and Portal integration out of the box.',
  specs: [
    ['Protocols', 'HTTP · SNMP · MQTT · Modbus · Serial · Custom plugins'],
    ['Targets', 'Kiosks · scales · conveyors · cameras · switches · doors'],
    ['Footprint', '< 30 MB RAM · < 1% CPU typical'],
    ['Buffering', 'Local store-and-forward when offline'],
    ['Licensing', 'Per running agent, irrespective of targets'],
  ]
});

// --------- PRICING ---------
const PricingPage = {
  data() {
    return { billing: 'monthly' };
  },
  template: `
    <section class="hero" style="padding-bottom:40px;">
      <div class="blob a" style="width:500px; height:500px; top:-80px; left:-100px;"></div>
      <div class="wrap hero-inner">
        <span class="eyebrow">Pricing</span>
        <h1 class="display" style="margin-top:18px;">Honest, <span style="color:var(--accent);">per-machine</span> pricing.</h1>
        <p class="lead" style="margin-top:24px; max-width:60ch;">Every product is a connection to the Portal. One license per machine, per account. That's the whole model — and all four products are free on the Free tier.</p>
        <div class="row" style="margin-top:24px;">
          <div style="background:var(--bg-2); padding:4px; border-radius:999px; border:1px solid var(--line); display:inline-flex;">
            <button @click="billing='monthly'" :class="{ on: billing==='monthly' }" style="padding:8px 16px; border-radius:999px; font-size:13px;" :style="billing==='monthly' ? 'background:var(--accent); color:var(--accent-ink);' : 'color:var(--ink-2);'">Monthly</button>
            <button @click="billing='yearly'" :class="{ on: billing==='yearly' }" style="padding:8px 16px; border-radius:999px; font-size:13px;" :style="billing==='yearly' ? 'background:var(--accent); color:var(--accent-ink);' : 'color:var(--ink-2);'">Yearly · save 20%</button>
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
            <a href="#/waitlist" class="btn btn-ghost" style="margin-top:auto;">Start free</a>
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
            <a href="#/waitlist" class="btn btn-primary" style="margin-top:auto;">Pick Starter</a>
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
            <a href="#/waitlist" class="btn btn-ghost" style="margin-top:auto;">Talk to us</a>
          </div>
        </div>

        <div style="margin-top:60px; padding: 28px; background: var(--bg-2); border: 1px dashed var(--line-2); border-radius: var(--radius);">
          <div class="row" style="justify-content:space-between;">
            <div>
              <div class="card-tag">What counts as a license?</div>
              <p style="margin-top:8px; max-width:60ch;" class="muted">One running instance of one product talking to the Portal. A C2-Platform on a single kiosk is one license. An Elevated Tagging app at one airport is one license. A Platform-Monitor agent is one license — no matter how many devices it watches.</p>
            </div>
            <a href="#/resources" class="btn btn-ghost">Read more</a>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="split-2">
          <div>
            <span class="eyebrow">FAQ</span>
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
  `,
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
  }
};

// --------- WAITLIST ---------
const WaitlistPage = {
  data() {
    return {
      org: '',
      products: [],
      tier: 'starter',
      timeline: '6mo',
      submitted: false,
    };
  },
  methods: {
    toggleProduct(p) {
      const i = this.products.indexOf(p);
      if (i >= 0) this.products.splice(i, 1);
      else this.products.push(p);
    },
    submit(e) {
      e.preventDefault();
      this.submitted = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  template: `
    <section class="hero" style="padding-bottom:40px;">
      <div class="blob a" style="width:500px; height:500px; top:-80px; right:-100px;"></div>
      <div class="blob b" style="width:400px; height:400px; bottom:-200px; left:-100px;"></div>
      <div class="wrap hero-inner">
        <div v-if="submitted">
          <span class="eyebrow">You're on the list</span>
          <h1 class="display" style="margin-top:18px; max-width:18ch;">Thanks. <span style="color:var(--accent);">We'll be in touch.</span></h1>
          <p class="lead" style="margin-top:24px;">A real engineer on our team will reply within 48 hours. We mean that literally — no marketing nurture sequence, no SDR, just a human who's shipped CUSS 2.</p>
          <div class="row" style="margin-top:32px;">
            <a href="#/" class="btn btn-primary">Back home</a>
            <a href="#/resources" class="btn btn-ghost">Read while you wait</a>
          </div>
        </div>
        <div v-else>
          <span class="eyebrow">Join the waitlist</span>
          <h1 class="display" style="margin-top:18px;">Tell us a little.<br/>We'll make you a license.</h1>
          <p class="lead" style="margin-top:24px;">It takes about a minute. None of it goes to a CRM until a human on our side reads it.</p>
        </div>
      </div>
    </section>

    <section v-if="!submitted" style="padding-top:20px;">
      <div class="wrap" style="max-width:880px;">
        <form @submit="submit" class="card" style="padding:40px;">

          <div class="card-tag">01 · Who are you</div>
          <div class="form-grid" style="margin-top:20px;">
            <div class="field"><label>Full name</label><input type="text" required placeholder="Casey Rivera" /></div>
            <div class="field"><label>Work email</label><input type="email" required placeholder="casey@airline.com" /></div>
            <div class="field"><label>Company</label><input type="text" required placeholder="Your airline / airport / vendor" /></div>
            <div class="field"><label>Role / title</label><input type="text" placeholder="Director of Airport IT" /></div>
            <div class="field"><label>Country</label>
              <select>
                <option>United States</option><option>Canada</option><option>United Kingdom</option><option>Germany</option><option>France</option><option>Australia</option><option>Other</option>
              </select>
            </div>
            <div class="field"><label>Airport(s) of operation</label><input type="text" placeholder="DEN, ORD, LHR" /></div>
          </div>

          <hr style="border:none; border-top:1px solid var(--line); margin: 36px 0;"/>

          <div class="card-tag">02 · Who are you, organizationally</div>
          <div class="chips" style="margin-top:16px;">
            <div v-for="opt in ['Airline','Airport','Vendor','Other']" :key="opt" class="chip" :class="{ on: org === opt }" @click="org = opt">{{ opt }}</div>
          </div>

          <div class="form-grid" style="margin-top:24px;">
            <div class="field full" v-if="org === 'Airline' || org === 'Airport'">
              <label>Estimated # of kiosks / locations</label>
              <select>
                <option>1–10</option><option>11–50</option><option>51–200</option><option>201–500</option><option>500+</option>
              </select>
            </div>
            <div class="field full">
              <label>Current CUSS platform (if any)</label>
              <input type="text" placeholder="e.g. SITA CUSS · Amadeus · Elevation · None / new build" />
            </div>
          </div>

          <hr style="border:none; border-top:1px solid var(--line); margin: 36px 0;"/>

          <div class="card-tag">03 · What you're after</div>
          <div style="margin-top:10px; color:var(--ink-2); font-size:14px;">Pick every product that's interesting — even loosely.</div>
          <div class="chips" style="margin-top:14px;">
            <div v-for="p in ['Elevated Tagging','Bridge2to1','C2-Platform','Platform-Monitor']" :key="p" class="chip" :class="{ on: products.includes(p) }" @click="toggleProduct(p)">{{ p }}</div>
          </div>

          <div style="margin-top:28px;">
            <label class="mono" style="font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:var(--ink-2);">Tier interest</label>
            <div class="chips" style="margin-top:10px;">
              <div v-for="t in [['free','Free'],['starter','Starter'],['enterprise','Enterprise']]" :key="t[0]" class="chip" :class="{ on: tier === t[0] }" @click="tier = t[0]">{{ t[1] }}</div>
            </div>
          </div>

          <div style="margin-top:24px;">
            <label class="mono" style="font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:var(--ink-2);">Timeline</label>
            <div class="chips" style="margin-top:10px;">
              <div v-for="t in [['now','Immediate'],['6mo','Within 6 months'],['12mo','Within 12 months'],['exp','Exploring']]" :key="t[0]" class="chip" :class="{ on: timeline === t[0] }" @click="timeline = t[0]">{{ t[1] }}</div>
            </div>
          </div>

          <hr style="border:none; border-top:1px solid var(--line); margin: 36px 0;"/>

          <div class="card-tag">04 · Anything we should know</div>
          <div class="field full" style="margin-top:14px;">
            <textarea placeholder="Existing platform, certification deadlines, hardware vendors in play, things that have gone wrong before..."></textarea>
          </div>

          <div class="row" style="justify-content:space-between; margin-top:36px;">
            <p class="faint" style="font-size:12px; max-width:50ch;">By submitting, you agree to be contacted by Elevation AI about CUSS 2. We don't share or sell your information.</p>
            <button type="submit" class="btn btn-primary btn-lg">Join the waitlist <span aria-hidden>→</span></button>
          </div>
        </form>
      </div>
    </section>
  `
};

// --------- ABOUT ---------
const AboutPage = {
  template: `
    <section class="hero" style="padding-bottom:60px;">
      <div class="blob a" style="width:500px; height:500px; top:-80px; left:-100px;"></div>
      <div class="wrap hero-inner">
        <span class="eyebrow">About</span>
        <h1 class="display" style="margin-top:18px;">We help airlines and airports <span style="color:var(--accent);">stop waiting on each other</span>.</h1>
        <p class="lead" style="margin-top:24px; max-width:60ch;">Elevation AI was founded by people who've spent careers in airport IT. We built the CUSS 2 we wished we'd had — and then we kept going.</p>
      </div>
    </section>

    <section style="padding-top:0;">
      <div class="wrap">
        <span class="eyebrow">Who we are</span>
        <h2 class="display" style="margin-top:14px; max-width:22ch;">Two co-founders. Nearly twenty years of working together.</h2>

        <div style="margin-top:48px; display:grid; grid-template-columns: 1fr auto 1fr; gap: 32px; align-items:stretch;">
          <!-- Founder 1 -->
          <div class="card" style="padding:32px; display:flex; flex-direction:column; gap:18px;">
            <div style="width:120px; height:120px; border-radius:50%; background: var(--bg-3); border:2px solid var(--accent); display:grid; place-items:center; font-family: var(--font-mono); font-size:28px; color: var(--accent);">WK</div>
            <div>
              <div style="font-size:24px; font-weight:500;">William Kapke</div>
              <div class="mono" style="color: var(--accent); font-size:13px; margin-top:4px;">Co-Founder · San Francisco, CA</div>
            </div>
            <p class="muted" style="font-size:15px;">A key architect of the IATA RP 1706c specification. Has spent the better part of a decade inside the working group writing the spec the rest of the industry is now migrating to.</p>
            <div class="row" style="margin-top:auto;">
              <span class="tag">CUSS Task Force</span>
              <span class="tag">IATA WG</span>
            </div>
          </div>

          <!-- Timeline -->
          <div style="display:flex; flex-direction:column; align-items:center; padding: 12px 0; position:relative;">
            <div style="position:absolute; top:0; bottom:0; width:1px; background: var(--line-2);"></div>
            <div v-for="(yr, i) in [['2006','Started working together'],['2015','Entered airline tech'],['2026','Founded Elevation AI']]" :key="yr[0]" style="position:relative; background: var(--bg-2); border: 1px solid var(--line); border-radius: 14px; padding: 16px 22px; margin: 8px 0; min-width: 200px; text-align:center;" :style="i===2 ? 'border-color: var(--accent);' : ''">
              <div class="display" style="font-size: 34px; color: var(--accent); line-height: 1;">{{ yr[0] }}</div>
              <div class="muted" style="font-size:12px; margin-top:6px;">{{ yr[1] }}</div>
            </div>
          </div>

          <!-- Founder 2 -->
          <div class="card" style="padding:32px; display:flex; flex-direction:column; gap:18px;">
            <div style="width:120px; height:120px; border-radius:50%; background: var(--bg-3); border:2px solid var(--accent); display:grid; place-items:center; font-family: var(--font-mono); font-size:28px; color: var(--accent);">ST</div>
            <div>
              <div style="font-size:24px; font-weight:500;">Steven Tate</div>
              <div class="mono" style="color: var(--accent); font-size:13px; margin-top:4px;">Co-Founder · Denver, CO</div>
            </div>
            <p class="muted" style="font-size:15px;">Built and ran the engineering teams behind some of the most-deployed check-in software in North American airports. The operator-first instincts in our products are mostly his fault.</p>
            <div class="row" style="margin-top:auto;">
              <span class="tag">Airport IT</span>
              <span class="tag">Engineering</span>
            </div>
          </div>
        </div>

        <p class="lead" style="margin-top:36px; text-align:center; max-width:64ch; margin-inline:auto;">Nearly twenty years of collaboration. A decade in airline technology. One company, built for the next wave of airport self-service.</p>
      </div>
    </section>

    <section style="padding-top:0;">
      <div class="wrap">
        <div class="bento">
          <div class="card wide" style="padding:40px;">
            <span class="eyebrow">Origin</span>
            <h2 class="display" style="margin-top:14px; max-width:24ch;">CUSS 2 was a side-project for years.</h2>
            <p class="muted" style="margin-top:14px; max-width:64ch; font-size:16px;">William has been inside the IATA working group writing CUSS 2 for over a decade. Steven has been deploying CUSS 1 across North American airports for the same span. When the standard hit final review, the decision to start Elevation AI made itself: the spec was almost done, and nobody was building the operator-friendly version of it.</p>
          </div>
          <div class="card">
            <div class="big-num">2026</div>
            <div class="card-tag" style="margin-top:14px;">Year founded</div>
          </div>
          <div class="card">
            <div class="big-num">DEN</div>
            <div class="card-tag" style="margin-top:14px;">Denver, Colorado HQ</div>
          </div>
          <div class="card">
            <div class="big-num">IATA</div>
            <div class="card-tag" style="margin-top:14px;">Strategic Partner</div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="split-2">
          <div>
            <span class="eyebrow">Principles</span>
            <h2 class="display" style="margin-top:18px;">What we believe.</h2>
          </div>
          <div class="stack">
            <div class="card">
              <h3 class="display">Standards are for everyone.</h3>
              <p class="muted" style="margin-top:8px; font-size:15px;">We contributed to RP 1706c so the spec wouldn't belong to any one vendor. We won't gate compliance behind our products.</p>
            </div>
            <div class="card">
              <h3 class="display">Operators get the wheel.</h3>
              <p class="muted" style="margin-top:8px; font-size:15px;">Every product ships with an operator UI before it ships with a developer SDK. The people running the kiosks should never need a console.</p>
            </div>
            <div class="card">
              <h3 class="display">Migration is a graceful curve.</h3>
              <p class="muted" style="margin-top:8px; font-size:15px;">Big-bang cutovers fail. Our products are designed to coexist with what you already have — so you can move on your own terms.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTABand />
  `
};

// --------- RESOURCES ---------
const ResourcesPage = {
  template: `
    <section class="hero" style="padding-bottom:40px;">
      <div class="blob a" style="width:500px; height:500px; top:-80px; right:-100px;"></div>
      <div class="wrap hero-inner">
        <span class="eyebrow">Resources</span>
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
        <span class="eyebrow">Reference hardware</span>
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
  `,
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
  }
};

// --------- 404 ---------
const NotFoundPage = {
  template: `
    <section class="hero">
      <div class="wrap">
        <span class="eyebrow">404</span>
        <h1 class="display" style="margin-top:18px;">That page is <span style="color:var(--accent);">at another gate</span>.</h1>
        <p class="lead" style="margin-top:24px;">Try the products page, the pricing page, or just go home.</p>
        <div class="row" style="margin-top:32px;">
          <a href="#/" class="btn btn-primary">Home</a>
          <a href="#/products" class="btn btn-ghost">Solutions</a>
        </div>
      </div>
    </section>
  `
};

window.__registerApp({
  HomePage, ProductsPage, CTABand,
  ProductElevatedTagging, ProductBridge, ProductC2, ProductMonitor,
  PricingPage, WaitlistPage, AboutPage, ResourcesPage, NotFoundPage
});
