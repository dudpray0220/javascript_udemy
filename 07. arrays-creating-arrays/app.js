const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const personData = [30, 'Max', { moreData: [] }];
const numberData = [
  [1, 3],
  [-5, 3],
];

for (const data of numberData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

const hobbies = ['cooking', 'sports'];

const push = hobbies.push('reading');
const unshift = hobbies.unshift('gaming');
console.log(push, unshift, hobbies);

const pop = hobbies.pop();
const shift = hobbies.shift();
console.log(pop, shift, hobbies);

hobbies[1] = 'coding';
hobbies[5] = 'fighting';
console.log(hobbies, hobbies[4]);
