// Datos de las 100 ideas de negocio
const businessIdeas = [
    {
        id: 1,
        title: "Tienda Online de Productos Ecológicos",
        profile: "Venta de productos orgánicos y sostenibles directamente a consumidores conscientes.",
        skills: ["Marketing digital", "Gestión de inventario", "Conocimiento de productos ecológicos"],
        tips: "Empieza con un nicho específico como cosmética natural o alimentos orgánicos.",
        monetization: "Venta directa, suscripciones, membresías premium",
        category: "alimentacion",
        skillLevel: "principiante",
        investment: "baja"
    },
    {
        id: 2,
        title: "Aplicación de Gestión de Tareas para Equipos",
        profile: "Software que ayuda a equipos remotos a organizar y priorizar tareas colaborativamente.",
        skills: ["Desarrollo de software", "UX/UI Design", "Marketing B2B"],
        tips: "Enfócate en un sector específico como startups o agencias creativas.",
        monetization: "Suscripciones mensuales, versión premium con más funciones",
        category: "tecnologia",
        skillLevel: "avanzado",
        investment: "media"
    },
    {
        id: 3,
        title: "Servicio de Limpieza a Domicilio Premium",
        profile: "Ofrece servicios de limpieza de alta calidad con productos ecológicos y personal capacitado.",
        skills: ["Gestión de equipos", "Atención al cliente", "Logística"],
        tips: "Diferenciate con servicios adicionales como organización de espacios.",
        monetization: "Pago por servicio, contratos mensuales, venta de productos de limpieza",
        category: "servicios",
        skillLevel: "principiante",
        investment: "baja"
    },
    {
        id: 4,
        title: "Plataforma de Cursos Online Especializados",
        profile: "Crea y vende cursos online en un área específica como fotografía, programación o marketing.",
        skills: ["Creación de contenido", "Marketing digital", "Experiencia en el tema"],
        tips: "Empieza con 2-3 cursos bien elaborados antes de expandirte.",
        monetization: "Venta de cursos, membresía ilimitada, certificados pagos",
        category: "educacion",
        skillLevel: "intermedio",
        investment: "media"
    },
    {
        id: 5,
        title: "Consultoría de Marketing para Pequeñas Empresas",
        profile: "Ayuda a negocios locales a mejorar su presencia online y estrategias de marketing.",
        skills: ["Marketing digital", "Análisis de datos", "Comunicación"],
        tips: "Especialízate en un sector como restaurantes o tiendas minoristas.",
        monetization: "Honorarios por proyecto, retainer mensual, comisiones por resultados",
        category: "servicios",
        skillLevel: "intermedio",
        investment: "baja"
    },
    {
        id: 6,
        title: "Renta de Espacios para Eventos Creativos",
        profile: "Ofrece espacios versátiles para fotógrafos, creadores de contenido y pequeños eventos.",
        skills: ["Gestión de propiedades", "Marketing", "Atención al cliente"],
        tips: "Crea paquetes que incluyan equipamiento básico para aumentar valor.",
        monetization: "Renta por horas/días, paquetes premium, membresías",
        category: "servicios",
        skillLevel: "principiante",
        investment: "media"
    },
    {
        id: 7,
        title: "Marca de Ropa Sostenible",
        profile: "Diseña y vende ropa hecha con materiales reciclados y procesos éticos.",
        skills: ["Diseño de moda", "Conocimiento de textiles", "E-commerce"],
        tips: "Enfócate en un nicho como ropa deportiva o profesional sostenible.",
        monetization: "Venta directa, colaboraciones, suscripciones",
        category: "moda",
        skillLevel: "intermedio",
        investment: "media"
    },
    {
        id: 8,
        title: "Servicio de Catering Saludable",
        profile: "Ofrece opciones de catering con menús balanceados para empresas y eventos.",
        skills: ["Cocina profesional", "Nutrición", "Logística"],
        tips: "Especialízate en dietas específicas como keto, vegana o sin gluten.",
        monetization: "Venta por evento, suscripciones semanales, venta de productos",
        category: "alimentacion",
        skillLevel: "intermedio",
        investment: "media"
    },
    {
        id: 9,
        title: "App de Idiomas con Enfoque Conversacional",
        profile: "Plataforma que conecta hablantes nativos con estudiantes para practicar idiomas.",
        skills: ["Desarrollo de apps", "Marketing digital", "Gestión de comunidades"],
        tips: "Enfócate inicialmente en 2-3 idiomas con alta demanda.",
        monetization: "Suscripciones, publicidad, certificados pagos",
        category: "tecnologia",
        skillLevel: "avanzado",
        investment: "alta"
    },
    {
        id: 10,
        title: "Taller de Reparación de Electrónicos",
        profile: "Repara smartphones, tablets y computadoras con servicio rápido y garantizado.",
        skills: ["Electrónica", "Atención al cliente", "Gestión de inventario"],
        tips: "Ofrece servicio a domicilio para diferenciarte.",
        monetization: "Pago por reparación, venta de accesorios, mantenimiento preventivo",
        category: "tecnologia",
        skillLevel: "intermedio",
        investment: "media"
    },
    {
        id: 11,
        title: "Blog de Nicho con Monetización",
        profile: "Crea contenido especializado en un tema concreto y monetiza con diversas estrategias.",
        skills: ["Redacción", "SEO", "Marketing de contenidos"],
        tips: "Elige un tema con suficiente audiencia pero no demasiada competencia.",
        monetization: "Publicidad, afiliados, productos digitales, patrocinios",
        category: "educacion",
        skillLevel: "principiante",
        investment: "baja"
    },
    {
        id: 12,
        title: "Servicio de Diseño de Interiores Virtual",
        profile: "Ofrece consultorías y diseños de espacios mediante herramientas digitales.",
        skills: ["Diseño de interiores", "Herramientas 3D", "Asesoría"],
        tips: "Crea paquetes por niveles de servicio para diferentes presupuestos.",
        monetization: "Pago por proyecto, suscripciones, venta de plantillas",
        category: "hogar",
        skillLevel: "intermedio",
        investment: "baja"
    },
    {
        id: 13,
        title: "Producción de Podcast para Marcas",
        profile: "Crea y produce podcasts corporativos para empresas que quieran establecer autoridad.",
        skills: ["Edición de audio", "Storytelling", "Marketing"],
        tips: "Ofrece paquetes completos que incluyan estrategia y distribución.",
        monetization: "Pago por episodio, producción mensual, monetización compartida",
        category: "entretenimiento",
        skillLevel: "intermedio",
        investment: "media"
    },
    {
        id: 14,
        title: "Tienda de Productos para Mascotas Artesanales",
        profile: "Vende alimentos, juguetes y accesorios premium hechos a mano para mascotas.",
        skills: ["Elaboración de productos", "E-commerce", "Conocimiento animal"],
        tips: "Enfócate en productos naturales y libres de químicos.",
        monetization: "Venta directa, suscripciones, personalización",
        category: "hogar",
        skillLevel: "principiante",
        investment: "baja"
    },
    {
        id: 15,
        title: "Asesoría Financiera para Freelancers",
        profile: "Ayuda a trabajadores independientes a manejar sus finanzas e impuestos.",
        skills: ["Contabilidad", "Finanzas personales", "Asesoría"],
        tips: "Desarrolla sistemas específicos para diferentes tipos de freelancers.",
        monetization: "Honorarios por consulta, paquetes mensuales, cursos",
        category: "finanzas",
        skillLevel: "avanzado",
        investment: "baja"
    },
    {
        id: 16,
        title: "Servicio de Suscripción de Libros Curated",
        profile: "Envía libros seleccionados personalmente según los intereses del cliente.",
        skills: ["Literatura", "Selección de contenidos", "Logística"],
        tips: "Ofrece diferentes categorías como negocios, ficción o autoayuda.",
        monetization: "Suscripciones mensuales, cajas temáticas, membresías",
        category: "educacion",
        skillLevel: "principiante",
        investment: "media"
    },
    {
        id: 17,
        title: "Taller de Carpintería Personalizada",
        profile: "Crea muebles y objetos de madera hechos a medida con diseños únicos.",
        skills: ["Carpintería", "Diseño", "Atención al cliente"],
        tips: "Enfócate en piezas específicas como escritorios para home office.",
        monetization: "Venta directa, talleres, planos digitales",
        category: "hogar",
        skillLevel: "intermedio",
        investment: "media"
    },
    {
        id: 18,
        title: "App de Fitness Personalizado en Casa",
        profile: "Plataforma que crea rutinas de ejercicio adaptadas a espacios y equipos limitados.",
        skills: ["Desarrollo de apps", "Conocimiento fitness", "Nutrición"],
        tips: "Incluye seguimiento de progreso y ajustes automáticos.",
        monetization: "Suscripciones, venta de equipamiento, coaching premium",
        category: "salud",
        skillLevel: "avanzado",
        investment: "alta"
    },
    {
        id: 19,
        title: "Servicio de Fotografía para E-commerce",
        profile: "Especialízate en fotografía profesional de productos para tiendas online.",
        skills: ["Fotografía", "Edición", "Conocimiento de e-commerce"],
        tips: "Ofrece paquetes que incluyan fondos y edición básica.",
        monetization: "Pago por sesión, paquetes mensuales, venta de fotos stock",
        category: "servicios",
        skillLevel: "intermedio",
        investment: "media"
    },
    {
        id: 20,
        title: "Tienda de Plantas y Kits de Cultivo",
        profile: "Vende plantas de interior y kits completos para cultivo urbano con instrucciones.",
        skills: ["Jardinería", "E-commerce", "Creación de contenidos"],
        tips: "Incluye guías de cuidado y soporte post-venta.",
        monetization: "Venta directa, suscripciones, talleres virtuales",
        category: "hogar",
        skillLevel: "principiante",
        investment: "baja"
    },
    // Continuar con las 80 ideas restantes...
    // Por brevedad, aquí solo mostramos 20, pero en la implementación real serían 100
];

