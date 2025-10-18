# 💼 Portafolio Personal - Yensel Leon

Portafolio desarrollado con Next.js 15, React 19 y TypeScript, presentando mis proyectos, habilidades y experiencia como desarrollador Full Stack.

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.9-38B2AC?style=flat-square&logo=tailwind-css)

## 🌟 Características

- 🎨 **UI Componentes**: Implementación de shadcn/ui con Radix UI
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos
- ⚡ **Rendimiento**: Optimizado con Next.js 15 y React 19

## 🛠️ Stack Tecnológico

### Frontend
- **Framework**: Next.js 15.2.4 (App Router)
- **UI Library**: React 19
- **Lenguaje**: TypeScript 5
- **Estilos**: TailwindCSS 4.1.9
- **Componentes**: shadcn/ui + Radix UI
- **Iconos**: Lucide React
- **Fuentes**: Geist Font Family

### Herramientas y Librerías
- **Formularios**: React Hook Form + Zod
- **Animaciones**: TailwindCSS Animate
- **Carrusel**: Embla Carousel
- **Notificaciones**: Sonner
- **Gráficos**: Recharts
- **Gestión de Temas**: next-themes

## 📂 Estructura del Proyecto

```
portafolio/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   └── globals.css         # Estilos globales
├── components/
│   ├── ui/                 # Componentes de shadcn/ui
│   ├── navbar.tsx          # Barra de navegación
│   ├── hero-section.tsx    # Sección hero
│   ├── about-section.tsx   # Sección sobre mí
│   ├── experience-section.tsx  # Experiencia laboral
│   ├── skills-section.tsx  # Habilidades técnicas
│   ├── projects-section.tsx    # Proyectos destacados
│   ├── contact-section.tsx # Formulario de contacto
│   ├── footer.tsx          # Pie de página
│   └── theme-provider.tsx  # Proveedor de temas
├── hooks/                  # Custom hooks
├── lib/                    # Utilidades
├── public/                 # Archivos estáticos
├── styles/                 # Estilos adicionales
└── components.json         # Configuración de shadcn/ui
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/yenselleon/portafolio.git
cd portafolio
```

2. **Instalar dependencias**
```bash
pnpm install
# o
npm install
```

3. **Ejecutar en desarrollo**
```bash
pnpm dev
# o
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

### Scripts Disponibles

```bash
pnpm dev      # Inicia el servidor de desarrollo
pnpm build    # Construye la aplicación para producción
pnpm start    # Inicia el servidor de producción
pnpm lint     # Ejecuta el linter
```

## 📦 Build y Deploy

### Build de Producción
```bash
pnpm build
```

### Deploy en Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

El proyecto está optimizado para deploy en Vercel con configuración automática.

## 🎨 Personalización

### Modificar Contenido
- **Información personal**: Edita `components/hero-section.tsx`
- **Experiencia**: Actualiza `components/experience-section.tsx`
- **Proyectos**: Modifica `components/projects-section.tsx`
- **Habilidades**: Edita `components/skills-section.tsx`

### Cambiar Estilos
- **Colores y tema**: Modifica `app/globals.css`
- **Configuración Tailwind**: Edita `tailwind.config.js`

### Agregar Componentes
```bash
npx shadcn@latest add [component-name]
```

## 📱 Secciones del Portafolio

1. **Hero**: Presentación inicial con llamado a la acción
2. **Sobre Mí**: Descripción profesional y personal
3. **Experiencia**: Historial laboral y logros
4. **Habilidades**: Stack tecnológico y competencias
5. **Proyectos**: Portafolio de trabajos destacados
6. **Contacto**: Formulario y enlaces de contacto

## 🔧 Configuración

### Variables de Entorno
Crea un archivo `.env.local` si necesitas configurar variables:

```env
# Ejemplo de variables (si aplica)
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

### Metadata SEO
Edita el archivo `app/layout.tsx` para personalizar:
- Título del sitio
- Descripción
- Open Graph tags
- Favicon

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Yensel Leon**
- Desarrollador Full Stack
- Especializado en soluciones digitales eficientes y escalables
