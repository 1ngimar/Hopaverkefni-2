
import { createCards } from './lib/cards';
import { getLectures, filterLectures, createElement } from './lib/helpers';
import createLecture from './lib/lecture';

async function init() {
  // Get lectures as an array
  const lectures = await getLectures();
  const cards = document.querySelector('.cards');
  const isFrontPage = document.querySelector('.isFrontpage');
  let htmlButton = false;
  let cssButton = false;
  let jsButton = false;
  let finishedLectures = localStorage.getItem('finishedLectures');

  if (finishedLectures) {
    finishedLectures = JSON.parse(finishedLectures);
  }

  //  Checks if user is on front page or lecture page
  if (isFrontPage) {
    // Create all cards
    createCards(lectures, cards, finishedLectures);
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
        createCards(lectures, cards, finishedLectures);
      } else {
        const filteredLectures = filterLectures(lectures, htmlButton, cssButton, jsButton);
        createCards(filteredLectures, cards, finishedLectures);
      }
    };

    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener('click', setButtonsState);
    }
  } else {
    // This code is on the lecture page
    const url = window.location.search;
    const idx = url.indexOf('=');
    const slug = url.substring(idx + 1, url.length);
    const lectureButton = document.querySelector('.lecture__button');
    let lecture = null;

    for (let i = 0; i < lectures.length; i += 1) {
      const currentLecture = lectures[i];

      if (currentLecture.slug === slug) {
        lecture = currentLecture;
        // create lecture html page
        createLecture(currentLecture);
      }
    }

    lectureButton.addEventListener('click', (e) => {
      const buttonElement = e.target;
      // Changing button inner text
      buttonElement.innerHTML = 'Fyrirlestur kláraður';
      // Add active class to button
      buttonElement.classList.add('lecture__button--active');
      // create checkmark element
      const checkmarkElement = createElement('span', 'lecture__checkmark', '&#10003;');
      // Insert checkmark element as first child in button element
      buttonElement.insertBefore(checkmarkElement, buttonElement.childNodes[0]);

      // Get finishedLectures from localStorage
      const cachedLectured = localStorage.getItem('finishedLectures');
      let slugsArray = [];

      if (finishedLectures) {
        const parsedArr = JSON.parse(cachedLectured);
        // Merge arrays
        slugsArray = slugsArray.concat(parsedArr);
      }

      // Add new slug to existing slugs array
      slugsArray.push(lecture.slug);
      // Save updated or new slugs array to localStorage
      localStorage.setItem('finishedLectures', JSON.stringify(slugsArray));
    });
  }
}

/* þarf að gera svona element <div class="thumbnail__checkmark">✔</div>
inn í card.bottom */


document.addEventListener('DOMContentLoaded', () => {
  init();
});
