const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

noBtn.addEventListener('mouseenter', () => {
  const buttons = document.querySelector('.buttons');
  const btnRect = noBtn.getBoundingClientRect();
  const containerRect = buttons.getBoundingClientRect();
  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;
  let newX = Math.random() * maxX;
  let newY = Math.random() * maxY;
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener('click', () => {
  document.querySelector('.container').innerHTML = '<h1>Yay! 💖</h1><p>You made my day!</p>';
});
