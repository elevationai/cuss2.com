// app.js — Vue 3 buildless SPA for CUSS2 marketing site
const { createApp, ref, computed, onMounted, onUnmounted, watch, h } = Vue;

// ---- Hash router (lightweight) ----
const useRoute = () => {
  const route = ref(parseHash());
  function parseHash() {
    const h = window.location.hash.replace(/^#/, '') || '/';
    return h.replace(/\/+$/, '') || '/';
  }
  function onHashChange() { route.value = parseHash(); window.scrollTo({top:0}); }
  window.addEventListener('hashchange', onHashChange);
  return route;
};

const nav = [
  { to: '/products', label: 'Solutions' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
];

const productList = [
  { id: 'elevated-tagging', code: 'ET', name: 'Elevated Tagging', tag: 'Kiosk app', summary: 'A white-label airline check-in kiosk experience. Drop your brand in, ship to every airport.', stat: 'Weeks, not quarters' },
  { id: 'bridge2to1', code: 'B2', name: 'Bridge2to1', tag: 'Compatibility layer', summary: 'Run your shiny new CUSS 2 app on any legacy CUSS 1 platform — no airport waiting required.', stat: 'Any RP 1706b vendor' },
  { id: 'c2-platform', code: 'C2', name: 'C2-Platform', tag: 'Kiosk platform', summary: 'A hardware-agnostic CUSS 2 platform that serves CUSS 1 and CUSS 2 airlines side-by-side.', stat: 'Runs anywhere' },
  { id: 'platform-monitor', code: 'PM', name: 'Platform-Monitor', tag: 'Observability', summary: 'Send telemetry from any system — kiosk, scale, conveyor, sensor — straight into the Portal.', stat: 'Anything → Portal' },
];

const App = {
  setup() {
    const route = useRoute();
    return { route, nav, productList };
  },
  template: `
    <div :class="'page-' + route">
      <Nav :route="route" :nav="nav" />
      <main :key="route" class="page-enter">
        <component :is="pageFor(route)" :route="route" :products="productList" />
      </main>
      <SiteFooter :nav="nav" />
    </div>
  `,
  methods: {
    pageFor(route) {
      const map = {
        '/': 'HomePage',
        '/products': 'ProductsPage',
        '/products/elevated-tagging': 'ProductElevatedTagging',
        '/products/bridge2to1': 'ProductBridge',
        '/products/c2-platform': 'ProductC2',
        '/products/platform-monitor': 'ProductMonitor',
        '/pricing': 'PricingPage',
        '/waitlist': 'WaitlistPage',
        '/about': 'AboutPage',
        '/resources': 'ResourcesPage',
      };
      return map[route] || 'NotFoundPage';
    }
  }
};

// ---- Nav ----
const Nav = {
  props: ['route', 'nav'],
  template: `
    <header class="nav">
      <div class="nav-inner">
        <a href="#/" class="brand">
          <img src="https://elevationai.github.io/presentations/c2-platform/images/EAIOnDark.png" alt="Elevation AI" class="brand-logo" />
          <span class="brand-divider" aria-hidden></span>
          <span class="brand-sub">CUSS 2</span>
        </a>
        <nav class="nav-links">
          <a v-for="n in nav" :key="n.to" :href="'#'+n.to" class="nav-link" :class="{ active: route.startsWith(n.to) }">{{ n.label }}</a>
        </nav>
        <div class="nav-cta">
          <a href="#/waitlist" class="btn btn-ghost">Sign in</a>
          <a href="#/waitlist" class="btn btn-primary">Join waitlist <span aria-hidden>→</span></a>
        </div>
      </div>
    </header>
  `
};

// ---- Footer ----
const SiteFooter = {
  template: `
    <footer>
      <div class="wrap">
        <div class="footer-grid">
          <div class="footer-col">
            <a href="#/" class="brand" style="margin-bottom:14px;">
              <img src="https://elevationai.github.io/presentations/c2-platform/images/EAIOnDark.png" alt="Elevation AI" class="brand-logo" style="height:80px;" />
            </a>
            <p class="muted" style="font-size:14px; max-width:32ch;">CUSS 2 for the airlines and airports running the world's busiest places. From Denver, Colorado.</p>
          </div>
          <div class="footer-col">
            <h5>Solutions</h5>
            <a href="#/products/elevated-tagging">Elevated Tagging</a>
            <a href="#/products/bridge2to1">Bridge2to1</a>
            <a href="#/products/c2-platform">C2-Platform</a>
            <a href="#/products/platform-monitor">Platform-Monitor</a>
          </div>
          <div class="footer-col">
            <h5>Company</h5>
            <a href="#/about">About</a>
            <a href="#/pricing">Pricing</a>
            <a href="#/resources">Resources</a>
            <a href="#/waitlist">Join waitlist</a>
          </div>
          <div class="footer-col">
            <h5>Connect</h5>
            <a href="mailto:cuss2@elevationsoftware.com">cuss2@elevationsoftware.com</a>
            <a href="https://cuss2.dev" target="_blank">cuss2.dev →</a>
            <a href="https://www.iata.org/en/programs/passenger/common-use/" target="_blank">IATA RP 1706c →</a>
            <div class="socials">
              <a href="https://discord.gg/elevationai" target="_blank" rel="noopener" aria-label="Discord" class="social">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden><path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.249.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.17 14.17 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.371-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.099.246.197.372.291a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.077.077 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.956 2.419-2.157 2.419zm7.974 0c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.946 2.419-2.157 2.419z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/elevation-ai" target="_blank" rel="noopener" aria-label="LinkedIn" class="social">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.272V1.723C24 .771 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Elevation AI · Denver, Colorado</span>
          <span class="mono">IATA Strategic Partner · CUSS Task Force</span>
        </div>
      </div>
    </footer>
  `
};

window.__registerApp = (extra) => {
  const app = createApp(App);
  app.component('Nav', Nav);
  app.component('SiteFooter', SiteFooter);
  for (const [name, comp] of Object.entries(extra)) app.component(name, comp);
  app.mount('#app');
};
