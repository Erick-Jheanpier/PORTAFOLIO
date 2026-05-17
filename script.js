// ============================================
// CURSOS DATA - FILTRADOS EXACTAMENTE A LA LISTA PROPORCIONADA
// ============================================
const courses = [
    { name: "Android Studio", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", tag: "Mobile", description: "IDE oficial para desarrollo Android, emuladores, Gradle y herramientas de debugging avanzadas." },
    { name: "Vue.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", tag: "Frontend", description: "Framework progresivo de JavaScript, reactivo, componentes reutilizables y fácil de aprender." },
    { name: "POWER BI", image: "https://api.iconify.design/mdi/chart-line.svg", tag: "Data", description: "Business intelligence, visualización de datos interactiva y análisis empresarial." },
    { name: "Flutter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", tag: "Mobile", description: "Framework de Google para apps nativas multiplataforma con un solo código base." },
    { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", tag: "Database", description: "Consultas avanzadas, joins, subconsultas, optimización de queries." },
    { name: "Dart", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", tag: "Mobile", description: "Lenguaje optimizado para UI, tipado fuerte, asíncrono y base de Flutter." },
    { name: "TensorFlow", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", tag: "IA", description: "Framework de Google para deep learning, redes neuronales y computación GPU." },
    { name: "PHP", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", tag: "Backend", description: "Desarrollo backend robusto, POO, manejo de sesiones, APIs RESTful." },
    { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", tag: "Frontend", description: "Librería de Facebook para UIs interactivas, componentes, hooks y virtual DOM." },
    { name: "Oracle", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", tag: "Database", description: "Sistema de gestión de bases de datos empresarial, PL/SQL, alta disponibilidad." },
    { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", tag: "Frontend", description: "Diseño responsive, animaciones, Grid, Flexbox y técnicas avanzadas de estilización." },
    { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", tag: "Framework", description: "Framework React con SSR, generación estática, routing automático y optimización." },
    { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", tag: "Backend", description: "JavaScript del lado del servidor, eventos asíncronos, streams y aplicaciones en tiempo real." },
    { name: "Angular", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", tag: "Frontend", description: "Framework completo de Google, TypeScript, inyección de dependencias." },
    { name: "Hugging Face", image: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", tag: "IA", description: "Plataforma de modelos NLP pre-entrenados, transformers, BERT, GPT." },
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", tag: "Frontend", description: "Programación dinámica, ES6+, DOM manipulation, async/await." },
    { name: "Laravel", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", tag: "Framework", description: "Framework PHP elegante, Eloquent ORM, Blade templates y arquitectura MVC." },
    { name: "OpenCV", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", tag: "IA", description: "Librería de visión por computadora, procesamiento de imágenes, detección de objetos." },
    { name: "EXCEL", image: "https://cdn-icons-png.flaticon.com/512/732/732220.png", tag: "Data", description: "Hojas de cálculo, análisis de datos, fórmulas avanzadas y macros VBA." },
    { name: "C#", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", tag: "Backend", description: "Lenguaje .NET para aplicaciones desktop, web y móviles con LINQ, async/await." },
    { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", tag: "Backend", description: "Lenguaje versátil para desarrollo web, data science, automatización y scripting." },
    { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg", tag: "Database", description: "Administración de bases de datos MySQL, stored procedures, triggers y optimización." },
    { name: "Scikit-learn", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", tag: "IA", description: "Librería de machine learning en Python, clasificación, regresión, clustering." },
    { name: "Symfony", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg", tag: "Framework", description: "Framework PHP empresarial, componentes reutilizables, arquitectura robusta." },
    { name: "Arduino", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", tag: "IoT", description: "Plataforma de prototipado electrónico, microcontroladores, sensores y proyectos embebidos." },
    { name: "IoT", image: "https://cdn-icons-png.flaticon.com/512/2821/2821601.png", tag: "IoT", description: "Internet de las cosas, conectividad de dispositivos, protocolos MQTT." },
    { name: "POWER QUERY", image: "https://api.iconify.design/carbon/chart-line.svg", tag: "Data", description: "Transformación y preparación de datos en Power BI y Excel." },
    { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", tag: "Database", description: "Base de datos NoSQL orientada a documentos, escalabilidad horizontal." },
    { name: "Kotlin", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", tag: "Mobile", description: "Lenguaje moderno para Android, sintaxis concisa, null-safety." },
    { name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", tag: "Framework", description: "Framework minimalista para Node.js, routing, middleware y APIs REST." },
    { name: "YOLOv8", image: "https://raw.githubusercontent.com/ultralytics/assets/main/logo/Ultralytics_Logotype_Original.svg", tag: "IA", description: "Modelo de detección de objetos en tiempo real, segmentación de instancias." },
    { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", tag: "Frontend", description: "JavaScript tipado para aplicaciones escalables, interfaces y tipos avanzados." },
    { name: "Django", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", tag: "Framework", description: "Framework Python de alto nivel, ORM potente, admin panel automático." },
    { name: "Go", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", tag: "Backend", description: "Lenguaje compilado de Google, concurrencia nativa, microservicios." },
    { name: "bootstrap5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", tag: "Frontend", description: "Framework CSS para crear interfaces responsive y componentes reutilizables." },
    { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", tag: "Backend", description: "Programación orientada a objetos, aplicaciones empresariales, JVM." },
    { name: "Node-RED", image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", tag: "IoT", description: "Herramienta de programación visual basada en flujos para conectar dispositivos IoT." },
    { name: "POWER PIVOT", image: "https://cdn-icons-png.flaticon.com/512/906/906344.png", tag: "Data", description: "Modelado de datos en Excel y Power BI para análisis complejos." },
    { name: "SASS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", tag: "Frontend", description: "Preprocesador CSS con variables, mixins y anidamiento para estilos escalables." },
    { name: "Metodologías ágiles", image: "https://cdn-icons-png.flaticon.com/512/8968/8968277.png", tag: "Management", description: "Scrum, Kanban, Sprints y gestión eficiente de proyectos con metodologías iterativas." },
    { name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", tag: "Backend", description: "Lenguaje de alto rendimiento, programación de sistemas y aplicaciones críticas." },
    { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", tag: "Frontend", description: "Estructura web semántica, accesibilidad y mejores prácticas para desarrollo moderno." },
    { name: "esp32", image: "https://cdn-icons-png.flaticon.com/512/2000/2000927.png", tag: "IoT", description: "Microcontrolador de bajo costo con WiFi y Bluetooth para proyectos IoT." },
    { name: "CodeIgniter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg", tag: "Framework", description: "Framework PHP ligero y potente, MVC moderno y desarrollo ágil." },
    { name: "ciencia de datos python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", tag: "Data", description: "Análisis de datos con Python, pandas, numpy, matplotlib y estadística." },
    { name: "sensores", image: "https://cdn-icons-png.flaticon.com/512/2844/2844941.png", tag: "IoT", description: "Interfaz y programación de sensores de temperatura, humedad, movimiento, etc." },
    { name: "vision computacional", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", tag: "IA", description: "Procesamiento de imágenes, detección de patrones y análisis visual." },
    { name: "PyTorch", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", tag: "IA", description: "Framework de Facebook para investigación en IA y aprendizaje profundo." },
    { name: "raspaberry", image: "https://cdn-icons-png.flaticon.com/512/3194/3194403.png", tag: "IoT", description: "Miniordenador de bajo costo para proyectos de IoT y computación embebida." },
    { name: "Normalización base de datos", image: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png", tag: "Database", description: "Diseño óptimo de bases de datos, formas normales e integridad referencial." }
];

// ============================================
// PAGINACIÓN
// ============================================
let currentPage = 1;
const coursesPerPage = 8;
const totalPages = Math.ceil(courses.length / coursesPerPage);

function renderCourses(page) {
    const start = (page - 1) * coursesPerPage;
    const end = start + coursesPerPage;
    const coursesToShow = courses.slice(start, end);
    
    const grid = document.getElementById('coursesGrid');
    grid.innerHTML = '';
    
    coursesToShow.forEach(course => {
        const card = `
            <div class="premium-card">
                <div class="card-image">
                    <img src="${course.image}" alt="${course.name}">
                    <div class="card-tag">${course.tag}</div>
                </div>
                <div class="card-body">
                    <h3>${course.name}</h3>
                    <div class="card-reveal">
                        <p>${course.description}</p>
                        <a href="#" class="btn-more">
                            <span>Conoce más</span> <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

function renderPagination() {
    const pageNumbers = document.getElementById('pageNumbers');
    pageNumbers.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('span');
        pageBtn.className = `p-number ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i.toString().padStart(2, '0');
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderCourses(currentPage);
            renderPagination();
            document.getElementById('cursos').scrollIntoView({ behavior: 'smooth' });
        });
        pageNumbers.appendChild(pageBtn);
    }
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderCourses(currentPage);
        renderPagination();
        document.getElementById('cursos').scrollIntoView({ behavior: 'smooth' });
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderCourses(currentPage);
        renderPagination();
        document.getElementById('cursos').scrollIntoView({ behavior: 'smooth' });
    }
});

// ============================================
// BÚSQUEDA DE CURSOS
// ============================================
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm === '') {
        renderCourses(currentPage);
        return;
    }
    
    const filtered = courses.filter(course => 
        course.name.toLowerCase().includes(searchTerm) ||
        course.tag.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm)
    );
    
    const grid = document.getElementById('coursesGrid');
    grid.innerHTML = '';
    
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: #aaa; grid-column: 1/-1;">No se encontraron cursos</p>';
    } else {
        filtered.forEach(course => {
            const card = `
                <div class="premium-card">
                    <div class="card-image">
                        <img src="${course.image}" alt="${course.name}">
                        <div class="card-tag">${course.tag}</div>
                    </div>
                    <div class="card-body">
                        <h3>${course.name}</h3>
                        <div class="card-reveal">
                            <p>${course.description}</p>
                            <a href="#" class="btn-more">
                                <span>Conoce más</span> <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            grid.innerHTML += card;
        });
    }
});

// ============================================
// INICIALIZACIÓN
// ============================================
renderCourses(currentPage);
renderPagination();

// Vanta.js
VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x00f2fe,
    backgroundColor: 0x05060a,
    points: 14.00,
    maxDistance: 22.00,
    spacing: 16.00
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Cerrar menú móvil
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('check').checked = false;
    });
});