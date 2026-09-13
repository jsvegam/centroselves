import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son obligatorios' },
        { status: 400 }
      )
    }

    // TODO: Integrar con servicio de email (Resend, SendGrid, etc.)
    // Por ahora solo logueamos en el servidor
    console.log('Nueva consulta de contacto:', { name, email, phone, message })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}
