'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Comment fonctionne la blockchain pour le cacao?',
    answer: 'Chaque étape du cacao (récolte, transformation, expédition) est enregistrée sur la blockchain, créant un registre immuable. Cela garantit l\'authenticité et permet aux acheteurs de vérifier la provenance.',
  },
  {
    question: 'Quel est le coût pour les producteurs?',
    answer: 'Notre plateforme est gratuite pour les 30 premiers jours. Après cela, un tarif basé sur le volume s\'applique, généralement 2-3% du prix de vente, soit moins que les intermédiaires traditionnels.',
  },
  {
    question: 'Combien de temps prend la certification?',
    answer: 'Le processus de certification prend environ 24 heures une fois que tous les documents sont soumis. Les tests de qualité peuvent être accélérés pour un coût supplémentaire.',
  },
  {
    question: 'Comment les paiements sont-ils effectués?',
    answer: 'Les contrats intelligents automatisent les paiements une fois que les critères de qualité sont atteints. Les fonds sont transférés directement au compte du producteur dans les 48 heures.',
  },
  {
    question: 'Puis-je utiliser la plateforme si je suis en Europe?',
    answer: 'Oui! Les acheteurs européens peuvent s\'inscrire gratuitement pour accéder au marché du cacao certifié blockchain avec traçabilité complète.',
  },
  {
    question: 'Quel niveau de technologie est requis?',
    answer: 'Basique! Il suffit d\'une connexion Internet et d\'un téléphone smartphone. Notre interface est conçue pour être accessible même avec une connectivité lente.',
  },
]

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

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
            Questions Fréquentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trouvez les réponses aux questions les plus posées sur BlockChain Cacao.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300 text-left group"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 p-8 rounded-xl border border-accent/20 bg-accent/5 text-center"
        >
          <p className="text-lg text-foreground mb-4">
            Vous n&apos;avez pas trouvé votre réponse?
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors"
          >
            Contactez notre support
          </a>
        </motion.div>
      </div>
    </section>
  )
}
