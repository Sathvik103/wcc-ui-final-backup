import fs from 'fs';
let code = fs.readFileSync('components/PrizesSection.tsx', 'utf8');

// I will extract the three cards by their markers
const parts = code.split('{/* 1ST PLACE (CENTER on desktop, 1st on mobile) */}');
const topPart = parts[0];
const rest = parts[1].split('{/* 3RD PLACE (RIGHT on desktop, 3rd on mobile) */}');
const secondPartStr = rest[0]; // This actually contains 1ST PLACE card
const thirdPartStr = rest[1];

// Wait, the original code had:
// {/* 2ND PLACE */} (in topPart)
// {/* 1ST PLACE */} (in secondPartStr)
// {/* 3RD PLACE */} (in thirdPartStr)

// I want to reorder them in the file: 1ST PLACE, 2ND PLACE, 3RD PLACE.
// Let's just use regex to match the cards.
const silverRegex = /\{\/\* 2ND PLACE[\s\S]*?className="prize-sublabel">1ST RUNNERS UP<\/div>\s*<\/div>/;
const goldRegex = /\{\/\* 1ST PLACE[\s\S]*?className="prize-sublabel">WINNERS<\/div>\s*<\/div>/;
const bronzeRegex = /\{\/\* 3RD PLACE[\s\S]*?className="prize-sublabel">2ND RUNNERS UP<\/div>\s*<\/div>/;

const silver = code.match(silverRegex)[0];
const gold = code.match(goldRegex)[0];
const bronze = code.match(bronzeRegex)[0];

const fullGroup = silver + '\n\n          ' + gold + '\n\n          ' + bronze;
const newGroup = gold + '\n\n          ' + silver + '\n\n          ' + bronze;

code = code.replace(fullGroup, newGroup);
fs.writeFileSync('components/PrizesSection.tsx', code, 'utf8');
console.log('DOM Reordered!');
