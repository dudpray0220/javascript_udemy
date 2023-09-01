const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
const cancelAddMovieModal = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieModal = cancelAddMovieModal.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entrySection = document.getElementById('entry-text');
const deleteModal = document.getElementById('delete-modal');
const movies = [];

const updateUi = () => {
  if (movies.length === 0) {
    entrySection.style.display = 'block';
  } else {
    entrySection.style.display = 'none';
  }
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);
  closeMovieDeletionModal();
  updateUi();
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteModal.classList.remove('visible');
};

const startDeleteMovieHandler = (movieId) => {
  deleteModal.classList.add('visible');
  toggleBackdrop();
  const cancelDeletionButton = deleteModal.querySelector('.btn--passive');
  let confirmDeletionButton = deleteModal.querySelector('.btn--danger');

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteModal.querySelector('.btn--danger');

  cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);

  cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId),
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
  `;

  const listRoot = document.getElementById('movie-list');
  newMovieElement.addEventListener(
    'click',
    startDeleteMovieHandler.bind(null, id),
  );
  listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};
const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const input of userInputs) {
    input.value = '';
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imgValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imgValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('유효한 값을 입력해주세요 (rating 값은 1 ~ 5 사이)');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imgValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  toggleBackdrop();
  closeMovieModal();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating,
  );
  updateUi();
};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieModal.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieModal.addEventListener('click', addMovieHandler);
