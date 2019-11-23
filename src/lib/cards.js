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

export function createCards(lectures, cards) {
  // eslint-disable-next-line no-param-reassign
  cards.innerHTML = '';
  // Loop through all the lectures
  for (let i = 0; i < lectures.length; i += 1) {
    const lecture = lectures[i];
    // Create html card chunk for each lecture
    const card = createCard(lecture);
    // Append the card to cards elememnt
    cards.appendChild(card);
  }
}

export default createCard;
