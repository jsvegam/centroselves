# ✅ Checklist de Desarrollo - Centro Selves

## 🏗️ Infraestructura Base

- [x] Next.js 15 + TypeScript instalado
- [x] Tailwind CSS configurado
- [x] Payload CMS integrado
- [x] MongoDB configurado (local)
- [x] Variables de entorno configuradas
- [x] Fuente EB Garamond (similar a Hoefler Text)
- [x] Estructura de carpetas creada
- [ ] MongoDB Atlas (producción)
- [ ] Resend/Email configurado para formularios

## 📄 Páginas Públicas

### Página de Inicio
- [x] Hero section con título
- [x] Descripción del centro
- [x] Botón "Agendar Primera Sesión"
- [x] Sección de 3 servicios (Individual, Pareja, Familiar)
- [x] Call-to-action final
- [x] Navigation menu responsive
- [x] Footer
- [x] WhatsApp button flotante

### Sobre Centro Selves
- [ ] Crear página `/sobre-nosotros`
- [ ] Sección "Cómo nace el proyecto"
- [ ] Sección "Sobre mí" del psicólogo
- [ ] Foto profesional
- [ ] Formación y experiencia clínica
- [ ] Explicación de psicoterapia sistémica relacional
- [ ] A quiénes acompaña
- [ ] Principios del centro
- [ ] Integrar contenido desde CMS (global 'about')

### Atención Psicológica
- [ ] Crear página `/servicios`
- [ ] Sección: Psicoterapia Individual
  - [ ] Descripción
  - [ ] Modalidades (presencial/online)
  - [ ] Duración
  - [ ] Valor
  - [ ] Íconos
- [ ] Sección: Psicoterapia de Pareja
  - [ ] Descripción
  - [ ] Modalidades
  - [ ] Duración
  - [ ] Valor
  - [ ] Íconos
- [ ] Sección: Psicoterapia Familiar
  - [ ] Descripción
  - [ ] Modalidades
  - [ ] Duración
  - [ ] Valor
  - [ ] Íconos
- [ ] Info: "Adolescentes 17+ y adultos"
- [ ] Info: Boleta de reembolso
- [ ] Integrar desde CMS (collection 'services')

### Preguntas Frecuentes
- [ ] Crear página `/preguntas-frecuentes`
- [ ] Componente acordeón
- [ ] Pregunta 1: ¿Sesiones presenciales u online?
- [ ] Pregunta 2: ¿Cómo es la primera sesión?
- [ ] Pregunta 3: ¿Cuánto duran y cada cuánto son?
- [ ] Pregunta 4: ¿Cuánto dura un proceso?
- [ ] Pregunta 5: ¿Cuál es el valor y cómo pagar?
- [ ] Pregunta 6: ¿Cómo funciona el reembolso?
- [ ] Pregunta 7: ¿Cómo agendo mi primera sesión?
- [ ] Pregunta 8: ¿Qué pasa si necesito reagendar?
- [ ] Integrar desde CMS (collection 'faqs')

### Cuadernos (Blog)
- [ ] Crear página `/cuadernos` (listado)
- [ ] Grid/lista de artículos
- [ ] Mostrar título, fecha, extracto
- [ ] Paginación o infinite scroll
- [ ] Crear página `/cuadernos/[slug]` (individual)
- [ ] Mostrar título, fecha, contenido completo
- [ ] Botón "Volver a cuadernos"
- [ ] Integrar desde CMS (collection 'blog-posts')

### Contacto
- [ ] Crear página `/contacto`
- [ ] Formulario de contacto
  - [ ] Campo: Nombre
  - [ ] Campo: Email
  - [ ] Campo: Teléfono (opcional)
  - [ ] Campo: Mensaje
  - [ ] Botón enviar
  - [ ] API route para enviar email
- [ ] Información de contacto
  - [ ] Teléfono
  - [ ] Email
  - [ ] Dirección
  - [ ] Instagram (cuando esté activo)
- [ ] Mapa de Google Maps integrado
- [ ] Integrar datos desde CMS (global 'site-settings')

## 🎛️ Panel de Administración (CMS)

### Colecciones
- [x] Users (autenticación admin)
- [x] Services (servicios de psicoterapia)
- [x] FAQs (preguntas frecuentes)
- [x] Blog Posts (cuadernos)
- [x] Pages (páginas estáticas - si se necesita)

### Configuración Global
- [x] Site Settings
  - [x] Nombre del sitio
  - [x] Email
  - [x] Teléfono
  - [x] WhatsApp
  - [x] Dirección
  - [x] Instagram
  - [x] URL del mapa
- [x] About
  - [x] Título
  - [x] Contenido (rich text)
  - [x] URL de foto

### Contenido Inicial
- [ ] Crear usuario administrador
- [ ] Configurar Site Settings con datos reales
- [ ] Cargar contenido de "About"
- [ ] Crear 3 servicios (Individual, Pareja, Familiar)
- [ ] Cargar 8 FAQs
- [ ] Subir foto profesional (o URL)

