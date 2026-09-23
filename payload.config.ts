import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'

export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- Centro Selves',
    },
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      slug: 'services',
      labels: { singular: 'Servicio', plural: 'Servicios' },
      admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'price', 'order'],
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Nombre del servicio',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
        },
        {
          name: 'modalities',
          type: 'array',
          label: 'Modalidades',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              label: 'Nombre',
            },
            {
              name: 'price',
              type: 'text',
              label: 'Valor (si difiere del general)',
            },
          ],
        },
        {
          name: 'duration',
          type: 'text',
          label: 'Duración',
        },
        {
          name: 'price',
          type: 'text',
          label: 'Valor',
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 0,
          label: 'Orden',
        },
      ],
    },
    {
      slug: 'faqs',
      labels: { singular: 'Pregunta Frecuente', plural: 'Preguntas Frecuentes' },
      admin: {
        useAsTitle: 'question',
        defaultColumns: ['question', 'order'],
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          label: 'Pregunta',
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          label: 'Respuesta',
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 0,
          label: 'Orden',
        },
      ],
    },
    {
      slug: 'nav-items',
      labels: { singular: 'Item de Menú', plural: 'Menú de Navegación' },
      admin: {
        useAsTitle: 'label',
        defaultColumns: ['label', 'href', 'order'],
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Texto del enlace',
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          label: 'URL (ej: /servicios)',
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 0,
          label: 'Orden',
        },
        {
          name: 'visible',
          type: 'checkbox',
          defaultValue: true,
          label: 'Visible',
        },
      ],
    },
    {
      slug: 'media',
      labels: { singular: 'Imagen', plural: 'Imágenes' },
      upload: {
        staticDir: path.resolve('./public/media'),
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
          label: 'Texto alternativo',
        },
      ],
    },
  ],
  globals: [
    {
      slug: 'site-settings',
      label: 'Configuración del Sitio',
      fields: [
        {
          name: 'siteName',
          type: 'text',
          defaultValue: 'Centro Selves',
          label: 'Nombre del sitio',
        },
        {
          name: 'whatsapp',
          type: 'text',
          label: 'WhatsApp (número completo sin +)',
          admin: { description: 'Ej: 56988841961' },
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram',
          admin: { description: 'Ej: @centro.selves' },
        },
        {
          name: 'email',
          type: 'email',
          label: 'Correo electrónico',
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Teléfono (formato visible)',
          admin: { description: 'Ej: +56 9 8884 1961' },
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'Dirección',
        },
        {
          name: 'mapUrl',
          type: 'text',
          label: 'URL embed de Google Maps',
          admin: { description: 'Pegar la URL del iframe de Google Maps' },
        },
      ],
    },
    {
      slug: 'home-page',
      label: 'Página de Inicio',
      fields: [
        {
          name: 'heroTitle',
          type: 'text',
          defaultValue: 'Centro Selves',
          label: 'Título principal',
        },
        {
          name: 'heroSubtitle',
          type: 'text',
          defaultValue: 'Psicoterapia Sistémica Relacional',
          label: 'Subtítulo',
        },
        {
          name: 'heroDescription',
          type: 'text',
          defaultValue: 'Atención psicológica a adultos, parejas y familias',
          label: 'Descripción',
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'Contactar por WhatsApp',
          label: 'Texto del botón principal',
        },
        {
          name: 'servicesTitle',
          type: 'text',
          defaultValue: 'Atención Psicológica',
          label: 'Título sección servicios',
        },
        {
          name: 'faqCtaTitle',
          type: 'text',
          defaultValue: '¿Tienes dudas?',
          label: 'Título sección FAQ',
        },
        {
          name: 'faqCtaDescription',
          type: 'text',
          defaultValue: 'Revisa las preguntas frecuentes o contáctame directamente',
          label: 'Descripción sección FAQ',
        },
      ],
    },
    {
      slug: 'about',
      label: 'Sobre Centro Selves',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Sobre Centro Selves',
          label: 'Título de la página',
        },
        {
          name: 'subtitle',
          type: 'text',
          defaultValue: 'Psicoterapia Sistémica Relacional',
          label: 'Subtítulo',
        },
        {
          name: 'therapistName',
          type: 'text',
          defaultValue: 'Andrés González Morales',
          label: 'Nombre del terapeuta',
        },
        {
          name: 'therapistRole',
          type: 'text',
          defaultValue: 'Psicólogo clínico',
          label: 'Rol profesional',
        },
        {
          name: 'therapistPhoto',
          type: 'upload',
          relationTo: 'media',
          label: 'Foto profesional',
        },
        {
          name: 'credentials',
          type: 'array',
          label: 'Formación y credenciales',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'aboutText',
          type: 'textarea',
          label: 'Texto "Sobre Centro Selves"',
        },
        {
          name: 'approachTitle',
          type: 'text',
          defaultValue: '¿Por qué psicoterapia sistémica relacional?',
          label: 'Título enfoque',
        },
        {
          name: 'approachText',
          type: 'textarea',
          label: 'Texto del enfoque terapéutico',
        },
        {
          name: 'audiences',
          type: 'array',
          label: 'A quiénes acompaña',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'principles',
          type: 'array',
          label: 'Principios',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Título',
            },
            {
              name: 'description',
              type: 'text',
              label: 'Descripción',
            },
          ],
        },
      ],
    },
    {
      slug: 'contact-page',
      label: 'Página de Contacto',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: '¿Cómo agendar mi primera sesión?',
          label: 'Título',
        },
        {
          name: 'subtitle',
          type: 'text',
          defaultValue: 'Contáctame directamente por WhatsApp o Instagram',
          label: 'Subtítulo',
        },
      ],
    },
    {
      slug: 'services-page',
      label: 'Página de Servicios',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Atención Psicológica',
          label: 'Título',
        },
        {
          name: 'subtitle',
          type: 'text',
          defaultValue: 'Psicoterapia individual, de pareja y familiar',
          label: 'Subtítulo',
        },
        {
          name: 'infoItems',
          type: 'array',
          label: 'Información importante',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'Consultar disponibilidad',
          label: 'Texto del botón',
        },
      ],
    },
    {
      slug: 'faq-page',
      label: 'Página de Preguntas Frecuentes',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Preguntas Frecuentes',
          label: 'Título',
        },
        {
          name: 'subtitle',
          type: 'text',
          defaultValue: 'Resolvemos tus dudas sobre el proceso terapéutico',
          label: 'Subtítulo',
        },
      ],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key-here',
  typescript: {
    outputFile: './payload-types.ts',
  },
  db: postgresAdapter({
    push: true,
    pool: {
      connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/centroselves',
    },
  }),
})