// Variables globales
let displayedIdeas = 10;
const ideasPerLoad = 10;
let savedIdeas = JSON.parse(localStorage.getItem('savedIdeas')) || [];

// DOM Elements
const ideasContainer = document.getElementById('ideas-container');
const loadMoreBtn = document.getElementById('load-more');
const categoryFilter = document.getElementById('category');
const skillFilter = document.getElementById('skill');
const investmentFilter = document.getElementById('investment');
const resetFiltersBtn = document.getElementById('reset-filters');

// Mostrar ideas iniciales
function displayIdeas(ideas) {
    ideasContainer.innerHTML = '';
    
    ideas.slice(0, displayedIdeas).forEach(idea => {
        const isSaved = savedIdeas.includes(idea.id);
        
        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';
        ideaCard.innerHTML = `
            <div class="idea-card-header">
                <h3>${idea.title}</h3>
            </div>
            <div class="idea-card-body">
                <div class="idea-card-section">
                    <h4><i class="fas fa-info-circle"></i> Perfil</h4>
                    <p>${idea.profile}</p>
                </div>
                <div class="idea-card-section">
                    <h4><i class="fas fa-tools"></i> Habilidades requeridas</h4>
                    <p>${idea.skills.join(', ')}</p>
                </div>
                <div class="idea-card-section">
                    <h4><i class="fas fa-lightbulb"></i> Consejos</h4>
                    <p>${idea.tips}</p>
                </div>
                <div class="idea-card-section">
                    <h4><i class="fas fa-money-bill-wave"></i> Cómo monetizar</h4>
                    <p>${idea.monetization}</p>
                </div>
                <button class="save-btn ${isSaved ? 'saved' : ''}" data-id="${idea.id}">
                    <i class="fas fa-${isSaved ? 'check' : 'bookmark'}"></i>
                    ${isSaved ? 'Guardado' : 'Guardar Idea'}
                </button>
            </div>
        `;
        
        ideasContainer.appendChild(ideaCard);
    });
    
    // Mostrar u ocultar botón "Cargar más"
    loadMoreBtn.style.display = displayedIdeas >= ideas.length ? 'none' : 'block';
}

