import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getNavItems, getSettings } from '@/lib/data'
import { getPayloadClient } from '@/lib/payload'
import { notFound } from 'next/navigation'

export default async function CuadernoPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [navItems, settings] = await Promise.all([
    getNavItems(),
    getSettings(),
  ])

  let post: any = null
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'blog-posts',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    post = result.docs[0] || null
  } catch {}

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation items={navItems} />
      <main className="flex-1">
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <Link
              href="/cuadernos"
              className="text-sm text-warm-gray-light hover:text-sage transition-colors mb-8 inline-block"
            >
              &larr; Volver a Cuadernos
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>

            {post.publishedDate && (
              <time className="text-sm text-warm-gray-light block mb-8">
                {new Date(post.publishedDate).toLocaleDateString('es-CL', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}

            <div className="prose prose-lg max-w-none">
              <p className="text-warm-gray">
                Contenido del artículo disponible desde el panel de administración.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      {settings.whatsapp && <WhatsAppButton phoneNumber={settings.whatsapp} />}
    </>
  )
}
