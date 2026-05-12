export default {
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
          <h1 class="display" style="margin-top:18px; max-width:18ch;">Thanks. <span style="color:var(--accent);">We'll be in touch.</span></h1>
          <p class="lead" style="margin-top:24px;">An engineer on our team will follow up within 48 hours to discuss your deployment and next steps.</p>
          <div class="row" style="margin-top:32px;">
            <a href="/" class="btn btn-primary">Back home</a>
            <a href="/resources" class="btn btn-ghost">Read while you wait</a>
          </div>
        </div>
        <div v-else>
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
