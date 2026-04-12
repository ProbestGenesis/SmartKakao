'use client'

import { motion } from "motion/react"
import { Button } from '@/components/ui/button'
import { ArrowRight, Star } from 'lucide-react'
import appleBadge from "@/public/assets/appleStore.svg"
import googleBadge from "@/public/assets/googlePlay.svg"
import Image from "next/image"


/* ── Mock review avatars ────────────────────────────────────────────── */
const avatars = [
  { initials: 'KA', color: 'bg-amber-500' },
  { initials: 'MO', color: 'bg-emerald-500' },
  { initials: 'FD', color: 'bg-sky-500' },
  { initials: 'YB', color: 'bg-rose-500' },
]

export function CTA() {
  return (
    <section className="py-20 sm:py-32 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >

          {/* ── LEFT — main CTA content ───────────────────────────────── */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight">
                Prêt à transformer
                <br />
                <span className="text-accent">votre cacao&nbsp;?</span>
              </h2>
              <p className="text-lg text-background/70 leading-relaxed max-w-lg">
                Rejoignez des centaines de producteurs et d&apos;acheteurs qui utilisent déjà{' '}
                <strong className="text-background/90">BlockChain Cacao</strong> pour maximiser
                leurs profits et garantir la qualité.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-medium inline-flex items-center gap-2 group">
                Commencer Maintenant
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="h-12 border-background/25 text-background hover:bg-background/10"
              >
                Demander une Démo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-background/55 pt-2">
              {['Accès immédiat', 'Support 24/7', 'Gratuit 30 jours'].map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — app download ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-background/10 bg-background/5 backdrop-blur-sm p-8 sm:p-10 space-y-8"
          >
            {/* Header */}
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Application mobile
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                Gérez vos récoltes<br />
                depuis votre poche
              </h3>
              <p className="text-background/60 text-sm leading-relaxed">
                Suivez vos transactions, consultez les certifications et recevez vos paiements en temps réel, où que vous soyez.
              </p>
            </div>

            {/* Feature list */}
            <ul className="space-y-2.5 text-sm text-background/70">
              {[
                'Notifications de paiement instantané',
                'Suivi GPS de vos livraisons',
                'Certificats téléchargeables hors-ligne',
                'Tableau de bord de récolte en direct',
              ].map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 rounded-full bg-accent/15 flex-shrink-0 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </span>
                  {feat}
                </li>
              ))}
            </ul>

            {/* Store badges */}
            <div className="space-y-3 flex -row">
              <a
                href="#"
                aria-label="Télécharger sur l'App Store"
                className="block w-full h-12 hover:opacity-80 active:scale-[0.98] transition-all"
              >
                <Image src={appleBadge} alt="Apple Store" width={120} height={40} />
              </a>
              <a
                href="#"
                aria-label="Télécharger sur Google Play"
                className="block w-full h-12 hover:opacity-80 active:scale-[0.98] transition-all"
              >
               <Image src={googleBadge} alt="Google Play" width={120} height={40} />
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 pt-1">
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                {avatars.map((a) => (
                  <span
                    key={a.initials}
                    className={`w-7 h-7 rounded-full ${a.color} border-2 border-foreground flex items-center justify-center text-[9px] font-bold text-white`}
                  >
                    {a.initials}
                  </span>
                ))}
              </div>
              {/* Stars + label */}
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[11px] text-background/50 mt-0.5">
                  +240 producteurs satisfaits
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}