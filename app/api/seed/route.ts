import { getPayloadClient } from '@/lib/payload'
import { NextResponse } from 'next/server'

async function pushSchema(payload: any) {
  const adapter = payload.db
  const { pushSchema: drizzlePush } = adapter.requireDrizzleKit()
  const { apply } = await drizzlePush(
    adapter.schema,
    adapter.drizzle,
    adapter.schemaName ? [adapter.schemaName] : undefined,
    adapter.tablesFilter,
  )
  await apply()
}

export async function GET() {
  try {
    const payload = await getPayloadClient()

    // Push schema to create tables
    await pushSchema(payload)

    // Create admin user
    try {
      await payload.create({
        collection: 'users',
        data: {
          email: 'admin@centroselves.cl',
          password: 'admin123',
          name: 'Andrés González',
        },
      })
    } catch {
      // user may already exist
    }

    // Site Settings
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        siteName: 'Centro Selves',
        whatsapp: '56988841961',
        instagram: '@centro.selves',
        phone: '+56 9 8884 1961',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53282.19785498498!2d-70.6693!3d-33.4489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Chile!5e0!3m2!1ses!2scl!4v1',
      },
    })

    // Home Page
    await payload.updateGlobal({
      slug: 'home-page',
      data: {
        heroTitle: 'Centro Selves',
        heroSubtitle: 'Psicoterapia Sistémico-Relacional',
        heroDescription: 'Atención psicológica a adultos, parejas y familias desde una perspectiva sistémico-relacional. Psicoterapia individual, psicoterapia de pareja y psicoterapia familiar.',
        ctaText: 'Agendar una hora',
        faqCtaTitle: '¿Tienes dudas?',
        faqCtaDescription: 'Revisa las preguntas frecuentes o contáctame directamente',
      },
    })

    // About
    await payload.updateGlobal({
      slug: 'about',
      data: {
        title: 'Sobre Centro Selves',
        subtitle: 'Psicoterapia Sistémico-Relacional',
        therapistName: 'Andrés González Morales',
        therapistRole: 'Psicólogo clínico',
        credentials: [
          { text: 'Psicólogo clínico egresado de la Universidad Diego Portales' },
          { text: 'Diplomado en Psicoterapia Sistémica y Familiar, Universidad de Chile' },
          { text: 'Cursando Magíster de Psicología Clínica de Adultos: Línea Sistémico-Relacional (2026 hasta la actualidad)' },
          { text: 'Experiencia con consultantes adultos y tercera edad en salud mental en dispositivos de la red pública: Centro Comunitario de Salud Mental (COSAM) y consulta privada' },
        ],
        aboutText: 'Centro Selves es un centro de atención psicológica que ofrece psicoterapia a adultos, desde una perspectiva sistémico-relacional, que estén atravesando diferentes tipos de dificultades, malestares o problemas de salud mental que estén afectando tu vida personal, de pareja o familiar.\n\nDesde la psicoterapia sistémico-relacional, las relaciones dan forma a quienes somos, qué creemos, cómo sentimos y nos comportamos con los demás, de modo que permite prestar especial atención a tus relaciones más significativas y contextos personales en donde estas ocurren, sin perder de vista tu singularidad.\n\nHoy más que nunca, ante la creciente desarticulación social, es crucial observar nuestras relaciones, cuidar de ellas y detenernos a pensar en cómo participamos de estas, tanto en lo que sostiene nuestra felicidad como también nuestro dolor. La salud mental va de la mano con la compañía, cuidado en conjunto y del entendimiento que ningún pensamiento, emoción o comportamiento está desconectado de su entorno ni mucho menos de quienes nos rodean.\n\nCentro Selves es una iniciativa de Andrés González Morales, psicólogo clínico, que tiene por proyecciones incorporar a nuevos/as miembros/as para conformar un equipo de profesionales capacitado, reflexivo y acogedor que pueda acompañarte por el motivo que te lleva a venir a terapia.',
        approachTitle: 'Áreas de acompañamiento',
        approachText: 'Este proyecto tiene por objetivo acompañarte y participar activamente de tus procesos de cambio ante la situación que te/les genera(n) malestar o que estén asociados a:',
        audiences: [
          { text: 'Ansiedad' },
          { text: 'Depresión' },
          { text: 'Estrés' },
          { text: 'Autoestima' },
          { text: 'Crisis de pánico' },
          { text: 'Conducta alimentaria' },
          { text: 'Bipolaridad' },
          { text: 'Crisis vitales o momentos de cambio' },
          { text: 'Conflictos de pareja, celos e infidelidades' },
          { text: 'Conflictos familiares o con otras personas significativas' },
          { text: 'Límites, autonomía, dependencia e independencia' },
          { text: 'Rupturas amorosas, duelos y pérdidas significativas' },
          { text: 'Problemas de comunicación en la pareja' },
          { text: 'Soledad o dificultad para relacionarse' },
          { text: 'Identidad y expresión' },
        ],
        principles: [
          { title: 'Confidencialidad', description: 'Respeto absoluto por tu privacidad' },
          { title: 'Respeto', description: 'Sin juicios, con aceptación' },
          { title: 'Compromiso', description: 'Con tu proceso y bienestar' },
          { title: 'Calidez', description: 'Un espacio seguro y acogedor' },
        ],
      },
    })

    // Contact Page
    await payload.updateGlobal({
      slug: 'contact-page',
      data: {
        title: '¿Cómo agendar mi primera sesión?',
        subtitle: 'Contáctame directamente por WhatsApp o Instagram',
      },
    })

    // Services Page
    await payload.updateGlobal({
      slug: 'services-page',
      data: {
        title: 'Atención Psicológica',
        subtitle: 'Psicoterapia individual, de pareja y familiar',
        infoItems: [
          { text: 'Se emite boleta para reembolso con seguros complementarios' },
          { text: 'Modalidad presencial y online disponibles' },
          { text: 'Pago mediante transferencia electrónica' },
        ],
        ctaText: 'Consultar disponibilidad',
      },
    })

    // FAQ Page
    await payload.updateGlobal({
      slug: 'faq-page',
      data: {
        title: 'Preguntas Frecuentes',
        subtitle: 'Resolvemos tus dudas sobre el proceso terapéutico',
      },
    })

    // Navigation Items
    const existingNav = await payload.find({ collection: 'nav-items' })
    if (existingNav.docs.length === 0) {
      const navItems = [
        { label: 'Inicio', href: '/', order: 1, visible: true },
        { label: 'Sobre Centro Selves', href: '/sobre-nosotros', order: 2, visible: true },
        { label: 'Atención Psicológica', href: '/servicios', order: 3, visible: true },
        { label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes', order: 4, visible: true },
        { label: 'Contacto', href: '/contacto', order: 5, visible: true },
      ]
      for (const item of navItems) {
        await payload.create({ collection: 'nav-items', data: item })
      }
    }

    // Services
    const existingServices = await payload.find({ collection: 'services' })
    if (existingServices.docs.length === 0) {
      const services = [
        {
          name: 'Psicoterapia Individual',
          description: 'Espacio de acompañamiento personalizado para adultos que estén atravesando diferentes tipos de dificultades, malestares o problemas de salud mental que estén afectando su vida personal.',
          modalities: [
            { name: 'Online', price: '$25.000' },
            { name: 'Presencial', price: '$25.000' },
          ],
          duration: '55-60 minutos',
          price: '$25.000',
          order: 1,
        },
        {
          name: 'Psicoterapia de Pareja',
          description: 'Un espacio para que ambos integrantes de la pareja puedan ser escuchados, comprender los patrones que los vinculan y encontrar nuevas formas de relacionarse.',
          modalities: [
            { name: 'Online', price: '$40.000' },
            { name: 'Presencial', price: '$40.000' },
          ],
          duration: '55-60 minutos',
          price: '$40.000',
          order: 2,
        },
        {
          name: 'Psicoterapia Familiar',
          description: 'Trabajo terapéutico con el sistema familiar, orientado a comprender las dinámicas relacionales y promover cambios que beneficien a todos los integrantes.',
          modalities: [
            { name: 'Online', price: '$40.000' },
            { name: 'Presencial', price: '$40.000' },
          ],
          duration: '60-80 minutos',
          price: '$40.000',
          order: 3,
        },
      ]
      for (const service of services) {
        await payload.create({ collection: 'services', data: service })
      }
    }

    // FAQs
    const existingFaqs = await payload.find({ collection: 'faqs' })
    if (existingFaqs.docs.length === 0) {
      const faqs = [
        { question: '¿Por qué partir una psicoterapia?', answer: 'Iniciar un proceso de psicoterapia es una decisión importante que permite explorar y comprender aquello que genera malestar, fortalecer relaciones y encontrar nuevas formas de habitar la vida cotidiana.', order: 1 },
        { question: '¿Quiénes pueden ir a psicoterapia?', answer: 'La psicoterapia está abierta a adultos, parejas y familias que deseen trabajar en su bienestar emocional y relacional.', order: 2 },
        { question: '¿Cómo es la primera sesión?', answer: 'La primera sesión es una sesión de ingreso en la que nos presentaremos, te pediré tus datos y conversaremos sobre lo que te trae a terapia.', order: 3 },
        { question: '¿Las sesiones son presenciales u online?', answer: 'Las sesiones de psicoterapia pueden ser tanto presenciales como online dependiendo de cuál modalidad favorita o la que mejor se acomode a tus necesidades.', order: 4 },
        { question: '¿Cuánto duran las sesiones y cada cuánto son?', answer: 'La duración de cada sesión es de 55-60 minutos y pueden ser semanales, quincenales e incluso mensuales según los acuerdos entre el terapeuta y el consultante.', order: 5 },
        { question: '¿Cuánto dura un proceso de psicoterapia?', answer: 'Al ser un proceso tan personal, subjetivo y sujeto a diferentes motivos de consulta y a varios factores, no se puede precisar o establecer un tiempo límite. El alta psicológica también forma parte de los acuerdos entre terapeuta y consultante(s).', order: 6 },
        { question: '¿Cuál es el valor y cómo puedo pagar?', answer: 'Las tarifas de cada sesión varían según el tipo de psicoterapia. La terapia individual tiene un costo de $25.000, mientras que la terapia de pareja y la terapia familiar tienen un costo de $40.000 cada una. Se puede pagar mediante transferencia electrónica, con derecho a boleta para reembolsos. Una vez hecho el pago se solicita enviar el comprobante al contacto de su psicólogo.', order: 7 },
        { question: '¿Cómo funciona el reembolso?', answer: 'El terapeuta posterior a cada sesión emitirá una boleta con los datos del consultante o de quien sea carga, la cual será enviada al correo indicado.', order: 8 },
        { question: '¿Qué ocurre si necesito reagendar o cancelar una sesión?', answer: 'Para reagendar o cancelar una sesión se debe avisar como máximo con 24 hrs de anticipación por términos de reacomodamiento de agenda y cupos. De no dar aviso oportuno se cobrará la sesión y será necesario acordar una nueva hora.', order: 9 },
        { question: '¿Cómo agendar mi primera sesión?', answer: 'Puedes agendar tu primera sesión contactándome directamente por WhatsApp o Instagram. Te responderé a la brevedad para coordinar un horario.', order: 10 },
      ]
      for (const faq of faqs) {
        await payload.create({ collection: 'faqs', data: faq })
      }
    }

    return NextResponse.json({ success: true, message: 'Seed completed. Login: admin@centroselves.cl / admin123' })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
