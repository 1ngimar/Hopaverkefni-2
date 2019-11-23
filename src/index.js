
import createCard, {createCards} from './lib/cards';
import { getLectures, filterLectures } from './lib/helpers';

async function init() {
  // Get lectures as an array
  const lectures = await getLectures();
  const cards = document.querySelector('.cards');
  let htmlButton = false;
  let cssButton = false;
  let jsButton = false;

  //  Checks if user is on front page or lecture page
  if (cards) {
    createCards(lectures, cards);

    const buttons = document.querySelectorAll('.navBar__button');

    const setButtonsState = (e) => {
      const type = e.target.innerHTML;
      const activeClass = 'navBar__button--active';
      const el = e.target;

      if (type === 'HTML') {
        if (el.classList.contains(activeClass)) {
          el.classList.remove(activeClass);
          htmlButton = false;
        } else {
          htmlButton = true;
          el.classList.add(activeClass);
        }
      }

      if (type === 'CSS') {
        if (el.classList.contains(activeClass)) {
          el.classList.remove(activeClass);
          cssButton = false;
        } else {
          cssButton = true;
          el.classList.add(activeClass);
        }
      }

      if (type === 'JavaScript') {
        if (el.classList.contains(activeClass)) {
          el.classList.remove(activeClass);
          jsButton = false;
        } else {
          jsButton = true;
          el.classList.add(activeClass);
        }
      }
      const isUnfiltered = !htmlButton && !cssButton && !jsButton;

      if (isUnfiltered) {
        createCards(lectures, cards);
      } else {
        const filteredLectures = filterLectures(lectures, htmlButton, cssButton, jsButton);
        createCards(filteredLectures, cards);
      }
    };

    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener('click', setButtonsState);
    }
  } else {
    const url = window.location.search;
    const idx = url.indexOf('=');
    const slug = url.substring(idx + 1, url.length);

    for (let i = 0; i < lectures.length; i += 1) {
      const lecture = lectures[i];

      if (lecture.slug === slug) {
        // create lecture html page

      }
    }
  }
}


document.addEventListener('DOMContentLoaded', () => {
  init();
});
