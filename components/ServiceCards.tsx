'use client'

import { useState } from 'react'

interface Modality {
  name: string
  price?: string
}

interface Service {
  name: string
  description: string
  modalities: Modality[]
  duration: string
  price: string
}

export default function ServiceCards({ services }: { services: Service[] }) {
  const [activeService, setActiveService] = useState(0)
  const [activeModality, setActiveModality] = useState(0)

  const current = services[activeService]
  if (!current) return null

  const currentPrice = current.modalities?.[activeModality]?.price || current.price

  return (
    <div>
      {/* Service type selector */}
      <div className="flex flex-col sm:flex-row gap-2 mb-8">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => { setActiveService(index); setActiveModality(0) }}
            className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeService === index
                ? 'bg-sage text-white shadow-md'
                : 'bg-cream text-warm-gray hover:bg-cream-dark hover:text-foreground'
            }`}
          >
            {service.name}
          </button>
        ))}
      </div>

      {/* Selected service detail */}
      <div className="border border-cream-dark rounded-lg p-8 transition-all duration-300">
        <h2 className="text-2xl font-bold mb-4 text-foreground">{current.name}</h2>
        <p className="text-warm-gray leading-relaxed mb-8">{current.description}</p>

        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-medium text-warm-gray-light mb-3">Modalidad</h3>
            <div className="flex flex-wrap gap-2">
              {current.modalities?.map((mod, i) => (
                <button
                  key={i}
                  onClick={() => setActiveModality(i)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                    activeModality === i
                      ? 'bg-sage text-white shadow-sm'
                      : 'bg-cream text-warm-gray hover:bg-cream-dark'
                  }`}
                >
                  {mod.name}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-warm-gray-light mb-3">Duración</h3>
            <p className="text-foreground text-lg">{current.duration}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-warm-gray-light mb-3">Valor</h3>
            <p className="text-2xl font-semibold text-sage-dark">{currentPrice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
