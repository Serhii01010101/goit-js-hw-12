import { loadMoreBtn } from './refs';

function removeLoadMoreBtn() {
  loadMoreBtn.classList.add('hidden');
}

function addLoadMoreBtn() {
  loadMoreBtn.classList.remove('hidden');
}

export { addLoadMoreBtn, removeLoadMoreBtn };
