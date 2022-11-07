const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulEL = document.querySelector('.gallery');

const createGalleryElement = ({ url, alt } = {}) => {
  return `<li class="gallery-item"><img src="${url}" alt="${alt}" width = 400" height =300 ></li>`;
};

const galleryItemEl = images.map(el => {
  return createGalleryElement(el);
});
ulEL.style.listStyle = 'none';
ulEL.style.display = 'flex';
ulEL.style.flexWrap = 'wrap';
ulEL.style.gap = '10px';

ulEL.insertAdjacentHTML('beforeend', galleryItemEl.join(''));

const liEl = document.querySelectorAll('.gallery-item');
