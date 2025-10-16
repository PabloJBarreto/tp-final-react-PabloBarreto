🌟 Pokepedia - La enciclopedia Pokémon

Se trata de una app web moderna e interactiva desarrollada con React + Vite + Bootstrap que permite explorar y descubrir todo sobre tus Pokémons favoritos.

✨ Características Principales:

🎯 Listado de Pokémons: Permite visualizar Pokémons de forma dinámica.
🔍 Detalles de Pokémons: Permite obtener información detallada de cada Pokémon (estadísticas, tipos, habilidades, movimientos).
📱 Navegación Responsiva: Menú hamburguesa para dispositivos móviles.
⚡ Navegación rápida: A partir de un sistema de routing optimizado con React Router.

🛠️ Tecnologías Utilizadas:

React 19.1.1 - Biblioteca de JavaScript para interfaces de usuario.
Vite 7.1.7 - Herramienta de construcción y desarrollo ultra-rápida.
Bootstrap 5.3.8 - Framework CSS de código abierto orientado a la creación de interfaces de usuario para la web.
React Router DOM 7.9.3 - Navegación y routing SPA
PokéAPI - API REST para datos completos de Pokémon
CSS3 - Estilos personalizados con variables CSS
Responsive Design - Para dispositivos móviles

📦 Instalación:

1. Clona el repositorio

git clone https://github.com/PabloJBarreto/tp-final-react-PabloBarreto.git
cd tp-final-react-PabloBarreto

2. Instala las dependencias

npm install

🚀 Ejecución:

npm run dev
La aplicación estará disponible en http://localhost:5173

🗂️ Estructura del Proyecto
tp-final-react-PabloBarreto/
├── public/
├── src/
│ │
│ ├── pages/
│ │ ├── Home.jsx # Página principal
│ │ ├── Listado.jsx # Listado paginado de Pokémons
│ │ ├── Detalle.jsx # Detalle de Pokémons
│ │  
│ ├── components/
│ │ ├── Navbar.jsx # Navegación responsiva
│ │ ├── Tarjeta.jsx # Tarjeta individual de Pokémons
│ │ └── Footer.jsx # Pie de página responsivo
│ ├── images/ # Recursos gráficos y fondos
│ │  
│ ├── App.jsx # Componente principal con routing
│ ├── App.css # Estilos principales
│ ├── index.css # Estilos globales base
│ └── main.jsx # Punto de entrada con Redux Provider
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md

🌟 Creado por Pablo Barreto
🎯 Trabajo Práctico Final Integrador - Programación Web con React
