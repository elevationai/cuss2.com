export function makeProductPage(opts) {
  return {
    template: `
      <section class="hero" style="padding-bottom:60px;">
        <div class="blob a" style="width:500px; height:500px; top:-80px; right:-100px;"></div>
        <div class="wrap hero-inner">
          <div class="row" style="margin-bottom:24px;">
            <a href='/solutions' style="color:var(--ink-2); font-size:14px;">← All solutions</a>
          </div>
          <h1 class="display" style="margin-top:18px; max-width: 18ch;">${opts.title}</h1>
          <p class="lead" style="margin-top:24px;">${opts.lede}</p>
          <div class="row" style="margin-top:32px;">
            <a href="/waitlist" class="btn btn-primary">Get a license</a>
            <a href="/pricing" class="btn btn-ghost">See pricing</a>
          </div>
        </div>
      </section>
      <section style="padding-top:20px;">
        <div class="wrap">
          <div class="bento">
            ${opts.features.map((f, i) => `
              <div class="card${i === 0 ? ' wide' : ''}">
                <div class="card-tag">${String(i + 1).padStart(2, '0')} · ${f.tag}</div>
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
