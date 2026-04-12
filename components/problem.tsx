'use client'

import { motion } from 'motion/react'
import { AlertTriangle, FileSearch, Link2, ShieldCheck } from 'lucide-react'

const painPoints = [
  {
    icon: FileSearch,
    title: 'Manque de preuves exploitables',
    description:
      'Les données terrain (GPS, photos, documents) sont souvent dispersées, difficiles à auditer et fragiles face à la fraude.',
  },
  {
    icon: Link2,
    title: 'Ruptures de traçabilité',
    description:
      'Les transferts entre acteurs (producteur, coopérative, transformateur, exportateur) perdent l’historique ou le rendent invérifiable.',
  },
  {
    icon: AlertTriangle,
    title: 'Risque de non‑conformité EUDR',
    description:
      'Sans chaîne de preuves claire anti‑déforestation, l’accès au marché européen devient plus lent, plus coûteux, voire bloqué.',
  },
  {
    icon: ShieldCheck,
    title: 'Perte de valeur pour les producteurs',
    description:
      'L’absence de transparence limite la négociation et l’accès au premium, malgré des pratiques de qualité sur le terrain.',
  },
]

export function Problem() {
  return (
    <section id="problem" className="py-20 sm:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4 relative">

        <AlertTriangle color='red' size={"80"} className='absolute -top-10 right-6 rotate-12 z-10 ' />
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Le problème
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Sans preuves, la traçabilité devient une promesse…
              <span className="block text-accent mt-2">pas une garantie.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              La filière café‑cacao a besoin d’un registre fiable pour relier chaque lot à sa parcelle,
              suivre les transferts de propriété et produire des preuves EUDR vérifiables — sans alourdir
              le travail sur le terrain.
            </p>

            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
              <p className="text-sm text-foreground/90 leading-relaxed">
                SmartKakao est né pour transformer des informations éparses en une{' '}
                <span className="font-semibold">chaîne de preuves</span> consultable instantanément (QR/ID),
                de la parcelle de l’agriculteur jusqu’à l’importateur européen.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {painPoints.map((p, index) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.05 + index * 0.08 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 hover:bg-card/70 hover:border-accent/25 transition-colors"
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
        </div>
      </div>
    </section>
  )
}