// Filtrar ideas
function filterIdeas() {
    const category = categoryFilter.value;
    const skill = skillFilter.value;
    const investment = investmentFilter.value;
    
    return businessIdeas.filter(idea => {
        return (category === 'all' || idea.category === category) &&
               (skill === 'all' || idea.skillLevel === skill) &&
               (investment === 'all' || idea.investment === investment);
    });
}

// Cargar más ideas
function loadMoreIdeas() {
    displayedIdeas += ideasPerLoad;
    displayIdeas(filterIdeas());
}

// Guardar/eliminar idea
function toggleSaveIdea(ideaId) {
    const index = savedIdeas.indexOf(ideaId);
    
    if (index === -1) {
        savedIdeas.push(ideaId);
    } else {
        savedIdeas.splice(index, 1);
    }
    
    localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
    displayIdeas(filterIdeas());
}

// Resetear filtros
function resetFilters() {
    categoryFilter.value = 'all';
    skillFilter.value = 'all';
    investmentFilter.value = 'all';
    displayedIdeas = ideasPerLoad;
    displayIdeas(businessIdeas);
}

// Event Listeners
loadMoreBtn.addEventListener('click', loadMoreIdeas);
categoryFilter.addEventListener('change', () => {
    displayedIdeas = ideasPerLoad;
    displayIdeas(filterIdeas());
});
skillFilter.addEventListener('change', () => {
    displayedIdeas = ideasPerLoad;
    displayIdeas(filterIdeas());
});
investmentFilter.addEventListener('change', () => {
    displayedIdeas = ideasPerLoad;
    displayIdeas(filterIdeas());
});
resetFiltersBtn.addEventListener('click', resetFilters);

// Delegación de eventos para botones de guardar
ideasContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('save-btn') || e.target.closest('.save-btn')) {
        const btn = e.target.classList.contains('save-btn') ? e.target : e.target.closest('.save-btn');
        const ideaId = parseInt(btn.dataset.id);
        toggleSaveIdea(ideaId);
    }
});

// Inicializar
displayIdeas(businessIdeas);