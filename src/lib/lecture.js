import { createElement } from './helpers';

function setLectureTitle(lecture) {
  const lectureTitle = document.querySelector('.lecture__title');

  if (lecture.title) {
    lectureTitle.innerHTML = lecture.title;
  }
}

function setBannerData(lecture) {
  const bannerImage = document.querySelector('.lecture__header__image');
  bannerImage.style.backgroundImage = `url('/${lecture.image}')`;

  const category = document.querySelector('.lecture__header__category');
  category.innerHTML = lecture.category;

  const title = document.querySelector('.lecture__header__title');
  title.innerHTML = lecture.title;
}

function createContent(content) {
  const container = document.querySelector('.lecture__container');

  for (let i = 0; i < content.length; i += 1) {
    const item = content[i];

    if (item.type === 'text') {
      const newLine = item.data.indexOf('\n');

      // check if newLine exists in data
      if (newLine !== -1) {
        item.data = item.data.replace(/\r?\n/g, '<br /><br />');
      }

      const textElement = createElement('p', null, item.data);
      container.appendChild(textElement);
    } else if (item.type === 'image') {
      const image = createElement('img', null, null, 'src', item.data);
      image.setAttribute('alt', item.caption);
      container.appendChild(image);
    } else if (item.type === 'youtube') {
      const iframe = createElement('iframe', 'lecture__video', null, 'src', item.data);
      container.appendChild(iframe);
    } else if (item.type === 'quote') {
      const italicElement = createElement('i', null, item.attribute);
      const quote = createElement('div', 'lecture__quote', `${item.data}<br><br>`);
      quote.appendChild(italicElement);
      container.appendChild(quote);
    } else if (item.type === 'heading') {
      const heading = createElement('h2', 'lecture__heading', item.data);
      container.appendChild(heading);
    } else if (item.type === 'list') {
      const ulElement = createElement('ul', 'lecture__list');

      for (let j = 0; j < item.data.length; j += 1) {
        const liElement = createElement('li', 'lecture__list--item', item.data[j]);
        ulElement.appendChild(liElement);
      }

      container.appendChild(ulElement);
    } else if (item.type === 'code') {
      const code = createElement('xmp', null, item.data);
      container.appendChild(code);
    }
  }
}

function createLecture(lecture) {
  setLectureTitle(lecture);
  setBannerData(lecture);
  createContent(lecture.content);
}

export default createLecture;
