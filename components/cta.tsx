'use client'

import { motion } from "motion/react"
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 sm:py-32 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
              Prêt à transformer votre cacao?
            </h2>
            <p className="text-xl text-background/80 leading-relaxed">
              Rejoignez des centaines de producteurs et d&apos;acheteurs qui utilisent déjà BlockChain Cacao pour maximiser leurs profits et garantir la qualité.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-medium inline-flex items-center gap-2 group">
              Commencer Maintenant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="h-12 border-background/30 text-background hover:bg-background/10"
            >
              Demander une Démo
            </Button>
          </div>

          <div className="flex justify-center gap-8 text-sm text-background/60 pt-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Accès immédiat
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Support 24/7
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Gratuit pour 30 jours
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