## 🎨 Diseño y UX

- [x] Diseño responsive (móvil y desktop)
- [x] Menú de navegación con hamburger en móvil
- [x] Footer con copyright
- [x] Botón flotante de WhatsApp
- [x] Colores: texto negro sobre fondo blanco
- [x] Fuente similar a Hoefler Text
- [ ] Optimizar imágenes (usar next/image)
- [ ] Agregar favicon personalizado
- [ ] Loading states en formularios
- [ ] Mensajes de éxito/error en formularios
- [ ] Transiciones suaves
- [ ] Hover states en botones y links

## 🔍 SEO y Metadata

- [ ] Meta tags en cada página
- [ ] Open Graph tags (Facebook, WhatsApp)
- [ ] Twitter Card tags
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Favicon y apple-touch-icon
- [ ] Structured data (JSON-LD)
- [ ] Descripción meta personalizada por página

## 🚀 Deploy y Producción

### Pre-Deploy
- [ ] Testing en diferentes navegadores
- [ ] Testing en diferentes dispositivos móviles
- [ ] Verificar todos los links
- [ ] Optimizar imágenes
- [ ] Verificar tiempos de carga
- [ ] Verificar formularios funcionan
- [ ] Verificar panel admin funciona

### MongoDB Atlas
- [ ] Crear cuenta en MongoDB Atlas
- [ ] Crear cluster
- [ ] Configurar usuario y contraseña
- [ ] Obtener connection string
- [ ] Whitelist IPs (o permitir desde cualquier lugar)
- [ ] Migrar datos de local a Atlas (si hay)

### Deploy en Vercel
- [ ] Crear cuenta en Vercel
- [ ] Conectar repositorio GitHub
- [ ] Configurar variables de entorno
  - [ ] PAYLOAD_SECRET
  - [ ] DATABASE_URI (Atlas)
  - [ ] NEXT_PUBLIC_SERVER_URL
  - [ ] RESEND_API_KEY (si aplica)
  - [ ] CONTACT_EMAIL (si aplica)
- [ ] Hacer primer deploy
- [ ] Verificar que todo funciona

### Configuración de Dominio
- [ ] Agregar dominio www.centroselves.cl en Vercel
- [ ] Configurar registros DNS
  - [ ] A record o CNAME
  - [ ] Esperar propagación (24-48h)
- [ ] Verificar SSL (HTTPS)
- [ ] Probar acceso desde el dominio

### Post-Deploy
- [ ] Probar sitio en producción
- [ ] Probar formulario de contacto
- [ ] Probar panel admin en producción
- [ ] Verificar WhatsApp funciona
- [ ] Verificar Google Maps carga
- [ ] Verificar responsive en producción
- [ ] Crear primer post de blog desde admin
- [ ] Entrenar al psicólogo en uso del panel

## 📝 Documentación y Entrega

- [x] README con instrucciones
- [x] Documento de estado del proyecto
- [x] Guía de cómo continuar
- [x] Checklist (este archivo)
- [ ] Video tutorial de uso del panel admin
- [ ] Documento con credenciales (admin, DB, etc.)
- [ ] Manual de usuario para el psicólogo
- [ ] Contacto de soporte para dudas

## 🐛 Testing y QA

### Funcional
- [ ] Navegación funciona en todas las páginas
- [ ] Links internos funcionan
- [ ] Links externos abren en nueva pestaña
- [ ] Formulario de contacto envía emails
- [ ] WhatsApp abre con mensaje pre-llenado
- [ ] Panel admin: crear contenido
- [ ] Panel admin: editar contenido
- [ ] Panel admin: eliminar contenido
- [ ] Panel admin: subir imágenes (si aplica)

### Responsive
- [ ] iPhone SE (pequeño)
- [ ] iPhone 12/13 Pro
- [ ] iPhone 14 Pro Max (grande)
- [ ] iPad
- [ ] Android (varios tamaños)
- [ ] Desktop 1920x1080
- [ ] Desktop 1366x768
- [ ] Menú hamburger funciona en móvil

### Navegadores
- [ ] Chrome (desktop y móvil)
- [ ] Safari (desktop y móvil)
- [ ] Firefox
- [ ] Edge
- [ ] Opera (opcional)

### Performance
- [ ] Lighthouse score > 90
- [ ] Imágenes optimizadas
- [ ] Lazy loading configurado
- [ ] Fonts cargadas eficientemente
- [ ] CSS minificado
- [ ] JS minificado

## 📊 Métricas de Éxito

- [ ] Tiempo de carga < 3 segundos
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse Best Practices > 90
- [ ] Lighthouse SEO > 90
- [ ] Mobile-friendly (Google Test)
- [ ] 0 errores en consola
- [ ] SSL válido

---

**Última actualización:** 1 de Agosto, 2026  
**Progreso:** ~35% completado
