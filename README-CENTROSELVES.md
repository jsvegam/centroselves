# Centro Selves - Sitio Web

Sitio web para Centro Selves, centro de psicoterapia sistémica relacional.

## 🎯 Características

- ✅ Diseño responsive (móvil y desktop)
- ✅ Panel de administración (CMS) para gestionar contenido
- ✅ Sistema de blog (Cuadernos)
- ✅ Integración con WhatsApp
- ✅ Formulario de contacto
- ✅ Secciones: Inicio, Sobre Nosotros, Servicios, FAQ, Blog, Contacto

## 🛠 Tecnologías

- **Frontend**: Next.js 15 + React 19
- **Estilos**: Tailwind CSS
- **CMS**: Payload CMS
- **Base de datos**: MongoDB
- **Lenguaje**: TypeScript

## 📋 Requisitos previos

1. **Node.js** (versión 20 o superior)
2. **MongoDB** instalado y corriendo localmente

### Instalar MongoDB en Mac:

```bash
# Instalar con Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Iniciar MongoDB
brew services start mongodb-community
```

## 🚀 Instalación

1. **Instalar dependencias:**

```bash
npm install
```

2. **Configurar variables de entorno:**

Edita el archivo `.env.local` con tus datos:

```env
PAYLOAD_SECRET=tu-secreto-seguro-aqui-cambialo
DATABASE_URI=mongodb://localhost:27017/centroselves
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

3. **Iniciar el servidor de desarrollo:**

```bash
npm run dev
```

El sitio estará disponible en: `http://localhost:3000`

## 🎨 Panel de Administración

**Acceso:** `http://localhost:3000/admin`

### Primera vez:

1. Ve a `/admin`
2. Crea tu cuenta de administrador
3. Ingresa con tus credenciales

### ¿Qué puedes editar desde el panel?

#### 📝 **Configuración del sitio** (Site Settings)
- Nombre del sitio
- Email de contacto
- Teléfono
- WhatsApp (número completo con código país, ej: 56912345678)
- Dirección
- Instagram
- URL del mapa (Google Maps)

#### 📄 **Sobre Centro Selves** (About)
- Título de la sección
- Contenido (texto enriquecido con formato)
- URL de foto profesional

#### 🏥 **Servicios** (Services)
Crea/edita los 3 tipos de terapia:
- Nombre del servicio
- Descripción
- Modalidades (presencial, online, etc.)
- Duración
- Precio
- Orden de aparición

#### ❓ **Preguntas Frecuentes** (FAQs)
- Pregunta
- Respuesta (texto enriquecido)
- Orden de aparición

#### 📰 **Cuadernos** (Blog Posts)
- Título
- Slug (URL amigable)
- Contenido
- Fecha de publicación

## 📂 Estructura del proyecto

```
centroselves/
├── app/                      # Páginas de Next.js
│   ├── (payload)/           # Panel de administración
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página de inicio
├── components/              # Componentes reutilizables
│   ├── Navigation.tsx       # Menú de navegación
│   ├── Footer.tsx           # Pie de página
│   └── WhatsAppButton.tsx   # Botón flotante de WhatsApp
├── lib/                     # Utilidades
│   └── payload.ts           # Cliente de Payload CMS
├── public/                  # Archivos estáticos
├── payload.config.ts        # Configuración del CMS
└── .env.local              # Variables de entorno
```

## 🔧 Comandos útiles

```bash
# Desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start

# Linter
npm run lint
```

## 📱 Páginas del sitio

- **/** - Inicio
- **/sobre-nosotros** - Sobre Centro Selves (pendiente)
- **/servicios** - Atención Psicológica (pendiente)
- **/preguntas-frecuentes** - FAQ (pendiente)
- **/cuadernos** - Blog (pendiente)
- **/contacto** - Contacto (pendiente)
- **/admin** - Panel de administración

## 🚢 Deploy a producción

### Opción 1: Vercel (Recomendado)

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Configura las variables de entorno en Vercel
4. Necesitarás una base de datos MongoDB en la nube:
   - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (gratuito para desarrollo)

### Opción 2: Otro hosting

El sitio necesita:
- Node.js 20+
- MongoDB
- Soporte para Next.js

## 📝 Próximos pasos (TODO)

- [ ] Crear página "Sobre Centro Selves"
- [ ] Crear página "Servicios"
- [ ] Crear página "Preguntas Frecuentes"
- [ ] Crear página "Cuadernos" (blog)
- [ ] Crear página "Contacto" con mapa
- [ ] Agregar formulario de contacto funcional
- [ ] Configurar dominio www.centroselves.cl
- [ ] Subir foto profesional
- [ ] Poblar contenido inicial desde el panel admin
- [ ] Configurar email para formularios

## 🆘 Soporte

Para dudas o problemas:
- Revisa la documentación de [Next.js](https://nextjs.org/docs)
- Revisa la documentación de [Payload CMS](https://payloadcms.com/docs)

---

**Desarrollado para Centro Selves** - Psicoterapia Sistémica Relacional
