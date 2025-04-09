  const carousel = document.querySelector('.carousel');
  let isDragging = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.classList.add('dragging');
  });

  carousel.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      carousel.classList.remove('dragging');
      snapToClosestImage();
    }
  });

  carousel.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      carousel.classList.remove('dragging');
      snapToClosestImage();
    }
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 0.5; // Adjust the multiplier to slow down the drag speed
    carousel.scrollLeft = scrollLeft - walk;
  });

  // For touch events on mobile
  carousel.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.classList.add('dragging');
  });

  carousel.addEventListener('touchend', () => {
    if (isDragging) {
      isDragging = false;
      carousel.classList.remove('dragging');
      snapToClosestImage();
    }
  });

  carousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 0.5;
    carousel.scrollLeft = scrollLeft - walk;
  });

  function snapToClosestImage() {
    const images = carousel.querySelectorAll('img');
    const imageWidth = images[0].clientWidth + parseInt(getComputedStyle(images[0]).marginLeft);
    const scrollLeft = carousel.scrollLeft;
    const index = Math.round(scrollLeft / imageWidth);
    carousel.scrollTo({
      left: index * imageWidth,
      behavior: 'smooth'
    });
  }

  // Infinite Scroll
  carousel.addEventListener('scroll', () => {
    const images = carousel.querySelectorAll('img');
    const imageWidth = images[0].clientWidth + parseInt(getComputedStyle(images[0]).marginLeft);
    const scrollWidth = carousel.scrollWidth;
    const scrollLeft = carousel.scrollLeft;
    const visibleImagesCount = Math.floor(carousel.clientWidth / imageWidth);

    if (scrollLeft + carousel.clientWidth >= scrollWidth - imageWidth) {
      for (let i = 0; i < visibleImagesCount; i++) {
        carousel.appendChild(images[i].cloneNode(true));
      }
    }
    if (scrollLeft <= 0) {
      for (let i = images.length - visibleImagesCount; i < images.length; i++) {
        carousel.prepend(images[i].cloneNode(true));
      }
      carousel.scrollLeft = imageWidth * visibleImagesCount;
    }
  });

  document.getElementById('btnContact').addEventListener('click', function() {
    // Ajoutez la classe de fondu
    document.body.classList.add('fade-out');

    // Attendez un court instant avant de rediriger pour permettre à l'effet de fondu de se dérouler
    setTimeout(function() {
        // Rediriger vers la page TestSite.html
        window.location.href = 'contact.html';
    }, 500); // Temps correspondant à la durée de l'effet de fondu en millisecondes
});