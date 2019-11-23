
import createCard from './lib/cards';
import { getLectures } from './lib/helpers';

async function init() {
  // Get lectures as an array
  const lectures = await getLectures();
  const cards = document.querySelector('.cards');

  if (cards) {
    // Loop through all the lectures
    for (let i = 0; i < lectures.length; i += 1) {
      const lecture = lectures[i];
      // Create html card chunk for each lecture
      const card = createCard(lecture);
      // Append the card to cards elememnt
      cards.appendChild(card);
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
