import { route } from '../router.js';
import { nav } from '../data.js';

export default {
  setup() {
    return { route, nav };
  },
  template: `
    <header class="nav">
      <div class="nav-inner">
        <a href="/" class="brand">
          <img src="https://elevationai.github.io/presentations/c2-platform/images/EAIOnDark.png" alt="Elevation AI" class="brand-logo" />
          <span class="brand-divider" aria-hidden></span>
          <span class="brand-sub">CUSS 2</span>
        </a>
        <nav class="nav-links">
          <a v-for="n in nav" :key="n.to" :href="n.to" class="nav-link" :class="{ active: route.startsWith(n.to) }">{{ n.label }}</a>
        </nav>
        <div class="nav-cta">
          <a href="/waitlist" class="btn btn-ghost">Sign in</a>
          <a href="/waitlist" class="btn btn-primary">Join waitlist <span aria-hidden>→</span></a>
        </div>
      </div>
    </header>
  `
};
