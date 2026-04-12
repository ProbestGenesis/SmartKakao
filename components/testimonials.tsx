'use client'

import { motion } from "motion/react"
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'La blockchain a transformé notre accès au marché européen. Nous obtenons maintenant des prix équitables avec transparence totale.',
    author: 'Kwame Mensah',
    role: 'Producteur de Cacao, Togo',
    rating: 5,
  },
  {
    quote: 'Enfin une source fiable et certifiée de cacao premium. Les garanties de qualité et de traçabilité sont incomparables.',
    author: 'Amelie Dubois',
    role: 'Chocolaterie Artisanale, France',
    rating: 5,
  },
  {
    quote: 'Le système de contrats intelligents a éliminé les délais de paiement. Nous pouvons maintenant investir plus rapidement dans nos cultures.',
    author: 'Kofi Mensah',
    role: 'Coopérative Agricole, Togo',
    rating: 5,
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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-8 rounded-2xl border border-border bg-card"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <blockquote className="text-lg mb-6 text-foreground leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
