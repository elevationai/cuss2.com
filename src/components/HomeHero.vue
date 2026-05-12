<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

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
  if (paused.value) { paused.value = false; return; }
  idx.value = (idx.value + 1) % words.length;
  wordKey.value++;
}
onMounted(() => { timer = setInterval(tick, 2800); });
onUnmounted(() => clearInterval(timer));

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

const continents = [
  { name: 'na', coords: [[70,-165],[71,-153],[70,-141],[69,-128],[72,-118],[73,-105],[74,-92],[73,-80],[66,-70],[60,-62],[47,-53],[45,-62],[43,-66],[40,-70],[35,-75],[29,-81],[25,-80],[25,-83],[30,-87],[29,-94],[22,-97],[19,-96],[16,-94],[14,-92],[9,-78],[16,-88],[21,-88],[21,-92],[19,-104],[16,-100],[23,-106],[27,-111],[33,-117],[38,-123],[45,-124],[49,-125],[55,-130],[59,-141],[60,-149],[57,-158],[60,-166],[65,-167]] },
  { name: 'gl', coords: [[83,-30],[80,-15],[75,-20],[65,-35],[60,-45],[63,-50],[70,-55],[78,-65]] },
  { name: 'sa', coords: [[12,-72],[11,-62],[4,-52],[1,-50],[-5,-35],[-23,-41],[-33,-52],[-37,-57],[-50,-69],[-55,-68],[-52,-72],[-44,-74],[-30,-71],[-15,-76],[-5,-81],[3,-78],[10,-75]] },
  { name: 'eu', coords: [[71,28],[70,30],[68,17],[62,5],[58,5],[54,8],[51,3],[50,-1],[48,-5],[44,-2],[43,-9],[36,-9],[36,-2],[37,3],[38,9],[41,9],[44,8],[40,18],[40,24],[37,27],[40,28],[45,29],[48,30],[55,38],[64,42],[68,42]] },
  { name: 'uk', coords: [[58,-3],[56,-2],[53,1],[51,1],[50,-4],[51,-5],[55,-5],[58,-7]] },
  { name: 'af', coords: [[36,-6],[35,-1],[33,11],[32,20],[30,25],[22,36],[12,43],[10,51],[2,46],[-12,40],[-20,35],[-26,33],[-35,20],[-30,17],[-25,14],[-20,12],[-10,13],[4,9],[5,3],[6,-3],[10,-13],[14,-17],[21,-17],[27,-13],[33,-9]] },
  { name: 'me', coords: [[30,33],[28,35],[25,40],[21,40],[14,43],[12,50],[22,57],[29,49],[31,46],[33,40]] },
  { name: 'as', coords: [[71,30],[78,68],[80,100],[78,140],[70,178],[60,177],[56,164],[52,142],[45,135],[38,128],[36,124],[25,121],[22,115],[13,108],[8,103],[12,98],[16,98],[22,92],[22,89],[27,92],[30,80],[33,75],[35,72],[38,67],[38,60],[43,52],[48,50],[52,38],[55,30],[60,30],[65,32]] },
  { name: 'in', coords: [[26,68],[22,68],[18,73],[8,77],[10,80],[18,84],[22,89],[27,92],[28,80],[28,73]] },
  { name: 'id', coords: [[6,95],[3,97],[-2,103],[-8,114],[-9,123],[-6,131],[-4,134],[0,131],[3,128],[5,118],[5,108]] },
  { name: 'jp', coords: [[44,141],[42,144],[37,141],[34,135],[33,131],[34,135],[37,139],[40,141]] },
  { name: 'au', coords: [[-11,142],[-15,144],[-21,150],[-28,153],[-34,151],[-37,148],[-38,140],[-35,138],[-32,134],[-32,127],[-35,118],[-32,116],[-22,115],[-17,123],[-14,127],[-12,132],[-11,135]] },
  { name: 'an', coords: [[-65,-180],[-70,-150],[-78,-130],[-78,-100],[-72,-70],[-66,-60],[-72,-30],[-70,0],[-66,30],[-70,60],[-66,90],[-68,120],[-72,150],[-66,180],[-65,180],[-65,-180]] },
];

function toPoints(coords) {
  return coords.map(([lat, lng]) => `${(lng + 180) * 2},${(90 - lat) * 2}`).join(' ');
}

const tripleKiosks = [...kiosks, ...kiosks, ...kiosks];
</script>

<template>
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
        Elevation AI builds the CUSS 2 infrastructure airports and airlines actually want to run. We handle the standard so your team can focus on the operation.
      </p>
      <div class="row" style="margin-top:40px; align-items:center;">
        <a href="/waitlist" class="btn btn-primary btn-lg">Join the waitlist <span aria-hidden>→</span></a>
        <a href='/solutions' class="btn btn-ghost btn-lg">See our solutions</a>
        <div class="swap-tabs" style="margin-left:auto;">
          <button v-for="(w, i) in words" :key="w" :class="{ on: idx===i }" @click="setIdx(i)">{{ wordPlural[w] }}</button>
        </div>
      </div>

      <div class="swap-panel">
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

        <div class="swap-stage" :class="{ on: current==='kiosk' }">
          <div class="kiosk-rail">
            <div class="kiosk-rail-track">
              <div v-for="(k, i) in tripleKiosks" :key="i" class="kiosk-rail-cell">
                <img :src="k.url" :alt="k.name" loading="lazy"/>
                <div class="name">{{ k.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="stats" style="margin-top:80px;">
        <div class="stat"><div class="value">2,000+</div><div class="label">Kiosks managed today</div></div>
        <div class="stat"><div class="value">69</div><div class="label">Airport locations</div></div>
        <div class="stat"><div class="value">18</div><div class="label">Countries</div></div>
        <div class="stat"><div class="value">6+</div><div class="label">Years in production</div></div>
      </div>
    </div>
  </section>
</template>
