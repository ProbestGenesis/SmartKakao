'use client'

import { motion } from 'motion/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { DecorativeBubbles } from "./decorative-bubbles"

const faqs = [
  {
    question: 'Comment SmartKakao assure la traçabilité d’un lot ?',
    answer: 'Chaque lot est enregistré avec des données terrain (GPS, poids, type de produit, photos) puis suivi à chaque transfert de propriété. L’historique devient vérifiable et immuable.',
  },
  {
    question: 'En quoi cela aide pour l’EUDR (anti‑déforestation) ?',
    answer: 'SmartKakao structure les preuves (coordonnées, photos, documents) et permet de générer des certificats EUDR et des preuves cryptographiques associées à chaque lot.',
  },
  {
    question: 'Peut-on regrouper des lots sans perdre la traçabilité ?',
    answer: 'Oui. La coopérative peut créer un lot regroupé tout en conservant la traçabilité individuelle de chaque lot source (chaîne d’agrégation).',
  },
  {
    question: 'Comment un importateur européen vérifie-t-il l’historique ?',
    answer: 'Via un QR code ou un identifiant, l’importateur consulte instantanément le parcours complet et les éléments de preuve associés.',
  },
  {
    question: 'La plateforme couvre café et cacao ?',
    answer: 'Oui. SmartKakao est conçu pour la filière café‑cacao: les lots peuvent être typés (café / cacao) et suivis avec les mêmes garanties de traçabilité.',
  },
  {
    question: 'Quel niveau de technologie est requis sur le terrain ?',
    answer: 'Basique: un smartphone et une connexion Internet. L’expérience est pensée pour rester utilisable avec une connectivité limitée.',
  },
]

export function FAQ() {
  return (
    <section className="relative py-20 sm:py-32 bg-background border-t border-border">
      <DecorativeBubbles
        count={2}
        colors={['bg-cacao-400', 'bg-accent/35']}
        minSize={50}
        maxSize={170}
        positions={[
          { top: '25%', right: '8%' },
          { bottom: '30%', left: '5%' },
        ]}
      />

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
