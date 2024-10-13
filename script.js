// Selezioniamo tutti i link della navbar e le sezioni della pagina
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// Funzione per cambiare sezione
function changeSection(targetSectionId) {
    sections.forEach(section => {
        if (section.id === targetSectionId) {
            section.classList.add('active');  // Attiva la sezione scelta
            section.style.display = 'block';  // Mostra la sezione
        } else {
            section.classList.remove('active');  // Disattiva le altre sezioni
            section.style.display = 'none';      // Nasconde le altre sezioni
        }
    });
}

// Event listener per ogni link nella navbar per cambiare sezione al click
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();  // Previene l'azione predefinita del link
        const targetSection = link.getAttribute('data-target');  // Ottiene la sezione target
        changeSection(targetSection);  // Cambia la sezione
    });
});

// Mostra la sezione Home quando la pagina è caricata
document.addEventListener('DOMContentLoaded', () => {
    changeSection('home');
});

// Verifica continuamente lo stato del pulsante e lo riabilita se disabilitato
const actionBtn = document.querySelector('.actionBtn');
setInterval(() => {
    if (actionBtn.disabled || actionBtn.style.pointerEvents === 'none') {
        actionBtn.disabled = false;
        actionBtn.style.pointerEvents = 'auto';  // Rende sempre cliccabile il pulsante
        console.log('Risolto: il pulsante è stato riattivato');
    }
}, 1000);  // Controllo ogni secondo

// Mostra un popup quando il pulsante viene cliccato
actionBtn.addEventListener('click', function() {
    showPopup();
});

// Funzione per mostrare il popup
function showPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `<h2>Congratulations!</h2><p>You started your journey!</p>`;
    document.body.appendChild(popup);

    // Aggiunge la classe 'show' per far apparire il popup
    setTimeout(() => {
        popup.classList.add('show');
    }, 100);

    // Rimuove il popup dopo 3 secondi
    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.remove();
        }, 200);
    }, 2000);
}

// Effetto di luce che segue il mouse nella sezione Play
const playSection = document.querySelector('#play');

playSection.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const width = playSection.offsetWidth;
    const height = playSection.offsetHeight;
    const xMove = (offsetX / width) * 100 - 50;
    const yMove = (offsetY / height) * 100 - 50;

    // Crea un'ombra che segue il movimento del mouse
    playSection.style.boxShadow = `${xMove}px ${yMove}px 20px rgba(255, 255, 0, 0.3)`;
});

// Rimuove l'effetto di ombra quando il mouse esce dalla sezione
playSection.addEventListener('mouseleave', () => {
    playSection.style.boxShadow = 'none';
});

// Aumentiamo il numero di particelle nella sezione Profile
const profileSection = document.querySelector('#profile');

// Particelle casuali generate nella sezione Profile
for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.width = `${Math.random() * 10 + 5}px`;  // Dimensione casuale delle particelle
    particle.style.height = `${Math.random() * 10 + 5}px`;
    particle.style.animationDuration = `${Math.random() * 10 + 5}s`;  // Durata casuale dell'animazione
    profileSection.appendChild(particle);
}

// Generazione di particelle dal basso
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle-bottom');
    particle.style.bottom = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.width = `${Math.random() * 10 + 5}px`;
    particle.style.height = `${Math.random() * 10 + 5}px`;
    particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
    profileSection.appendChild(particle);
}

// Funzione per generare un colore casuale
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Cambia temporaneamente il colore delle particelle quando si clicca su Profile
profileSection.addEventListener('click', () => {
    const particles = document.querySelectorAll('.particle, .particle-bottom');
    particles.forEach(particle => {
        const originalColor = particle.style.backgroundColor;
        particle.style.backgroundColor = getRandomColor();  // Cambia colore
        setTimeout(() => {
            particle.style.backgroundColor = originalColor;  // Ritorna al colore originale
        }, 1000);
    });
});

// Cambiare il colore dell'ombra sotto il titolo nella sezione Play
const playTitle = document.querySelector('#play h1');
let currentShadowColor = 'rgba(255, 255, 0, 0.7)';  // Colore iniziale

playTitle.addEventListener('click', () => {
    currentShadowColor = getRandomColor();  // Cambia il colore dell'ombra
});

playSection.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const width = playSection.offsetWidth;
    const height = playSection.offsetHeight;
    const xMove = (offsetX / width) * 100 - 50;
    const yMove = (offsetY / height) * 100 - 50;

    // Applica un'ombra dinamica al titolo in base al mouse
    playTitle.style.boxShadow = `${xMove}px ${yMove}px 20px ${currentShadowColor}`;
});

