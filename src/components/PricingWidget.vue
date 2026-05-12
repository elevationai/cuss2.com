<script setup>
import { ref } from 'vue';
const billing = ref('monthly');
</script>

<template>
  <section class="hero" style="padding-bottom:40px;">
    <div class="blob a" style="width:500px; height:500px; top:-80px; left:-100px;"></div>
    <div class="wrap hero-inner">
      <h1 class="display" style="margin-top:18px;">Honest, <span style="color:var(--accent);">per-machine</span> pricing.</h1>
      <p class="lead" style="margin-top:24px; max-width:60ch;">Every solution is a connection to the Portal. One license per machine, per account. That's the whole model — and all four solutions are free on the Free tier.</p>
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
          <p class="muted" style="font-size:14px;">All four solutions. Free, forever, for development, evaluation, and production pilots. No card required.</p>
          <ul>
            <li>1 license per solution, per account</li>
            <li>All 4 solutions included</li>
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
            <span class="num">${{ billing==='monthly' ? '49' : '39' }}</span>
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
            <p style="margin-top:8px; max-width:60ch;" class="muted">One running instance of one solution talking to the Portal. A C2-Platform on a single kiosk is one license. An Elevated Tagging app at one airport is one license. A Platform-Monitor agent is one license — no matter how many devices it watches.</p>
          </div>
          <a href="/resources" class="btn btn-ghost">Read more</a>
        </div>
      </div>
    </div>
  </section>
</template>
