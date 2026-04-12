'use client'

import { motion } from 'motion/react'
import { Leaf, Repeat, QrCode, Layers } from 'lucide-react'

const useCases = [
  {
    icon: Leaf,
    title: 'Enregistrement de récolte',
    description: 'Création d’un lot avec GPS, poids, type de produit et photos, directement depuis la parcelle.',
  },
  {
    icon: Repeat,
    title: 'Transfert à la coopérative',
    description: 'Transfert de propriété signé (agriculteur → coopérative), avec horodatage et pièces justificatives.',
  },
  {
    icon: QrCode,
    title: 'Vérification importateur',
    description: 'Consultation instantanée de l’historique complet via QR code ou identifiant, avant achat ou dédouanement.',
  },
  {

    icon: Layers,
    title: 'Regroupement de lots',
    description: 'Création de lots regroupés tout en conservant la traçabilité individuelle des lots sources.',
  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 sm:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, index) => {
            const Icon = uc.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 + index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 hover:bg-card/70 hover:border-accent/25 transition-colors"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                 
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{uc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

