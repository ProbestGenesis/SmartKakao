'use client'

import { motion } from 'motion/react'
import { User, Warehouse, Factory, Ship, BadgeCheck } from 'lucide-react'

const actors = [
  {
    icon: User,
    title: 'Agriculteurs',
    description: 'Enregistrent les récoltes et lots (GPS, photos, poids) sur le terrain.',
    example: 'Ex: Koffi (Kpalimé)',
  },
  {
    icon: Warehouse,
    title: 'Coopératives',
    description: 'Collectent, contrôlent, regroupent des lots, et maintiennent la traçabilité individuelle.',
    example: 'Ex: CACAOKPALIME',
  },
  {
    icon: Factory,
    title: 'Transformateurs',
    description: 'Fermentation, contrôle qualité et préparation, avec enregistrement des étapes clés.',
    example: 'Acteur de transformation',
  },
  {
    icon: Ship,
    title: 'Exportateurs',
    description: 'Conditionnent, expédient et assurent la continuité de traçabilité jusqu’au port et au transport.',
    example: 'Ex: TOGO EXPORT',
  },
  {
    icon: BadgeCheck,
    title: 'Importateurs européens',
    description: 'Vérifient l’historique, les preuves et la conformité EUDR avant achat et mise sur le marché.',
    example: 'Ex: CHOCO HOLLAND BV',
  },
]

export function Stakeholders() {
  return (
    <section id="actors" className="py-20 sm:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Acteurs de la filière
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            SmartKakao sécurise les échanges entre tous les acteurs, en conservant une chaîne de preuves cohérente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {actors.map((a, index) => {
            const Icon = a.icon
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.03 + index * 0.07 }}
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 hover:bg-card/70 hover:border-accent/25 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{a.description}</p>
                <p className="text-xs text-muted-foreground/80">{a.example}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

