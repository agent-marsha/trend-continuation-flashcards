/* Rebuild visual.html from cards_visual.js — keeps the specs in one editable place. */
const fs = require('fs');
const src = fs.readFileSync('cards_visual.js', 'utf8');
const CARDS = eval('(function(){' + src + '\nreturn CARDS;})()');
let html = fs.readFileSync('visual.html', 'utf8');
const line = 'var CARDS = ' + JSON.stringify(CARDS) + ';';
if (!/var CARDS = \[[\s\S]*?\];/.test(html)) throw new Error('CARDS line not found');
html = html.replace(/var CARDS = \[[\s\S]*?\];/, function () { return line; });
fs.writeFileSync('visual.html', html);
const tags = {}; CARDS.forEach(c => tags[c.tag] = (tags[c.tag] || 0) + 1);
console.log('rebuilt:', CARDS.length, 'cards —', html.length, 'bytes');
console.log('tags:', JSON.stringify(tags));
