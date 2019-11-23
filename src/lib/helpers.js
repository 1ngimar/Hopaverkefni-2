export default function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function createElement(tagName, className, value, attrName, attrValue) {
  const element = document.createElement(tagName);

  if (className) {
    element.classList.add(className);
  }

  if (value) {
    element.innerHTML = value;
  }

  if (attrName && attrValue) {
    element.setAttribute(attrName, attrValue);
  }

  return element;
}

// Fetches lectures.json asynchronously from root of project
export async function getLectures() {
  const response = await fetch('lectures.json');
  const data = await response.json();

  return data.lectures;
}

export function filterLectures(lectures, html, css, js) {
  const filtLectArray = [];

  for (let i = 0; i < lectures.length; i += 1) {
    const lecture = lectures[i];

    if ((lecture.category.toLowerCase() === 'html' && html)
        || (lecture.category.toLowerCase() === 'css' && css)
        || (lecture.category.toLowerCase() === 'javascript' && js)) {
      filtLectArray.push(lecture);
    }
  }

  return filtLectArray;
}
