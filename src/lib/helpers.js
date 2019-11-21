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
