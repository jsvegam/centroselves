# Cómo Continuar el Desarrollo

## 🏁 Inicio rápido

```bash
# 1. Asegúrate de que MongoDB esté corriendo
brew services start mongodb-community

# 2. Inicia el servidor
npm run dev

# 3. Abre en el navegador
# - Sitio público: http://localhost:3000
# - Panel admin: http://localhost:3000/admin
```

## 📝 Crear las páginas faltantes

### Estructura recomendada:

```
app/
├── sobre-nosotros/
│   └── page.tsx
├── servicios/
│   └── page.tsx
├── preguntas-frecuentes/
│   └── page.tsx
├── cuadernos/
│   ├── page.tsx           (listado)
│   └── [slug]/
│       └── page.tsx       (artículo individual)
└── contacto/
    └── page.tsx
```

### Plantilla base para cada página:

```tsx
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getPayloadClient } from '@/lib/payload'

export default async function NombrePagina() {
  const payload = await getPayloadClient()
  
  // Obtener datos si es necesario
  const settings = await payload.findGlobal({
    slug: 'site-settings',
  })

  return (
    <>
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-semibold mb-8">Título</h1>
          {/* Contenido aquí */}
        </div>
      </main>
      <Footer />
      {settings?.whatsapp && (
        <WhatsAppButton phoneNumber={settings.whatsapp} />
      )}
    </>
  )
}
```

## 🎨 Páginas específicas

### 1. Sobre Nosotros

```tsx
// app/sobre-nosotros/page.tsx
const payload = await getPayloadClient()
const about = await payload.findGlobal({ slug: 'about' })

// Usar about.content, about.photoUrl, etc.
```

### 2. Servicios

```tsx
// app/servicios/page.tsx
const services = await payload.find({
  collection: 'services',
  sort: 'order',
})

// Mapear services.docs
```

### 3. Preguntas Frecuentes

```tsx
// app/preguntas-frecuentes/page.tsx
const faqs = await payload.find({
  collection: 'faqs',
  sort: 'order',
})

// Crear acordeón con preguntas/respuestas
```

### 4. Cuadernos (Blog)

```tsx
// app/cuadernos/page.tsx - Listado
const posts = await payload.find({
  collection: 'blog-posts',
  sort: '-publishedDate',
})

// app/cuadernos/[slug]/page.tsx - Artículo individual
export async function generateStaticParams() {
  const posts = await payload.find({
    collection: 'blog-posts',
    limit: 1000,
  })
  
  return posts.docs.map((post) => ({
    slug: post.slug,
  }))
}

const post = await payload.find({
  collection: 'blog-posts',
  where: { slug: { equals: params.slug } },
  limit: 1,
})
```

### 5. Contacto

```tsx
// app/contacto/page.tsx
// Incluir:
// - Formulario de contacto
// - Mapa (Google Maps embed)
// - Datos de contacto desde settings
```

## 🗺️ Agregar Google Maps

```tsx
// En la página de contacto
<div className="w-full h-96 rounded-lg overflow-hidden">
  <iframe
    src={settings.mapUrl}
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
```

Para obtener la URL del mapa:
1. Ve a Google Maps
2. Busca la dirección
3. Clic en "Compartir" → "Insertar un mapa"
4. Copia el `src` del iframe

## 📧 Formulario de contacto

### Opción 1: Simple (usando mailto)

```tsx
<form action={`mailto:${settings.email}`} method="post" encType="text/plain">
  <input type="text" name="name" placeholder="Nombre" required />
  <input type="email" name="email" placeholder="Email" required />
  <textarea name="message" placeholder="Mensaje" required />
  <button type="submit">Enviar</button>
</form>
```

### Opción 2: Con API (recomendado)

1. Instalar Resend o similar:
```bash
npm install resend
```

2. Crear API route:
```tsx
// app/api/contact/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, message } = await request.json()
  
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: process.env.CONTACT_EMAIL!,
    subject: 'Nueva consulta desde el sitio',
    html: `<p><strong>Nombre:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Mensaje:</strong> ${message}</p>`
  })
  
  return Response.json({ success: true })
}
```

## 🎨 Estilos y diseño

### Colores principales (personalizar en globals.css):

```css
/* Negro para texto - ya configurado */
--foreground: #000000;

/* Puedes agregar más colores: */
--primary: #... ;
--secondary: #... ;
```

### Componentes útiles de Tailwind:

```tsx
// Botón primario
<button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
  
// Botón secundario
<button className="border border-black text-black px-6 py-3 rounded-md hover:bg-black hover:text-white">

// Tarjeta
<div className="border border-gray-200 rounded-lg p-6 hover:shadow-md">

// Contenedor
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
```

## 🚀 Deploy

### Paso 1: MongoDB en la nube

1. Crea cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crea un cluster gratuito
3. Obtén la connection string
4. Guárdala para el deploy

### Paso 2: Deploy en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configurar variables de entorno en Vercel:
# - PAYLOAD_SECRET
# - DATABASE_URI (la de MongoDB Atlas)
# - NEXT_PUBLIC_SERVER_URL
```

### Paso 3: Configurar dominio

1. En Vercel, ve a Settings → Domains
2. Agrega www.centroselves.cl
3. Sigue las instrucciones para configurar DNS

## 🧪 Testing

### Checklist antes de deploy:

- [ ] Probar en Chrome, Safari, Firefox
- [ ] Probar en móvil (iPhone y Android)
- [ ] Verificar que todos los links funcionan
- [ ] Probar formulario de contacto
- [ ] Verificar WhatsApp button funciona
- [ ] Verificar panel admin funciona
- [ ] Probar crear/editar contenido desde admin
- [ ] Verificar responsive en diferentes tamaños
- [ ] Optimizar imágenes (usar next/image)
- [ ] Verificar tiempos de carga

## 📚 Recursos útiles

- [Next.js Docs](https://nextjs.org/docs)
- [Payload CMS Docs](https://payloadcms.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/) (si necesitas más íconos)

## 🆘 Problemas comunes

### MongoDB no conecta:
```bash
# Verificar si está corriendo
brew services list

# Reiniciar
brew services restart mongodb-community
```

### Puerto en uso:
```bash
# Next.js automáticamente busca otro puerto
# O puedes especificar uno:
PORT=3005 npm run dev
```

### Errores de TypeScript:
```bash
# Regenerar tipos
npm run build
```

---

**¿Tienes preguntas?** Revisa el README-CENTROSELVES.md para más detalles.
