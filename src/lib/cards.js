import { createElement } from './helpers';

function createCard(lecture) {
  const href = `./fyrirlestur.html?slug=${lecture.slug}`;
  const card = createElement('a', 'card', null, 'href', href);
  let thumbnail = null;

  if (lecture.thumbnail) {
    thumbnail = createElement('img', 'card__img', null, 'src', `./${lecture.thumbnail}`);
  } else {
    thumbnail = createElement('div', 'card__placeholder');
  }

  const cardBottom = createElement('div', 'card__bottom');
  const cardCategory = createElement('span', 'card__category', lecture.category);
  const cardTitle = createElement('h1', 'card__title', lecture.title);
  // á eftir að búa til breytu fyrir checkmarkið
  cardBottom.appendChild(cardCategory);
  cardBottom.appendChild(cardTitle);
  card.appendChild(thumbnail);
  card.appendChild(cardBottom);

  return card;
}

export default createCard;
