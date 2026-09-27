import fs from 'fs';
let c = fs.readFileSync('components/HeroSection.tsx', 'utf8');

c = c.replace(
  /WINTER<br \/>\s*CODING <span[^>]+>CONTEST<\/span><br \/>\s*<span className="text-coral">6\.0<\/span>/,
  'WINTER CODING<br />\n              CONTEST <span className="text-coral">6.0</span>'
);

c = c.replace(
  /A national algorithmic arena. Two rounds, one campus finale, and a pipeline built to find India's sharpest problem-solvers./,
  'Code, Compile and Compete at National Level.'
);

c = c.replace(/REGISTER FOR FREE[^\n<]+/, 'REGISTER FOR FREE ↗\n              ');
c = c.replace(/className="object-cover"/, 'className="object-contain"');
c = c.replace(/text-\[clamp\(44px,7\.5vw,100px\)\]/g, 'text-[clamp(40px,6.5vw,90px)]');
c = c.replace(/leading-\[0\.9\]/g, 'leading-[1.0]');

fs.writeFileSync('components/HeroSection.tsx', c, 'utf8');
console.log('Hero fixed');
