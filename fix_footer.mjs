import fs from 'fs';
let code = fs.readFileSync('components/Footer.tsx', 'utf8');

code = code.replace(
  /Student Chapter, Dept\. of Information Technology \?" VNR Vignana Jyothi/,
  'Student Chapter — VNR Vignana Jyothi'
);

// Fallback in case the mojibake was different
code = code.replace(
  'Student Chapter, Dept. of Information Technology',
  'Student Chapter'
);

fs.writeFileSync('components/Footer.tsx', code, 'utf8');
console.log('Footer updated!');
