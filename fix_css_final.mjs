import fs from 'fs';
let css = fs.readFileSync('app/globals.css', 'utf8');

// Remove everything after the media query
const idx = css.indexOf('@keyframes marquee { 0%');
if (idx !== -1) {
  css = css.substring(0, idx);
}

css += `
@keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
.animate-marquee { animation: marquee 35s linear infinite; }
.hover\\:pause:hover { animation-play-state: paused; }
`;

fs.writeFileSync('app/globals.css', css, 'utf8');
console.log('globals.css fixed!');
