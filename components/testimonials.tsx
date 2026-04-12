'use client'

import { motion } from "motion/react"
import { Star } from 'lucide-react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const testimonials = [
  {
    quote: 'La blockchain a transformé notre accès au marché européen. Nous obtenons maintenant des prix équitables avec transparence totale.',
    name: 'Kwame Mensah',
    title: 'Producteur de Cacao, Togo',
  },
  {
    quote: 'Enfin une source fiable et certifiée de cacao premium. Les garanties de qualité et de traçabilité sont incomparables.',
    name: 'Amelie Dubois',
    title: 'Chocolaterie Artisanale, France',
  },
  {
    quote: 'Le système de contrats intelligents a éliminé les délais de paiement. Nous pouvons maintenant investir plus rapidement dans nos cultures.',
    name: 'Kofi Mensah',
    title: 'Coopérative Agricole, Togo',
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
            Les producteurs et acheteurs partagent leur succès avec BlockChain Cacao.
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
