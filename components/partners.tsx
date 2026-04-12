'use client'

import { motion } from "motion/react"

const partners = [
  { name: 'EuroChoc Suisse', category: 'Chocolaterie Premium', emoji: '🇨🇭' },
  { name: 'Cacao Africain Corp', category: 'Distributeur', emoji: '🌍' },
  { name: 'Blockchain Labs', category: 'Technologie', emoji: '⛓️' },
  { name: 'Togo Farmers United', category: 'Producteurs', emoji: '🌾' },
  { name: 'Quality Assurance Ltd', category: 'Certification', emoji: '✅' },
  { name: 'European Trade Hub', category: 'Logistique', emoji: '🚀' },
]

export function Partners() {
  return (
    <section className="py-20 sm:py-32 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Nos Partenaires de Confiance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rejoignez un écosystème composé des meilleurs acteurs africains et européens du commerce du cacao.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-md transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {partner.emoji}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-accent font-medium">
                    {partner.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
