'use client'

import { motion } from "motion/react"
import { Shield, Link as LinkIcon, Zap, Globe, Lock, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Authenticité Vérifiée',
    description: 'Chaque cacao est enregistré sur la blockchain, garantissant son authenticité et son origine togolaise.',
  },
  {
    icon: LinkIcon,
    title: 'Traçabilité Complète',
    description: 'Suivez chaque étape du voyage du cacao du producteur togolais jusqu\'au marché européen.',
  },
  {
    icon: Zap,
    title: 'Transactions Rapides',
    description: 'Eliminé les intermédiaires avec des contrats intelligents, accélérant le paiement aux producteurs.',
  },
  {
    icon: Globe,
    title: 'Marché Global',
    description: 'Connectez directement les producteurs togolais avec les acheteurs européens certifiés.',
  },
  {
    icon: Lock,
    title: 'Sécurité Maximale',
    description: 'Technologie blockchain immuable pour protéger la qualité et les données des transactions.',
  },
  {
    icon: TrendingUp,
    title: 'Valeur Accrue',
    description: 'Les produits certifiés blockchain obtiennent une prime de 20-30% sur le marché européen.',
  },
]

export function Features() {
  return (
    <section id="benefits" className="py-20 sm:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Avantages de la Blockchain
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une approche globale pour moderniser le marché du cacao africain avec technologie et intégrité.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + index * 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
                className="p-8 rounded-2xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
