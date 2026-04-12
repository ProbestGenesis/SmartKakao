'use client'

import { motion } from "motion/react"
import { CheckCircle, Leaf, Package, TrendingUp } from 'lucide-react'

const processSteps = [
  {
    icon: Leaf,
    title: 'Production',
    description: 'Producteurs enregistrent et cultivent le cacao certifié',
  },
  {
    icon: CheckCircle,
    title: 'Vérification',
    description: 'Tests qualité et certification blockchain',
  },
  {
    icon: Package,
    title: 'Expédition',
    description: 'Traçage en temps réel jusqu\'au client européen',
  },
  {
    icon: TrendingUp,
    title: 'Paiement',
    description: 'Contrats intelligents automatisent le règlement',
  },
]

export function Process() {
  return (
    <section className="py-20 sm:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Notre Processus Certifié
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quatre étapes simples pour connecter producteurs et acheteurs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                <div className="text-center space-y-4">
                  {/* Step Number Circle */}
                  <div className="inline-flex w-16 h-16 rounded-full bg-accent/10 items-center justify-center relative">
                    <Icon className="w-8 h-8 text-accent" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-accent-foreground">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-8 w-8 h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
