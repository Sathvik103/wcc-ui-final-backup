import fs from 'fs';
let code = fs.readFileSync('components/Navbar.tsx', 'utf8');

code = code.replace(
  'import Image from "next/image";',
  'import Image from "next/image";\nimport { Menu, X } from "lucide-react";'
);

// Specifically target the three spans inside the button
const buttonRegex = /<span\s+className=\{\`h-0\.5[\s\S]*?<\/button>/;
const replacement = `{mobileMenuOpen ? <X size={20} strokeWidth={2.5} className="text-[#1a1918]" /> : <Menu size={20} strokeWidth={2.5} className="text-[#1a1918]" />}\n            </button>`;

code = code.replace(buttonRegex, replacement);

fs.writeFileSync('components/Navbar.tsx', code, 'utf8');
console.log('Navbar updated correctly!');
