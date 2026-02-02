// Mensajes por cada hora del día (0-23)
const hourlyMessages = [
    "🌙 Buenas noches, que descanses bien.",
    "🌙 Espero hayas tenido un buen día.",
    "🌙 Duérmete pensando en algo bonito.",
    "🌙 A esta hora solo pienso en ti.",
    "🌙 Que descanses, te veo en los sueños.",
    "🌅 Buenos días, que tengas un lindo día.",
    "🌅 Hoy será un buen día para nosotras.",
    "☀️ Cada mañana es un nuevo comienzo contigo.",
    "☀️ Buenos días, espero que hayas dormido bien.",
    "☀️ Levántate, el día nos espera.",
    "☀️ Desayunaste bien? Que disfrutes el día.",
    "☀️ Hoy es un día más juntas.",
    "🌞 Hola, ¿cómo va tu día?",
    "🌞 Espero que estés bien.",
    "🌞 Falta poco para verte.",
    "🌞 Sigues en mi mente.",
    "🌤️ Ya es tarde, ¿cómo te fue?",
    "🌤️ Esta hora me recuerda que quiero verte.",
    "🌤️ Pronto estaremos juntas.",
    "🌤️ Disfruta la tarde, yo pienso en ti.",
    "🌅 El atardecer es lindo cuando pienso en ti.",
    "🌅 Casi llego la noche, casi te veo.",
    "🌙 La noche llegó, te extraño.",
    "🌙 Buenas noches, que descanses bien."
];

// Elementos de la cata digital con mensajes personalizados
const tastingItems = [
    { 
        emoji: '😊', 
        text: 'Felicidad',
        messages: [
            'Tu sonrisa me hace sonreír',
            'Eres mi razón para estar feliz',
            'Contigo los días son mejores',
            'Me haces muy feliz',
            'Gracias por estar aquí'
        ]
    },
    { 
        emoji: '💕', 
        text: 'Amor',
        messages: [
            'Te quiero mucho',
            'Mi corazón es tuyo',
            'Te amo',
            'Eres importante para mí',
            'Cada día te quiero más'
        ]
    },
    { 
        emoji: '🌟', 
        text: 'Especial',
        messages: [
            'Eres especial para mí',
            'Tu presencia significa mucho',
            'Contigo me siento bien',
            'Eres importante en mi vida',
            'Cada momento contigo es valioso'
        ]
    },
    { 
        emoji: '🎉', 
        text: 'Alegría',
        messages: [
            'Contigo todo es más divertido',
            'Me das muchas alegrias',
            'Eres mi compañera favorita',
            'Me haces reír mucho',
            'Los días contigo son especiales'
        ]
    },
    { 
        emoji: '🔥', 
        text: 'Pasión',
        messages: [
            'Me atraes mucho',
            'Contigo siento mariposas',
            'Me encanta verte',
            'Deseo estar contigo',
            'Tu energía me atrae'
        ]
    },
    { 
        emoji: '✨', 
        text: 'Magia',
        messages: [
            'Hay algo especial en ti',
            'Me atraes de muchas formas',
            'Eres fascinante',
            'Tu esencia es hermosa',
            'Contigo todo brilla más'
        ]
    },
    { 
        emoji: '🌹', 
        text: 'Romance',
        messages: [
            'Eres mi persona favorita',
            'Contigo es perfecto',
            'Nuestros momentos son lindos',
            'Eres hermosa',
            'Te veo y sonrío'
        ]
    },
    { 
        emoji: '💫', 
        text: 'Sueños',
        messages: [
            'Contigo se cumplen cosas bonitas',
            'Eres parte de mis planes',
            'Deseo un futuro contigo',
            'Me haces feliz pensando en nosotras',
            'Juntas podemos lograr mucho'
        ]
    }
];

