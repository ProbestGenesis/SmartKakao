'use client'

import { motion } from "motion/react"

const stats = [
  {
    value: '2,500+',
    label: 'Tonnes de Cacao Tracées',
    description: 'Gérées via notre plateforme blockchain',
  },
  {
    value: '150+',
    label: 'Producteurs Togolais',
    description: 'Directement connectés au marché européen',
  },
  {
    value: '25%',
    label: 'Prime de Prix',
    description: 'Obtenue par les produits certifiés blockchain',
  },
  {
    value: '98%',
    label: 'Satisfaction Clients',
    description: 'Acheteurs européens satisfaits par la qualité',
  },
]

export function Stats() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-8 rounded-xl border border-border bg-card"
            >
              <div className="space-y-3">
                <div className="text-4xl sm:text-5xl font-bold text-accent">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
