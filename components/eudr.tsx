'use client'

import { motion } from 'motion/react'
import { FileCheck2, MapPin, Shield, Fingerprint, ArrowUpRight } from 'lucide-react'
import { DecorativeBubbles } from './decorative-bubbles'

const pillars = [
  {
    icon: MapPin,
    title: 'Données terrain structurées',
    description: 'Coordonnées GPS, parcelles, photos, dates, poids et type de produit, rattachés à chaque lot.',
  },
  {
    icon: Fingerprint,
    title: 'Preuves cryptographiques',
    description: 'Empreintes (hash) et horodatage des pièces pour garantir l’intégrité et l’immutabilité du dossier.',
  },
  {
    icon: FileCheck2,
    title: 'Certificats EUDR automatiques',
    description: 'Génération de certificats et exports de preuves pour faciliter audits et procédures d’import.',
  },
  {
    icon: Shield,
    title: 'Traçabilité sans rupture',
    description: 'Transferts, regroupements et expédition conservent le lien entre lots sources et lots regroupés.',
  },
]

const govLinks = [
  {
    label: 'Commission Européenne (EUDR)',
    href: 'https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en',
  },
  {
    label: 'CCFCC Togo (Café‑Cacao)',
    href: 'https://ccfcc.tg/',
  },
  {
    label: 'Ministère de l’Agriculture (Togo)',
    href: 'https://agriculture.gouv.tg/',
  },
]

export function Eudr() {
  return (
    <section id="eudr" className="relative py-20 sm:py-32 bg-muted/30 border-t border-border">
      <DecorativeBubbles
        count={3}
        colors={['bg-cacao-500', 'bg-cacao-400', 'bg-accent/40']}
        minSize={60}
        maxSize={190}
        positions={[
          { top: '10%', left: '5%' },
          { bottom: '15%', right: '6%' },
          { top: '55%', right: '3%' },
        ]}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            Conformité
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            EUDR: anti‑déforestation, preuves vérifiables
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            ChainCacao organise les données et les preuves autour de chaque lot afin de faciliter la conformité EUDR
            et la vérification par les acheteurs européens.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, index) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 + index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-6 hover:border-accent/25 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 flex flex-col md:flex-row gap-6"
        >
          <div className="flex-1 rounded-2xl border border-border bg-background/60 p-6 sm:p-8">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Objectif: une <span className="text-foreground font-medium">traçabilité complète et immuable</span> de la parcelle
              jusqu’à l’importateur, avec des éléments de preuve directement consultables.
            </p>
          </div>

          <div className="md:w-72 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">
              Ressources officielles
            </p>
            <div className="grid gap-2">
              {govLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-border bg-background/40 hover:bg-accent/5 hover:border-accent/20 transition-all group"
                >
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-accent transition-colors">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

