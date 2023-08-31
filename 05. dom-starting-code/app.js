const h1 = document.getElementById('main-title');
h1.textContent = 'Some new Title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' LOVE';

const body = document.body;
console.dir(body);

// const listElements = document.querySelectorAll('li');
const listElements = document.getElementsByTagName('li');

for (const listItem of listElements) {
  console.dir(listItem);
}

const section = document.querySelector('section');
const button = document.querySelector('button');
// section.className = '';

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }
  section.classList.toggle('invisible');
});
