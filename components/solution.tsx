'use client'

import { motion } from "motion/react"
import { Button } from '@/components/ui/button'

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
    description: 'Chaque étape est enregistrée: récolte, transformation, transport, jusqu\'à livraison finale.',
  },
  {
    number: '04',
    title: 'Paiement Direct',
    description: 'Les contrats intelligents automatisent le paiement aux producteurs une fois les critères atteints.',
  },
]

export function Solution() {
  return (
    <section id="solution" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Comment Ça Marche
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et transparent pour transformer la production de cacao togolaise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-20 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent" />
                )}

                <div className="space-y-4">
                  <div className="text-5xl font-bold text-accent/20">{step.number}</div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                </p>
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 p-12 rounded-2xl bg-foreground text-background text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Prêt à Transformer Votre Cacao?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Rejoignez des producteurs innovants et des acheteurs européens qui révolutionnent le commerce du cacao.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium h-12">
            Débuter Maintenant
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
