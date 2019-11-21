
import createCard from './lib/cards';

// Fetches lectures.json asynchronously from root of project
async function getLectures() {
  const response = await fetch('lectures.json');
  const data = await response.json();

  return data.lectures;
}

async function init() {
  // Get lectures as an array
  const lectures = await getLectures();
  const cards = document.querySelector('.cards');

  // Loop through all the lectures
  for (let i = 0; i < lectures.length; i += 1) {
    const lecture = lectures[i];
    // Create html card chunk for each lecture
    const card = createCard(lecture);
    // Append the card to cards elememnt
    cards.appendChild(card);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  init();
});
