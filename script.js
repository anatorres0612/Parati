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
    "🌞 Holi te amo mucho, no lo olvides",
    "🌞 Espero que estés bien.",
    "🌞 Ojalá podamos vernos pronto.",
    "🌞 Sigues en mi mente.",
    "🌤️ Ya es tarde, espero que tu día haya ido bien.",
    "🌤️ Esta hora me recuerda que quiero verte.",
    "🌤️ Pronto estaremos juntas.",
    "🌤️ Disfruta la tarde, yo pienso en ti.",
    "🌅 El atardecer es lindo cuando pienso en ti.",
    "🌅 La noche se acerca, te mando un abrazo.",
    "🌙 La noche llegó, te extraño.",
    "🌙 Buenas noches, que descanses bien."
];

// Elementos de la cata digital con mensajes personalizados
const tastingItems = [
    {
        emoji: '😊',
        text: 'Felicidad',
        messages: [
            'Tu sonrisa ilumina mis días',
            'Eres una de mis mayores alegrías',
            'A tu lado todo se siente más bonito',
            'Mi corazón se calma cuando estás conmigo',
            'Gracias por existir en mi vida'
        ]
    },
    { 
        emoji: '💕', 
        text: 'Amor',
        messages: [
            'Te quiero más de lo que puedo decir',
            'Mi corazón siempre te elige',
            'Elegirte cada día me nace del alma',
            'Eres un lugar seguro para mí',
            'Cada día me enamoro un poquito más'
        ]
    },
    { 
        emoji: '🌟', 
        text: 'Especial',
        messages: [
            'Tienes una luz que no se parece a ninguna otra',
            'Tu forma de ser me encanta',
            'Contigo puedo ser yo misma',
            'Eres alguien muy valiosa para mí',
            'Tu presencia hace todo más especial'
        ]
    },
    { 
        emoji: '🎉', 
        text: 'Alegría',
        messages: [
            'A tu lado siempre encuentro motivos para sonreír',
            'Tu compañía hace los días más lindos',
            'Eres mi mejor plan',
            'Me encanta compartir momentos contigo',
            'La vida contigo sabe mejor'
        ]
    },
    { 
        emoji: '🔥', 
        text: 'Pasión',
        messages: [
            'Tu mirada sabe exactamente lo que me provoca',
            'Contigo la chispa se vuelve fuego… y me encanta',
            'Me atraes de una forma que no intento controlar',
            'Hay algo en ti que despierta mis ganas',
            'Estar cerca de ti me desarma por completo'
        ]
    },
    { 
        emoji: '✨', 
        text: 'Magia',
        messages: [
            'A tu lado todo se siente natural y real',
            'Hay algo en ti que me atrapa sin razón',
            'Tu presencia cambia mi energía',
            'Tienes una forma muy tuya de brillar',
            'Estar contigo siempre se siente especial'
        ]
    },
    { 
        emoji: '🌹', 
        text: 'Romance',
        messages: [
            'Eres mi lugar favorito',
            'Me gusta imaginar la vida contigo',
            'Nuestros momentos tienen algo especial',
            'Tu sonrisa es mi debilidad',
            'Pensar en ti me hace sonreír'
        ]
    },
    { 
        emoji: '💫', 
        text: 'Sueños',
        messages: [
            'Me ilusiona pensar en nosotras',
            'Eres parte de lo que quiero construir',
            'Sueño cosas lindas a tu lado',
            'Imaginar el futuro contigo me hace feliz',
            'Juntas podemos crear algo hermoso'
        ]
    }
]


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