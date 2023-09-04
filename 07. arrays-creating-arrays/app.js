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

const arr = [1, 2, 3, 4, 5];
const tax = 0.19;
const taxArr = [];

arr.forEach((price, idx, arr) => {
  const taxObject = { idx: idx, taxValue: price * (1 + tax) };
  taxArr.push(taxObject);
});

console.log(taxArr);
