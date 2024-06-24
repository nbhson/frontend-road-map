let lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  const translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  const bg = document.querySelector('.bg');
  bg.style.transform = translate;
  bg.style.webkitTransform = translate;
  bg.style.mozTransform = translate;

  window.requestAnimationFrame(moveBackground);
}

window.addEventListener('mousemove', function(e) {
  const lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
  const lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;
});

window.addEventListener('click', function(e) {
  const lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
  const lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;
});

moveBackground();
