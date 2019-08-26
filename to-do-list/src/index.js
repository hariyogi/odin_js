import './styles/reset.css';
import './styles/main.css';

import listFact from './list-factory.js';

let testList = listFact(
  "bimbim", "ini adalah latihan", "27 Oktober 1995", "HIGH",
  "Ini latihan", "Blaa..Blaa..Blaa.."
);

console.log("Test Ke Pertama : " + testList.toString());
testList.setJudul("Kontol");
console.log("Test Ke Dua : " + testList.toString());

