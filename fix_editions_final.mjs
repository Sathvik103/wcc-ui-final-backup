import fs from 'fs';

let c = fs.readFileSync('components/EditionsSection.tsx', 'utf8');

// Fix prize pool
c = c.replace('₹1,50,000+', '₹50,000+');

// Fix description max width (remove it to allow flex natural width)
c = c.replace('max-w-[500px]', 'w-full');

// Fix min-h-[460px]
c = c.replace('min-h-[460px]', '');

// Fix right column width (make poster larger)
c = c.replace('sm:w-[340px]', 'sm:w-[420px] lg:w-[460px]');

// Fix inline Edition Switcher spacing (ensure it is normal)
c = c.replace('mb-10 sm:mb-14', 'mb-8 sm:mb-10');

fs.writeFileSync('components/EditionsSection.tsx', c, 'utf8');
console.log('EditionsSection updated!');
