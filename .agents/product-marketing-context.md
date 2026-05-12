# Product Marketing Context

*Last updated: 2026-05-11*

## Product Overview
**One-liner:** The operator-friendly CUSS 2 platform — four products, one cloud Portal, plain-language pricing.

**What it does:** Elevation AI builds the CUSS 2 infrastructure that airlines and airports actually want to run. Four products (Elevated Tagging, Bridge2to1, C2-Platform, Platform-Monitor) all connect to a single cloud Portal and are managed, licensed, and monitored there. Each product is free on the Free tier; production use is billed per machine, per account.

**Product category:** Airport self-service / CUSS 2 platform (customers searching: "CUSS 2 platform," "CUSS 2 kiosk software," "airport check-in kiosk platform")

**Product type:** SaaS platform + licensed software (buildless deployment on customer hardware)

**Business model:** Free tier (1 license per product, forever). Starter: placeholder price/license/month. Potentially a volume tier for 200+ licenses. Enterprise: custom pricing. All pricing is per machine, per account — count licenses, not seats. Pricing is not finalized.

---

## Target Audience
**Target companies:** Airlines (any size), airports (operators/authorities), airport technology vendors

**Decision-makers:** Director/VP of Airport IT, Head of Check-in Technology, Airport Operations Manager, Airline Ground Operations Technology lead

**Primary use case:** Modernizing airport self-service check-in infrastructure from CUSS 1 to CUSS 2 — without waiting on other parties to move first.

**Jobs to be done:**
- Ship a CUSS 2 check-in app without building a platform team from scratch
- Run CUSS 2 apps on legacy CUSS 1 airports during the migration window (without a big-bang cutover)
- Gain real-time visibility into every kiosk, scale, conveyor, and sensor across the fleet

**Use cases:**
- Airline wants a white-label check-in kiosk app in their livery, deployed in weeks
- Airline has a CUSS 2 app but airports haven't migrated — need a bridge to run on legacy CUSS 1 platforms
- Airport wants to modernize hardware-first while still serving legacy CUSS 1 airlines side-by-side
- Airport/airline IT team wants telemetry from any system (kiosks, bag scales, conveyors) piped into one dashboard

---

## Personas

| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| Airline IT Director | Deploying a compliant check-in experience fast, not waiting on airport timelines | Airports haven't migrated to CUSS 2 yet; migration is a lockstep problem | Ship CUSS 2 today — Bridge2to1 runs it on any CUSS 1 airport, unchanged |
| Airport Operations / IT | Modernizing kiosk fleet without disrupting airlines still on CUSS 1 | Can't force airlines to migrate; hardware refresh and software migration are out of sync | C2-Platform serves CUSS 1 and CUSS 2 airlines side-by-side from day one |
| Ground Ops / On-call Engineer | Knowing what's broken before a passenger does | No single pane of glass; each vendor has their own siloed dashboard | Platform-Monitor feeds every system into the Portal; one dashboard, real alerts |
| Airline without a dev team | Getting a branded check-in app without 9–12 months and a platform buildout | Don't have the engineering capacity or CUSS expertise | Elevated Tagging: branded, compliant, deployed in 6–8 weeks |

---

## Problems & Pain Points
**Core problem:** CUSS 2 migration is a lockstep problem — airlines wait for airports, airports wait for airlines. Nobody wants to move first, so nobody moves.

**Why alternatives fall short:**
- Legacy CUSS 1 vendors (SITA, Amadeus, IER, etc.) have no incentive to accelerate the migration — their incumbency is the moat
- Build-it-yourself: CUSS 2 spec (IATA RP 1706c) is dense, the certification process is long, and most teams lack the domain expertise
- Existing CUSS 2 solutions are technical-first and operator-last — no plain-language dashboard, no operator UI before the developer SDK

**What it costs them:** 9–12 month timelines to deploy a check-in app (vs. weeks with Elevation AI). Ongoing dependency on hardware/platform vendors. No visibility into fleet health across vendors.

**Emotional tension:** "We know we have to migrate to CUSS 2 but we can't move until the airport does / the airline does." Fear of breaking the check-in flow for passengers. Dread of the certification process.

---

## Competitive Landscape
**Direct (CUSS 2 platforms):**
- SITA — large incumbent with a CUSS 2 platform in development; benefits from existing airport relationships and slow migration pace
- Embross — the other CUSS 2 platform in the works; less entrenched than SITA but still emerging

**Secondary:** Build-it-yourself against the IATA RP 1706c spec — falls short because the spec is complex, certification takes months, and most teams lack CUSS domain expertise

**Indirect:** Staying on CUSS 1 indefinitely / delaying migration — "works" until airlines start demanding CUSS 2 compliance, then it's a crisis

**Key differentiator vs. all:** William Kapke co-authored RP 1706c at IATA. Elevation AI isn't interpreting the spec — they wrote it.

---

## Differentiation
**Key differentiators:**
- Co-authored at IATA — not a third-party interpreter of the spec
- Breaks the lockstep problem: Bridge2to1 lets airlines ship CUSS 2 apps today on any CUSS 1 airport
- Hardware-agnostic: C2-Platform runs on CX200, SITA S4, IER 919, KK-12, TP120, and most others
- Free tier includes all four products — no card, no trial, no gotcha
- Plain-language operator dashboard before any developer SDK
- Per-machine, per-account pricing (not per-seat, not per-airline)

**How we do it differently:** Every product is useful standalone, but they all report to the same Portal. One license, one dashboard, one team to call.

**Why customers choose us:** Weeks to first kiosk (not quarters). No waiting on the other party. The spec is technical — the dashboard doesn't have to be.

---

