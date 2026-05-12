import { makeProductPage } from './shared.js';

export default makeProductPage({
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
  ],
});
