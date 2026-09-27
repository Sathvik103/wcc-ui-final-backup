import fs from 'fs';
let code = fs.readFileSync('components/PrizesSection.tsx', 'utf8');

const sReg = /\{\/\* 2ND PLACE[\s\S]*?1ST RUNNERS UP<\/div>\s*<\/div>/;
const gReg = /\{\/\* 1ST PLACE[\s\S]*?WINNERS<\/div>\s*<\/div>/;
const bReg = /\{\/\* 3RD PLACE[\s\S]*?2ND RUNNERS UP<\/div>\s*<\/div>/;

const silver = code.match(sReg)[0];
const gold = code.match(gReg)[0];
const bronze = code.match(bReg)[0];

const fullMatchRegex = /\{\/\* 2ND PLACE[\s\S]*?3RD PLACE[\s\S]*?2ND RUNNERS UP<\/div>\s*<\/div>/;

const newGroup = gold + '\n\n          ' + silver + '\n\n          ' + bronze;

code = code.replace(fullMatchRegex, newGroup);
fs.writeFileSync('components/PrizesSection.tsx', code, 'utf8');
console.log('DOM Reordered 100%!');
