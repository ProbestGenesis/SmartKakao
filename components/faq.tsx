'use client'

import { motion } from 'motion/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
  return (
    <section className="py-20 sm:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Section Title Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              Questions Fréquentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Trouvez les réponses aux questions les plus posées sur SmartKakao et notre solution de traçabilité.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-8 p-6 rounded-xl border border-accent/20 bg-accent/5"
            >
              <p className="text-sm text-foreground mb-4">
                Vous n&apos;avez pas trouvé votre réponse?
              </p>
              <a
                href="#contact"
                className="inline-block px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg text-sm font-medium transition-colors"
              >
                Contactez notre support
              </a>
            </motion.div>
          </motion.div>

          {/* Accordion Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-border">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
