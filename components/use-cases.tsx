'use client'

import { motion } from 'motion/react'
import { Leaf, Repeat, QrCode, Layers } from 'lucide-react'
import { DecorativeBubbles } from './decorative-bubbles'

const useCases = [
  {
    icon: Leaf,
    title: 'Enregistrement de récolte',
    description:
      'Création d’un lot directement depuis la parcelle avec GPS, poids, type de produit et photos. Chaque récolte devient une preuve vérifiable.',
  },
  {
    icon: Repeat,
    title: 'Transfert à la coopérative',
    description:
      'Signature numérique du transfert de propriété (agriculteur → coopérative), avec horodatage et pièces justificatives pour éviter les fraudes.',
  },
  {
    icon: QrCode,
    title: 'Contrôle par l’importateur',
    description:
      'Consultation instantanée de l’historique complet via QR code ou identifiant unique, avant achat ou dédouanement en Europe.',
  },
  {
    icon: Layers,
    title: 'Regroupement de lots',
    description:
      'Création de lots regroupés tout en conservant la traçabilité individuelle des lots sources, garantissant conformité EUDR et certifications.',
  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="relative pt-10 pb-20 sm:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl tracking-tight font-bold text-foreground leading-tight">
          <strong className="border border-primary p-2 text-primary mb-1.5">ChainCacao</strong> Une chaîne de valeur 
        </h2>

        <p className="text-lg text-muted max-w-2xl mt-4">
          Chaque étape de la filière café‑cacao devient une preuve consultable. 
          De la parcelle togolaise jusqu’à l’importateur européen, ChainCacao relie les acteurs 
          et sécurise la conformité au règlement EUDR 2025.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {useCases.map((uc, index) => {
            const Icon = uc.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 + index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 hhover:border-accent/25 hover:bg-white transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-accent" />
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
