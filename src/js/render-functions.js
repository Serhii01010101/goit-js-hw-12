
function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
        <div class="thumb">
            <a class="gallery-link" href="${largeImageURL}">
              <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
              />
            </a>
              <ul class="description-list">
                <li class="description-items"><span class="accent">Likes </span>${likes}</li>
                <li class="description-items"><span class="accent">Views </span>${views}</li>
                <li class="description-items"><span class="accent">Comments </span>${comments}</li>
                <li class="description-items"><span class="accent">Downloads </span>${downloads}</li>
              </ul>
        </div>
      </li>`
    )
    .join('');
}


export { createMarkup };
