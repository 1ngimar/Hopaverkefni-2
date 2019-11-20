export default function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function createListItem(lecture) {
  console.log('creating list item lecture', lecture);
}