// Fotos de la galería (archivos locales en /images)
const galleryPhotos = [
    'images/foto1 (1).jpeg',
    'images/foto1 (2).jpeg',
    'images/foto1 (3).jpeg',
    'images/foto1 (4).jpeg',
    'images/foto1 (5).jpeg',
    'images/foto1 (6).jpeg',
    'images/foto1 (7).jpeg',
    'images/foto1 (8).jpeg',
    'images/foto1 (9).jpeg',
    'images/foto1 (10).jpeg'
];

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeGallery();
    initializeTasting();
    initializeMessageModal();
    updateDailyMessage();
    updateTime();
    setInterval(updateTime, 1000);
});

// Navegación entre secciones
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');

            // Quitar clase active de todos los links y secciones
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Agregar clase active al link y sección clickeado
            link.classList.add('active');
            document.getElementById(sectionId).classList.add('active');
        });
    });
}

// Actualizar hora en tiempo real
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    
    document.getElementById('timeDisplay').textContent = timeString;
}

// Actualizar mensaje diario según la hora
function updateDailyMessage() {
    const now = new Date();
    const hour = now.getHours();
    const message = hourlyMessages[hour];
    
    document.getElementById('dailyMessage').textContent = message;
    document.getElementById('messageTime').textContent = `Mensaje a las ${String(hour).padStart(2, '0')}:00`;
}

// Inicializar galería
function initializeGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const photoModal = document.getElementById('photoModal');
    const modalPhoto = document.getElementById('modalPhoto');
    const closeModal = document.querySelector('.close-modal');

    galleryPhotos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        // Asignar tamaños alternados para efecto collage
        const sizeClass = (index % 7 === 0) ? 'large' : (index % 3 === 0) ? 'medium' : 'small';
        item.classList.add(sizeClass);

        // Rotaciones variadas para estética
        const rotateClass = 'rotate-' + (index % 5 + 1);
        item.classList.add(rotateClass);

        // Contenedor para controlar transformaciones
        item.innerHTML = `
            <div class="photo-wrap">
                <img src="${photo}" alt="Recuerdo ${index + 1}">
            </div>
        `;

        item.addEventListener('click', () => {
            modalPhoto.src = photo;
            photoModal.classList.remove('hidden');
        });

        galleryGrid.appendChild(item);
    });

    // Cerrar modal
    closeModal.addEventListener('click', () => {
        photoModal.classList.add('hidden');
    });

    photoModal.addEventListener('click', (e) => {
        if (e.target === photoModal) {
            photoModal.classList.add('hidden');
        }
    });
}

// Abrir modal de cartita
function openMessageModal(message) {
    const messageModal = document.getElementById('messageModal');
    const cardMessage = document.getElementById('cardMessage');
    
    cardMessage.textContent = message;
    messageModal.classList.remove('hidden');
}

// Cerrar modal de cartita
function closeMessageModal() {
    const messageModal = document.getElementById('messageModal');
    messageModal.classList.add('hidden');
}

// Inicializar event listeners del modal
function initializeMessageModal() {
    const messageModal = document.getElementById('messageModal');
    const modalOverlay = messageModal.querySelector('.modal-overlay');
    
    // Cerrar modal cuando se hace clic en el overlay
    modalOverlay.addEventListener('click', closeMessageModal);
}

// Inicializar cata digital
function initializeTasting() {
    const tastingGrid = document.getElementById('tastingGrid');

    tastingItems.forEach(item => {
        const tastingElement = document.createElement('div');
        tastingElement.className = 'tasting-item';
        tastingElement.style.position = 'relative';
        
        // Guardar índice del mensaje actual para cada item
        let currentMessageIndex = 0;
        
        tastingElement.innerHTML = `
            <div class="tasting-item-icon">${item.emoji}</div>
            <div class="tasting-item-text">${item.text}</div>
        `;

        tastingElement.addEventListener('click', () => {
            // Mostrar mensaje actual
            const message = item.messages[currentMessageIndex];
            
            // Abrir modal de cartita
            openMessageModal(message);

            // Pasar al siguiente mensaje sin repetir
            currentMessageIndex = (currentMessageIndex + 1) % item.messages.length;
        });

        tastingGrid.appendChild(tastingElement);
    });
}