## Objections

| Objection | Response |
|-----------|----------|
| "We need to wait until our airport migrates before we can use CUSS 2" | That's exactly what Bridge2to1 solves — your CUSS 2 app runs unchanged on any RP 1706b CUSS 1 platform. You don't have to wait. |
| "Our airport can't move until all our airlines are ready" | C2-Platform serves CUSS 1 and CUSS 2 airlines side-by-side from day one. Legacy airlines keep running while modern airlines onboard. |
| "We can't justify the cost for a pilot" | The Free tier is genuinely free, forever — one license per product, no card required. Evaluate in production. |

**Anti-persona:** Airlines that own their kiosks exclusively (no shared-use model) — CUSS only applies to shared/common-use kiosks. If an airline's kiosks run only that airline's application, CUSS is not relevant and neither is this platform.

---

## Switching Dynamics
**Push:** Tired of waiting on airport/airline counterparties. Frustrated by siloed dashboards per vendor. Worried about missing IATA CUSS 2 compliance deadlines. Can't get visibility into fleet health without custom integrations.

**Pull:** Free tier to evaluate with zero risk. Weeks, not quarters. The people who wrote the spec are the ones building the tools. One Portal for everything.

**Habit:** Existing CUSS 1 contracts and relationships. "It works well enough." Fear of breaking a check-in flow mid-migration. IT teams that are already stretched thin.

**Anxiety:** "What if our certification fails?" "What if we switch and our airport still isn't on CUSS 2?" "Is this company going to be around?" "What happens to Bridge2to1 licenses after airports migrate?"

---

## Customer Language
**How they describe the problem:**
- "We're waiting on the airport"
- "We can't move until our airlines do"
- "CUSS 2 is on the roadmap but we don't know when"
- "The spec is extremely technical and we don't have the internal expertise"
- "Our kiosks are a black box — we don't know what's happening until a passenger complains"

**How they describe the solution (target):**
- "Finally a dashboard that makes sense"
- "We can ship without waiting on anyone"
- "The same people who wrote the spec"

**Words to use:** operator, fleet, kiosk, Portal, license, machine, migration, CUSS 2, plain-language, weeks (not months/quarters), free, hardware-agnostic, side-by-side

**Words to avoid:** "revolutionary," "AI-powered" (misleading for this product), "seamless," "end-to-end solution," jargon-dense IATA spec references without explanation, "Public beta"

**Glossary:**
| Term | Meaning |
|------|---------|
| CUSS | Common Use Self-Service — the IATA standard for shared airport kiosks |
| RP 1706c | The IATA recommended practice defining CUSS 2 (current version) |
| RP 1706b | The older IATA recommended practice defining CUSS 1 |
| Portal | Elevation AI's cloud management dashboard — where all products report to |
| License | One running instance of one product talking to the Portal, on one machine |
| Bridge2to1 | EAI product that lets a CUSS 2 app run on a legacy CUSS 1 platform |
| C2-Platform | EAI's hardware-agnostic CUSS 2 platform |
| Elevated Tagging | EAI's white-label airline check-in kiosk application |
| Platform-Monitor | EAI's universal telemetry agent |
| DCS | Departure Control System — the airline backend system for check-in |

---

## Brand Voice
**Tone:** Approachable, plain-language, direct. Confident without being arrogant. Operator-first — speaks to the person who gets paged at 4am, not the procurement committee.

**Style:** Short sentences. Active voice. Real numbers over vague claims. Humor is dry and light — airport people are practical.

**Personality:** Knowledgeable (we wrote the spec), approachable (no jargon wall), pragmatic (migration is messy, we know), honest (per-machine pricing, no hidden gotchas)

---

## Proof Points
**Metrics:**
- 2,000+ kiosks managed today
- 69 airport locations
- 18 countries
- 6–8 weeks to first kiosk (low/mid-service)
- P99 < 120ms peripheral round-trip (C2-Platform)
- < 30 MB RAM footprint (Platform-Monitor)
- 99.97% platform uptime (2025)
- 15-minute P1 SLA on Enterprise

**Founders:**
- William Kapke — key contributor to IATA RP 1706c, CUSS Task Force member, San Francisco, CA.
- Steven Tate — built and led engineering teams behind widely-deployed North American airport check-in software, Denver, CO.

**Company history (internal — do not use "Founded 2026" in marketing):**
- Elevation Software founded ~10 years ago; built CUSS 2 applications from the start.
- Company was sold, later reacquired by the founders. Do not reference this history publicly.
- EAI Holdings DBA Elevation AI officially formed January 1, 2026.

**Preferred marketing framing:**
- "CUSS 2 apps running in 50+ airports for more than 6 years"
- "A decade building airport self-service technology"
- Do NOT say "Founded in 2026" — it understates the track record.
- Do NOT mention VisionBox or Amadeus.

**Value themes:**
| Theme | Proof |
|-------|-------|
| Speed | 6–8 weeks to first kiosk vs. 9–12 month industry norm |
| No lockstep | Bridge2to1 runs CUSS 2 apps on any CUSS 1 platform today |
| Credibility | Co-authored the spec at IATA |
| Operator-first | Dashboard before SDK; plain-language throughout |
| Free to start | All 4 products included in Free tier, no card required |

---

## Goals
**Business goal:** Build waitlist of qualified airlines, airports, and vendors ahead of launch. Establish Elevation AI as the operator-friendly face of CUSS 2.

**Conversion action:** Join the waitlist (collect: org type, kiosk count, current platform, timeline, tier interest, products of interest, name/email, company/role, country/airports)

**Current metrics:** Pre-launch / waitlist phase. No public revenue metrics yet.