playSection.addEventListener('mouseleave', () => {
    playTitle.style.boxShadow = 'none';
});

// Menu a tendina - Apri e chiudi
const toggleMenu = document.getElementById('toggleMenu');
const sidePanel = document.getElementById('sidePanel');
const closeButton = document.getElementById('closeButton');

// Apre la tendina quando si clicca su "OPEN"
toggleMenu.addEventListener('click', () => {
    sidePanel.style.right = '0px';
    toggleMenu.style.display = 'none';
    closeButton.style.display = 'block';
});

// Chiude la tendina quando si clicca su "CLOSE"
closeButton.addEventListener('click', () => {
    sidePanel.style.right = '-300px';
    closeButton.style.display = 'none';
    toggleMenu.style.display = 'block';
});

// Aggiungiamo effetti alle icone nel menu laterale
const starIcon = document.querySelector('.icon:nth-child(1)');
const heartIcon = document.querySelector('.icon:nth-child(2)');
const umbrellaIcon = document.querySelector('.icon:nth-child(3)');

// Funzione per creare stelle brillanti
function generateStars() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    document.body.appendChild(star);

    // Rimuove la stella dopo 3 secondi
    setTimeout(() => {
        star.remove();
    }, 3000);
}

// Funzione per cuori fluttuanti
function generateHearts() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = '0';
    document.body.appendChild(heart);

    // Rimuove il cuore dopo 5 secondi
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Funzione per creare pioggia
function generateRain() {
    for (let i = 0; i < 100; i++) {
        const drop = document.createElement('div');
        drop.classList.add('raindrop');
        drop.style.left = `${Math.random() * 100}%`;
        document.body.appendChild(drop);

        // Rimuove la goccia dopo 4 secondi
        setTimeout(() => {
            drop.remove();
        }, 4000);
    }
}

// Event listener per le icone nel menu laterale
starIcon.addEventListener('click', generateStars);
heartIcon.addEventListener('click', generateHearts);
umbrellaIcon.addEventListener('click', generateRain);

// Creazione della scena con Three.js per particelle dinamiche nella sezione Settings
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });  // Renderer con sfondo trasparente
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('settings').appendChild(renderer.domElement);

// Creiamo particelle dinamiche con Three.js
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1000;  // Numero di particelle
const posArray = new Float32Array(particlesCount * 3);  // Array per le posizioni delle particelle

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 5;  // Posizionamento casuale delle particelle
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: 0xffffff,
});

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// Posizionamento della camera
camera.position.z = 5;

// Variabili per la rotazione con il mouse
let isMouseDown = false;  // Controlla se il mouse è premuto
let mouseX = 0, mouseY = 0;  // Posizione corrente del mouse
let targetRotationX = 0;  // Rotazione obiettivo sull'asse X
let targetRotationY = 0;  // Rotazione obiettivo sull'asse Y
let rotationSpeedX = 0;  // Velocità attuale della rotazione X
let rotationSpeedY = 0;  // Velocità attuale della rotazione Y

// Eventi per controllare la rotazione con il mouse
document.addEventListener('mousedown', (event) => {
    isMouseDown = true;
    mouseX = event.clientX;
    mouseY = event.clientY;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;  // Ferma la rotazione quando il mouse viene rilasciato
});

document.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        const deltaX = event.clientX - mouseX;
        const deltaY = event.clientY - mouseY;

        // Aggiorna la rotazione in base al movimento del mouse
        targetRotationY += deltaX * 0.002;  // Sensibilità alla rotazione Y
        targetRotationX += deltaY * 0.002;  // Sensibilità alla rotazione X

        // Aggiorna le posizioni del mouse
        mouseX = event.clientX;
        mouseY = event.clientY;
    }
});

// Funzione di animazione per ruotare le particelle
function animateParticles() {
    requestAnimationFrame(animateParticles);

    // Inerzia della rotazione
    rotationSpeedX += (targetRotationX - rotationSpeedX) * 0.05;
    rotationSpeedY += (targetRotationY - rotationSpeedY) * 0.05;

    // Applica la rotazione alle particelle
    particles.rotation.x = rotationSpeedX;
    particles.rotation.y = rotationSpeedY;

    renderer.render(scene, camera);
}
animateParticles();

// Aggiorna la dimensione del renderer quando la finestra viene ridimensionata
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
