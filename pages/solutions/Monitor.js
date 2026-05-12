import { makeProductPage } from './shared.js';

export default makeProductPage({
  code: 'PM',
  tag: 'Universal monitoring',
  title: 'Monitor any system — not just CUSS kiosks.',
  lede: 'Platform-Monitor is not a CUSS 2 product — it is a universal telemetry agent that works alongside your CUSS deployment or on its own. Point it at any system you need visibility into: kiosks, bag scales, conveyor PLCs, network switches, door sensors. If it speaks a protocol, Platform-Monitor can read it.',
  features: [
    { tag: 'Universal', title: 'Any protocol, any vendor.', body: 'HTTP, SNMP, MQTT, RS-232, Modbus, raw TCP — the agent reads from any source and normalizes the data into events for the Portal.' },
    { tag: 'Lightweight', title: 'Minimal footprint.', body: 'Single static binary, under 30 MB resident memory. Runs on any hardware — purpose-built monitoring devices, back-office machines, or edge hardware at the gate.' },
    { tag: 'Workflows', title: 'Alerts, not just dashboards.', body: 'Wire telemetry to Portal Workflows: paper-out triggers an email, conveyor stall notifies on-call, sensor anomaly fires a webhook. Actionable, not just observable.' },
    { tag: 'History', title: 'Full event history, retained.', body: 'Every telemetry event archived, replayable, and searchable. Compare fleet behavior across months or years without needing a separate data warehouse.' },
  ],
  included: 'Agent binaries for every common architecture, configuration profiles for common devices, and Portal integration out of the box.',
  specs: [
    ['Protocols', 'HTTP · SNMP · MQTT · Modbus · Serial · Custom plugins'],
    ['Targets', 'Kiosks · scales · conveyors · cameras · switches · doors'],
    ['Footprint', '< 30 MB RAM · < 1% CPU typical'],
    ['Buffering', 'Local store-and-forward when offline'],
    ['Licensing', 'Per running agent, irrespective of targets'],
  ],
});
