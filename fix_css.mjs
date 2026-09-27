import fs from 'fs';
let css = fs.readFileSync('app/globals.css', 'utf8');

// The block we want to replace
const target = `@media(max-width: 860px) {
  .prizes-stage { flex-direction: column; align-items: center; gap: 30px; }`;

const replacement = `@media(max-width: 860px) {
  .prizes-stage { flex-direction: column; align-items: center; gap: 30px; }
  .prize-card-wrap.card-gold { order: 1 !important; }
  .prize-card-wrap.card-silver { order: 2 !important; }
  .prize-card-wrap.card-bronze { order: 3 !important; }`;

if (css.includes(target)) {
  css = css.replace(target, replacement);
  fs.writeFileSync('app/globals.css', css, 'utf8');
  console.log("CSS updated!");
} else {
  console.log("Target not found!");
}
