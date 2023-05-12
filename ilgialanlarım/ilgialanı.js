var photoContainer = document.querySelector('.photo-container');
var overlayText = document.querySelector('.overlay-text');

photoContainer.addEventListener('click', function() {
  overlayText.style.opacity = '1';
});
