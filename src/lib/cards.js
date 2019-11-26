import { createElement } from './helpers';

function createCard(lecture, finishedLecture) {
  const href = `./fyrirlestur.html?slug=${lecture.slug}`;
  const card = createElement('a', 'card', null, 'href', href);

  let thumbnail = null;

  if (lecture.thumbnail) {
    thumbnail = createElement('img', 'card__img', null, 'src', `./${lecture.thumbnail}`);
  } else {
    thumbnail = createElement('div', 'card__placeholder');
  }

  const cardBottom = createElement('div', 'card__bottom');
  const cardBottomTextContainer = createElement('div', 'card__bottom__text__container');
  const cardCategory = createElement('span', 'card__category', lecture.category);
  const cardTitle = createElement('h1', 'card__title', lecture.title);
  cardBottomTextContainer.appendChild(cardCategory);
  cardBottomTextContainer.appendChild(cardTitle);
  cardBottom.appendChild(cardBottomTextContainer);

  // Add checkmark if lecture is finished
  if (finishedLecture) {
    const checkmark = createElement('span', 'card__checkmark', '&#10003;');
    cardBottom.appendChild(checkmark);
  }

  card.appendChild(thumbnail);
  card.appendChild(cardBottom);

  return card;
}

export function createCards(lectures, cards, finishedLectures) {
  // eslint-disable-next-line no-param-reassign
  cards.innerHTML = '';
  // Loop through all the lectures
  for (let i = 0; i < lectures.length; i += 1) {
    const lecture = lectures[i];
    let finishedLecture = false;

    if (finishedLectures && finishedLectures.length > 0
      && finishedLectures.indexOf(lecture.slug) !== -1) {
      finishedLecture = true;
    }

    // Create html card chunk for each lecture
    const card = createCard(lecture, finishedLecture);
    // Append the card to cards elememnt
    cards.appendChild(card);
  }
}

export default createCard;
