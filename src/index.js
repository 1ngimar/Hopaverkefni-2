
import { createListItem } from './lib/helpers';

// Fetches lectures.json asynchronously from root of project
async function getLectures() {
  const response = await fetch('lectures.json');
  const data = await response.json();

  return data.lectures;
}

async function init() {
  // Get lectures as an array
  const lectures = await getLectures();

  // Loop through all the lectures
  for (let i = 0; i < lectures.length; i += 1) {
    const lecture = lectures[i];
    // Create html chunk for each lecture
    const listItemHtml = createListItem(lecture);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  init();
});
