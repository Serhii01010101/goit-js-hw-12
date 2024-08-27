
function scrollScreen(item) {
  const galleryItemHeight = item.getBoundingClientRect().height;
  window.scrollBy({
    top: galleryItemHeight * 2,
    behavior: 'smooth',
  });
}

export { scrollScreen };
