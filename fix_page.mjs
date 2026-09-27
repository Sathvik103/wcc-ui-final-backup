import fs from 'fs';
let c = fs.readFileSync('app/page.tsx', 'utf8');

c = c.replace(
  'import PartnersSection from "@/components/PartnersSection";',
  'import PartnersSection from "@/components/PartnersSection";\nimport ContactsSection from "@/components/ContactsSection";'
);

c = c.replace(
  '<PartnersSection />',
  '<PartnersSection />\n\n      {/* 9. Contacts Section */}\n      <ContactsSection />'
);

fs.writeFileSync('app/page.tsx', c, 'utf8');
console.log('page.tsx fixed');
