'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface NavItem {
  label: string
  href: string
}

export default function Navigation({ items }: { items?: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = items || [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre Centro Selves', href: '/sobre-nosotros' },
    { label: 'Atención Psicológica', href: '/servicios' },
    { label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' },
    { label: 'Contacto', href: '/contacto' },
  ]

  return (
    <nav className="bg-background border-b border-cream-dark sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Centro Selves"
              width={120}
              height={48}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-warm-gray hover:text-sage-dark transition-colors text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-warm-gray hover:text-sage-dark transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
