const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

let isFirstMove = true;
function moveNoButton() {
  const container = document.querySelector('.container');
  const btnRect = noBtn.getBoundingClientRect();
  const yesRect = yesBtn.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const padding = 12;
  const maxX = containerRect.width - btnRect.width - padding * 2;
  const maxY = containerRect.height - btnRect.height - padding * 2;
  let newX = Math.random() * maxX + padding;
  let newY = Math.random() * maxY + padding;

  // Clamp to ensure the button never leaves the visible area
  newX = Math.max(padding, Math.min(newX, containerRect.width - btnRect.width - padding));
  newY = Math.max(padding, Math.min(newY, containerRect.height - btnRect.height - padding));

  if (isFirstMove) {
    // Switch both buttons to absolute positioning, but keep Yes in place
    const buttonsRect = noBtn.parentElement.getBoundingClientRect();
    // Yes button
    yesBtn.style.position = 'absolute';
    yesBtn.style.left = (yesRect.left - buttonsRect.left) + 'px';
    yesBtn.style.top = (yesRect.top - buttonsRect.top) + 'px';
    // No button
    noBtn.style.position = 'absolute';
    noBtn.style.left = (btnRect.left - buttonsRect.left) + 'px';
    noBtn.style.top = (btnRect.top - buttonsRect.top) + 'px';
    isFirstMove = false;
  }

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
  noBtn.style.transform = 'translate(0, 0)';
}

noBtn.addEventListener('mouseenter', moveNoButton);
// Touch support for mobile
noBtn.addEventListener('touchstart', function(e) {
  e.preventDefault();
  moveNoButton();
}, {passive: false});

yesBtn.addEventListener('click', () => {
  document.querySelector('.container').innerHTML = `
    <h1>Yay!</h1>
    <p style="font-size:1.3rem;margin:24px 0 8px 0;">I love you so much</p>
    <p style="font-size:1.1rem;color:#e75480;opacity:0.85;">Today, tomorrow, forever.</p>
  `;
});
