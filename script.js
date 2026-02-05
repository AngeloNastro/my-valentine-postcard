let isMoving = false;

const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

const noMessages = [
  'No', 'Nope', 'Nahh', 'Sorry', 'Non oggi', 'Riprova!', 'Daiii!', 
  'Si..mmm NO', 'muahahah', 'uffa no!', 'Prova ancora!', 
  'Non ci penso proprio!', 'Assolutamente no!', 'Impossibile!', 
  'Niente da fare!', 'Neanche per sogno!', 'Non se ne parla!', 'Sogna!', 
  'Naaaah!', 'Non ora!', 'Magari un\'altra volta!', 'Non ci sto!', 
  'Niente affatto!', 'Neanche per idea!', 'Non è possibile!', 
  'Assolutamente nooo!', 'Non ci penso nemmeno!', 'Proprio no!', 
  'Niente da fareee!', 'Neanche per sognooo!', 'Impossibileee!', 
  'Riprova ancora!', 'Dai, riprova!', 'Uffa, nooo!', 'Non oggiii!'
];
let noMsgIndex = 0;

function cycleNoMessage() {
  noMsgIndex = (noMsgIndex + 1) % noMessages.length;
  noBtn.textContent = noMessages[noMsgIndex];
}

function moveNoButton() {
  if (isMoving) return;
  isMoving = true;

  const btnRect = noBtn.getBoundingClientRect();
  const container = document.querySelector('.container');
  const containerRect = container.getBoundingClientRect();
  
  const padding = 12;
  const btnWidth = btnRect.width;
  const btnHeight = btnRect.height;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Calculate bounds relative to container
  const minX = Math.max(padding, -containerRect.left);
  const minY = Math.max(padding, -containerRect.top);
  const maxX = Math.min(
    containerRect.width - btnWidth - padding,
    viewportWidth - btnWidth - containerRect.left - padding
  );
  const maxY = Math.min(
    containerRect.height - btnHeight - padding,
    viewportHeight - btnHeight - containerRect.top - padding
  );

  const newX = Math.max(minX, Math.min(Math.random() * (maxX - minX) + minX, maxX));
  const newY = Math.max(minY, Math.min(Math.random() * (maxY - minY) + minY, maxY));

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
  noBtn.style.transform = 'translate(0, 0)';

  const onMoveEnd = (e) => {
    if (e.propertyName === 'left' || e.propertyName === 'top') {
      noBtn.removeEventListener('transitionend', onMoveEnd);
      isMoving = false;
    }
  };
  
  noBtn.addEventListener('transitionend', onMoveEnd);
}

function handleNoBtn(e) {
  if (e.type === 'touchstart') e.preventDefault();
  moveNoButton();
  cycleNoMessage();
}

// Setup No button listeners based on device type
if (window.innerWidth > 480) {
  noBtn.addEventListener('mouseenter', handleNoBtn);
} else {
  noBtn.addEventListener('touchstart', handleNoBtn, { passive: false });
  noBtn.addEventListener('click', handleNoBtn);
}

function showYesMessage() {
  const yesRect = yesBtn.getBoundingClientRect();
  const x = yesRect.left + yesRect.width / 2;
  const y = yesRect.top + yesRect.height / 2;

  // Animated background overlay
  const bg = document.createElement('div');
  bg.className = 'bg-yes-animate';
  bg.style.setProperty('--yes-x', `${x}px`);
  bg.style.setProperty('--yes-y', `${y}px`);
  document.body.appendChild(bg);

  // Floating hearts
  const heartEmojis = ['💖', '💘', '💝', '💕', '💞', '💓', '💗', '💙', '💜', '💚', '❤️', '🧡', '💛'];
  for (let i = 0; i < 16; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    
    const angle = Math.random() * 2 * Math.PI;
    const radius = 40 + Math.random() * 120;
    heart.style.left = `${x + Math.cos(angle) * radius}px`;
    heart.style.top = `${y + Math.sin(angle) * radius}px`;
    heart.style.fontSize = `${1.8 + Math.random() * 1.6}rem`;
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2600);
  }
  
  setTimeout(() => bg.remove(), 1600);

  // Fade out and show success message
  const container = document.querySelector('.container');
  container.style.transition = 'opacity 0.7s cubic-bezier(.68,-0.55,.27,1.55)';
  container.style.opacity = '0';
  
  setTimeout(() => {
    container.innerHTML = `
      <h1 style="font-size:2.2rem;">Yay! 💖</h1>
      <p style="font-size:1.3rem;margin:24px 0 8px 0;">Ti amo tanto!</p>
      <p style="font-size:1.1rem;color:#e75480;opacity:0.85;">Oggi, domani, per sempre.</p>
    `;
    container.style.opacity = '1';
  }, 700);
}

let yesTriggered = false;
function yesHandler(e) {
  if (!yesTriggered) {
    yesTriggered = true;
    showYesMessage();
    setTimeout(() => { yesTriggered = false; }, 400);
  }
}

yesBtn.addEventListener('pointerup', yesHandler);
yesBtn.addEventListener('click', yesHandler);
