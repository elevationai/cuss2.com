import { createApp, computed } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';
import { route } from './router.js';
import Nav from './components/Nav.js';
import SiteFooter from './components/Footer.js';
import CTABand from './components/CTABand.js';
import HomePage from './pages/Home.js';
import ProductsPage from './pages/Products.js';
import PricingPage from './pages/Pricing.js';
import WaitlistPage from './pages/Waitlist.js';
import AboutPage from './pages/About.js';
import ResourcesPage from './pages/Resources.js';
import NotFoundPage from './pages/NotFound.js';
import ProductElevatedTagging from './pages/solutions/ElevatedTagging.js';
import ProductBridge from './pages/solutions/Bridge.js';
import ProductC2 from './pages/solutions/C2.js';
import ProductMonitor from './pages/solutions/Monitor.js';

const routes = {
  '/': HomePage,
  '/solutions': ProductsPage,
  '/solutions/elevated-tagging': ProductElevatedTagging,
  '/solutions/bridge2to1': ProductBridge,
  '/solutions/c2-platform': ProductC2,
  '/solutions/platform-monitor': ProductMonitor,
  '/pricing': PricingPage,
  '/waitlist': WaitlistPage,
  '/about': AboutPage,
  '/resources': ResourcesPage,
};

const App = {
  components: { Nav, SiteFooter },
  setup() {
    const page = computed(() => routes[route.value] || NotFoundPage);
    const pageClass = computed(() => {
      const r = route.value;
      return r === '/' ? 'page-home' : 'page-' + r.slice(1).replace(/\//g, '-');
    });
    return { route, page, pageClass };
  },
  template: `
    <div :class="pageClass">
      <Nav />
      <main :key="route" class="page-enter">
        <component :is="page" />
      </main>
      <SiteFooter />
    </div>
  `
};

const app = createApp(App);
app.component('CTABand', CTABand);
app.mount('#app');
