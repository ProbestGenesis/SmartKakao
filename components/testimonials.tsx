'use client'

import { motion } from "motion/react"
import { Star } from 'lucide-react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const testimonials = [
  {
    quote: 'Avec SmartKakao, j’enregistre mes récoltes avec GPS et photos. La coopérative et l’exportateur voient tout, et l’importateur vérifie au QR code.',
    name: 'Koffi',
    title: 'Producteur, Kpalimé (Togo)',
  },
  {
    quote: 'La traçabilité de bout en bout et les preuves EUDR nous font gagner un temps précieux. Nous validons les lots avant expédition, sans ambiguïté.',
    name: 'CHOCO HOLLAND BV',
    title: 'Importateur, Rotterdam',
  },
  {
    quote: 'Le regroupement de lots conserve l’historique individuel. C’est exactement ce qu’il nous fallait pour industrialiser la collecte sans perdre la traçabilité.',
    name: 'CACAOKPALIME',
    title: 'Coopérative, Togo',
  },
]

export function Testimonials() {
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
            Témoignages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Producteurs, coopératives et importateurs partagent leur expérience avec SmartKakao.
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased min-h-[300px]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
        />
    </div>
      </div>
    </section>
  )
}
