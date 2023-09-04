// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);
//
// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);
//
// const personData = [30, 'Max', { moreData: [] }];
// const numberData = [
//   [1, 3],
//   [-5, 3],
// ];
//
// for (const data of numberData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }
//
// const hobbies = ['cooking', 'sports'];
//
// const push = hobbies.push('reading');
// const unshift = hobbies.unshift('gaming');
// console.log(push, unshift, hobbies);
//
// const pop = hobbies.pop();
// const shift = hobbies.shift();
// console.log(pop, shift, hobbies);
//
// hobbies[1] = 'coding';
// hobbies[5] = 'fighting';
// console.log(hobbies, hobbies[4]);

// const arr = [1, 2, 3];
// const result = arr.concat([4, 5]);
// const copy = arr.concat();
//
// arr.push(7);
//
// console.log('arr', arr);
// console.log('concat', result);
// console.log('copy', copy);
//
// const personData = [{ name: 'Max' }, { name: 'Bae' }];
// console.log(personData.indexOf({ name: 'Bae' }));
//
// const bae = personData.find((person, idx, persons) => {
//   return person.name === 'Bae';
// });
// console.log(bae);
// bae.name = 'YoungHyun'; // 정확하기 동일한 객체의 동일한 참조 값으로 작업하고 있기 때문이며 find()는 복사를 생성하지 않음을 이해하는 것이 중요합니다
// console.log(bae, personData);
//
// const maxIndex = personData.findIndex((person) => {
//   return person.name === 'Max';
// });
// console.log(maxIndex);
//
// const arr = [1, 2, 3];
// console.log(arr.includes(3));

// const arr = [1, 2, 3, 4, 5];
// const tax = 0.19;
// const taxArr = [];
//
// arr.forEach((price, idx, arr) => {
//   const taxObject = { idx: idx, taxValue: price * (1 + tax) };
//   taxArr.push(taxObject);
// });
//
// console.log(taxArr);

// const arr = [1, 2, 3, 4, 5];
// const tax = 0.19;
//
// const taxArr = arr.map((price, idx, arr) => {
//   return { idx: idx, taxValue: price * (1 + tax) };
// });
//
// console.log(arr);
// console.log(taxArr);

// const arr = [10, 5, 3, 2, 7];
// console.log(arr.sort());
//
// const sortArr = arr.sort((a, b) => {
//   // if (a > b) {
//   //   return 1;
//   // } else if (a === b) {
//   //   return 0;
//   // } else {
//   //   return -1;
//   // }
//   return a - b;
// });
//
// console.log(sortArr);
// console.log(arr);
// console.log(arr.reverse());

// const arr = [10, 5, 3, 2, 7];
//
// const filtered = arr.filter((number, idx, arr) => {
//   return number > 4;
// });
// const filtered2 = arr.filter((n) => n > 4);
// console.log(filtered);
// console.log(filtered2);

// const arr = [10, 5, 3, 2, 7];
//
// const sum = arr.reduce((prevValue, curValue, idx, arr) => {
//   return prevValue + curValue;
// }, 0);
// const sum2 = arr.reduce((prevValue, curValue) => prevValue + curValue, 0);
// console.log(sum);
// console.log(sum2);

// const data = 'Bae;Young;Hyun;good;5';
// const transformed = data.split(';');
// transformed[transformed.length - 1] = +transformed[transformed.length - 1];
// console.log(transformed);
//
// const nameFragments = ['Max', 'Paul'];
// const name = nameFragments.join(' ');
// console.log(name);

// const person = [
//   { name: 'Max', age: 30 },
//   { name: 'Bae', age: 28 },
// ];
// const copiedPerson = person.map((person) => ({
//   name: person.name,
//   age: person.age,
// }));
//
// person[0].age = 19;
// person.push({ name: 'Anna', age: 25 });
// console.log(person);
// console.log(copiedPerson);

const nameData = ['Max', 'Bae', 30, 'Mr'];
const [firstName, secondName, ...otherData] = nameData;

console.log(firstName);
console.log(secondName);
console.log(otherData);
