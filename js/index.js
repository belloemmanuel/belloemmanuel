document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let image = document.getElementById('#rocketpicture');
    let left = e.offsetX;
    let top = e.offsetY;
    image.style.left = left + 'px';
    image.style.top = top + 'px';
  });