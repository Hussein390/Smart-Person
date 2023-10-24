const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const button = document.querySelector('.search-form button');
const resultss = document.querySelector('.search-result');
const more = document.querySelector('.more');

// ttIwI7VsMuIMdLHg5Jv3x3S0IyfM7w_o_wr0LXSvxYo
let accessKey =  'ttIwI7VsMuIMdLHg5Jv3x3S0IyfM7w_o_wr0LXSvxYo'
let keyword = '';
let page = 1;

async function searchImage() {
  keyword = input.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    resultss.innerHTML = '';
  }

  const result = data.results;

  result.map(reslut => {
    const img = document.createElement('img');
    img.src = reslut.urls.small;
    const imgLink = document.createElement('a');
    imgLink.href = reslut.links.html;
    imgLink.target = '_blank';

    imgLink.appendChild(img)
    resultss.appendChild(imgLink);
  })
  more.style.display = 'flex';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
})

more.addEventListener('click', () => {
  page++;
  searchImage();
})