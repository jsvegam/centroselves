import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getNavItems, getSettings } from '@/lib/data'
import { getPayloadClient } from '@/lib/payload'

export default async function Cuadernos() {
  const [navItems, settings] = await Promise.all([
    getNavItems(),
    getSettings(),
  ])

  let posts: any[] = []
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'blog-posts',
      sort: '-publishedDate',
    })
    posts = result.docs as any[]
  } catch {}

  return (
    <>
      <Navigation items={navItems} />
      <main className="flex-1">
        <section className="bg-cream py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Cuadernos
            </h1>
            <p className="text-lg text-warm-gray text-center max-w-2xl mx-auto">
              Reflexiones y escritos sobre psicoterapia, relaciones y bienestar
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            {posts.length > 0 ? (
              <div className="space-y-8">
                {posts.map((post) => (
                  <article key={post.id} className="border-b border-cream-dark pb-8 last:border-0">
                    <Link href={`/cuadernos/${post.slug}`} className="group">
                      <h2 className="text-2xl font-bold group-hover:text-sage transition-colors mb-2">
                        {post.title}
                      </h2>
                      {post.publishedDate && (
                        <time className="text-sm text-warm-gray-light">
                          {new Date(post.publishedDate).toLocaleDateString('es-CL', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      )}
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-warm-gray text-lg">
                  Próximamente publicaremos contenido aquí.
                </p>
                <p className="text-warm-gray-light mt-2">
                  Vuelve pronto para leer reflexiones sobre psicoterapia y bienestar.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      {settings.whatsapp && <WhatsAppButton phoneNumber={settings.whatsapp} />}
    </>
  )
}
