// const ids = new Set(['Hi', 'New', 'Set']);
// ids.add(2);
//
// if (ids.has('Hi')) {
//   ids.delete('Hi');
// }
//
// for (const entry of ids.entries()) {
//   console.log(entry);
// }
//
// for (const entry of ids.values()) {
//   console.log(entry);
// }

// const person1 = { name: 'Max' };
// const person2 = { name: 'Bae' };
//
// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);
// personData.set(person2, [{ date: 'two weeks age', price: 500 }]);
//
// console.log(personData);
// console.log(personData.get(person1));
//
// for (const [key, value] of personData) {
//   console.log(key, value);
// }
// for (const key of personData.keys()) {
//   console.log(key);
// }
// for (const value of personData.values()) {
//   console.log(value);
// }

// const persons = new WeakSet();
// persons.add(person);

// some operations ...

// person = null;
// console.log(persons);

let person = { name: 'Bae' };
const personData = new WeakMap();
personData.set(person, 'Extra Info!');

person = null;

console.log(personData);
