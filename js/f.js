
const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];

animals.forEach((value, index) => console.log(value, index));

//forEach((value, index) => console.log(value, index))=> console.log(`stalcius nr ${index} jame guli ${value}`);


console.log(animals.slice());
// animals.sort();
animals.sort((a, b) => b.length - a.length);
console.log(animals);

/*
Naudojant forEach, atspausdinti visus gyvulius po vieną su console.log

Išrūšiuoti gyvulis pagal pavadinimo ilgį, kad pirma eitų ilgiausią pavadinimą turintis gyvulys

Su console.log išvesti masyvą prieš ir po rūšiavimo.
*/

const V = 'Varlė';

const niceSentence = 'Ruda ' + V + ' plaukia greitai';

const niceSentence1 = `Ruda  V  plaukia greitai plaukia greitai plaukia greitai plaukia greitai plaukia greitai`;
const niceSentence2 = `Ruda  ${V}  plaukia greitai plaukia greitai plaukia greitai plaukia greitai plaukia greitai`;

console.log(niceSentence);
console.log(niceSentence1);
console.log(niceSentence2);

const A = animals.forEach((value, index) => console.log(`stalcius nr ${index} jame guli ${value}`));

console.log('------------------------------');


//const B = animals.map((value, index) => console.log(value, index))=> console.log(`stalcius nr ${index} jame guli ${value}`);

const B = animals.map((value) => 'labas ' +  value);

console.log(B, animals);