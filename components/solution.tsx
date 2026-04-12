'use client'

import Image from "next/image"
import { motion } from "motion/react"
import { Button } from '@/components/ui/button'
import solutionApperçu from "@/public/assets/apperçu.png"
import { UseCases } from "./use-cases"

const steps = [
  {
    number: '01',
    title: 'Enregistrer un lot (UC‑01)',
    description: 'GPS, poids, type de produit, photos: chaque lot reçoit une identité unique et immuable.',
  },
  {
    number: '02',
    title: 'Transférer la propriété (UC‑02)',
    description: 'Chaque remise (agriculteur → coopérative → transformateur → exportateur) est signée et horodatée.',
  },
  {
    number: '03',
    title: 'Regrouper sans perdre l’historique (UC‑04)',
    description: 'La coopérative peut regrouper des lots tout en conservant la traçabilité individuelle de chacun.',
  },
  {
    number: '04',
    title: 'Vérifier & certifier (UC‑03)',
    description: 'QR code/ID pour consulter l’historique, puis génération de certificats EUDR et preuves cryptographiques.',
  },
]

export function Solution() {
  return (
    <section id="solution" className=" overflow-hidden">

      {/* ── HERO IMAGE BLOCK ──────────────────────────────────────────
          The image fills the full viewport width and dominates.
          Title is overlaid at the bottom-left for magazine impact.
      ────────────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]">

        {/* Photo — object-cover fills the frame, top-anchored for faces/crops */}
        <Image
          src={solutionApperçu}
          alt="Aperçu de la solution SmartKakao"
          fill
          quality={75}
          loading="lazy"
          className="object-cover object-top"
          sizes="100vw"
        />

       
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-16 pb-12 sm:pb-16">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold rounded-full border border-transparent bg-accent-foreground w-fit p-1 uppercase tracking-tight  text-primary mb-3">
                La solution fiable
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-2xl">
                De la parcelle<br />
                <span className="text-accent-foreground">à l’importateur européen</span>
              </h2>
            </motion.div>
          </div>
        </div>
      </div>

      <UseCases />


    {/*  <div className="container mx-auto  px-4 py-16 sm:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 p-10 sm:p-14 rounded-2xl bg-foreground text-background text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Prêt à sécuriser votre traçabilité&nbsp;?
          </h3>
          <p className="text-base sm:text-lg mb-8 opacity-80 max-w-xl mx-auto">
            Déployez SmartKakao pour enregistrer, transférer, regrouper et certifier des lots café‑cacao, en conformité EUDR.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium h-12 px-8 text-sm">
            Planifier une démo
          </Button>
        </motion.div>
      </div>*/}
    </section>
  )
}
