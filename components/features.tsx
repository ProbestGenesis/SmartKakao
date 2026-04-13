'use client'

import { motion } from "motion/react"
import { Globe, Zap, ShieldCheck } from 'lucide-react'
import WorldMap from "@/components/ui/world-map"
import { DecorativeBubbles } from "./decorative-bubbles"

const simplifiedFeatures = [
  {
    icon: Globe,
    title: 'Vérification instantanée (QR / ID)',
    description: 'Importateurs et auditeurs consultent l’historique complet d’un lot en un scan, du producteur à l’export.',
  },
  {
    icon: Zap,
    title: 'Transferts de propriété sécurisés',
    description: "Chaque changement de propriétaire (agriculteur → coopérative → transformateur → exportateur) est horodaté et immuable.",
  },
  {
    icon: ShieldCheck,
    title: 'Conformité EUDR & preuves',
    description: "Générez des certificats EUDR et des preuves cryptographiques (GPS, photos, pièces) pour faciliter la conformité anti‑déforestation.",
  },
]

const tradeRoutes = [
  {
    start: { lat: 6.1256, lng: 1.2254, label: "Lomé" },
    end: { lat: 48.8566, lng: 2.3522, label: "Paris" },
  },
  {
    start: { lat: 5.3600, lng: -4.0083, label: "Abidjan" },
    end: { lat: 50.8503, lng: 4.3517, label: "Bruxelles" },
  },
  {
    start: { lat: 5.6037, lng: -0.1870, label: "Accra" },
    end: { lat: 47.3769, lng: 8.5417, label: "Bern" },
  },
]

export function Features() {
  return (
    <section
      id="benefits"
      className="relative py-20 sm:py-32 bg-background border-t border-border overflow-hidden"
    >
      <DecorativeBubbles
        count={2}
        colors={['bg-cacao-400', 'bg-accent/45']}
        minSize={70}
        maxSize={200}
        positions={[
          { top: '15%', right: '6%' },
          { bottom: '20%', left: '4%' },
        ]}
      />

      <div className="container mx-auto px-4">

        {/* ── FLOAT WRAPPER ──────────────────────────────────────────────
            On md+, the map card floats right so text flows around it.
            clearfix keeps the section height correct.
        ──────────────────────────────────────────────────────────────── */}
        <div className="clearfix">

          {/* ── MAP CARD — floated right on md+ ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            /* float:right on md+, full width on mobile, sits below header */
            className="
              w-full mb-10
              md:float-right md:w-[52%] md:ml-10 md:mb-8
              lg:w-[55%] lg:ml-14
            "
          >
            <div className="relative">
              {/* Glow blob */}
              <div className="absolute inset-0 bg-accent/10 blur-[90px] rounded-full pointer-events-none" />

              {/* Card */}
              <div className="relative bg-card/20 backdrop-blur-md rounded-[2rem] p-4 sm:p-8 border border-accent/10 shadow-2xl shadow-accent/5">
                <WorldMap dots={tradeRoutes} lineColor="var(--color-accent)" />
              </div>

              {/* Legend */}
              <div className="mt-4 flex justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/80">
                    Afrique • Origine
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/80">
                    Europe • Marché
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── HEADER — sits left of map on md+ ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground leading-tight tracking-tight">
              Une traçabilité prête pour{' '}
              <span className="text-accent">l’export</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-lg">
              SmartKakao relie la filière café‑cacao du Togo au marché européen avec une
              chaîne de preuves vérifiable, du champ jusqu’à l’importateur.
            </p>
          </motion.div>

          {/* ── FEATURE CARDS — flow naturally around the floated map ── */}
          <div className="space-y-4">
            {simplifiedFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.12 }}
                  viewport={{ once: true }}
                  className="
                    flex gap-4 p-4 rounded-xl
                    border border-transparent
                    hover:border-border hover:bg-card/50
                    transition-all group cursor-default
                  "
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* clearfix sentinel — ensures the float is contained */}
          <div className="clear-both" />
        </div>
      </div>
    </section>
  )
}
