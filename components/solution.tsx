'use client'

import Image from "next/image"
import { motion } from "motion/react"
import { Button } from '@/components/ui/button'
import solutionApperçu from "@/public/assets/apperçu.png"

const steps = [
  {
    number: '01',
    title: 'Enregistrement Agricole',
    description: 'Les producteurs togolais enregistrent leurs parcelles et la récolte sur la plateforme blockchain.',
  },
  {
    number: '02',
    title: 'Contrôle Qualité',
    description: 'Certification automatisée avec capteurs IoT pour garantir les standards de qualité européens.',
  },
  {
    number: '03',
    title: 'Traçage Transparent',
    description: "Chaque étape est enregistrée: récolte, transformation, transport, jusqu'à livraison finale.",
  },
  {
    number: '04',
    title: 'Paiement Direct',
    description: 'Les contrats intelligents automatisent le paiement aux producteurs une fois les critères atteints.',
  },
]

export function Solution() {
  return (
    <section id="solution" className="bg-muted/30 overflow-hidden">

      {/* ── HERO IMAGE BLOCK ──────────────────────────────────────────
          The image fills the full viewport width and dominates.
          Title is overlaid at the bottom-left for magazine impact.
      ────────────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]">

        {/* Photo — object-cover fills the frame, top-anchored for faces/crops */}
        <Image
          src={solutionApperçu}
          alt="Aperçu de la solution cacao"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />

        {/* Gradient scrim — fades to section bg at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Side vignette — subtle depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

        {/* Title anchored over the image */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-16 pb-12 sm:pb-16">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-foreground mb-3">
                Comment Ça Marche
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-2xl">
                De la parcelle<br />
                <span className="text-accent-foreground">au marché mondial</span>
              </h2>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── STEPS + CTA ───────────────────────────────────────────────
          Sits below the image, anchored to the section background.
      ────────────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 py-16 sm:py-24">

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative group"
            >
              {/* Connector line between cards on large screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-7 w-8 h-px bg-gradient-to-r from-accent/60 to-transparent z-10" />
              )}

              <div className="p-6 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-accent/30 hover:bg-card/70 transition-all h-full space-y-4">
                <span className="text-4xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors tabular-nums">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 p-10 sm:p-14 rounded-2xl bg-foreground text-background text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Prêt à Transformer Votre Cacao&nbsp;?
          </h3>
          <p className="text-base sm:text-lg mb-8 opacity-80 max-w-xl mx-auto">
            Rejoignez des producteurs innovants et des acheteurs européens qui révolutionnent le commerce du cacao.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium h-12 px-8 text-sm">
            Débuter Maintenant
          </Button>
        </motion.div>
      </div>
    </section>
  )
}