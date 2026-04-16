'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { User, Warehouse, Factory, Ship, BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import cooperativeImage from "@/public/assets/cooperative.jpg"
import farmerImage from "@/public/assets/agriculteur.jpg"
import transformerImage from "@/public/assets/transformateur.jpg"
import exporterImage from "@/public/assets/port.jpg"
import supermarketImage from "@/public/assets/supermarket.jpg"

const actors = [
  {
    icon: User,
    title: 'Agriculteurs',
    description: 'Enregistrent les récoltes et lots (GPS, photos, poids) sur le terrain.',
    example: 'Ex: Koffi (Kpalimé)',
    image: farmerImage,
  },
  {
    icon: Warehouse,
    title: 'Coopératives',
    description: 'Collectent, contrôlent, regroupent des lots, et maintiennent la traçabilité individuelle.',
    example: 'Ex: CACAOKPALIME',
    image: cooperativeImage,
  },
  {
    icon: Factory,
    title: 'Transformateurs',
    description: 'Fermentation, contrôle qualité et préparation, avec enregistrement des étapes clés.',
    example: 'Acteur de transformation',
    image: transformerImage,
  },
  {
    icon: Ship,
    title: 'Exportateurs',
    description: 'Conditionnent, expédient et assurent la continuité de traçabilité jusqu’au port et au transport.',
    example: 'Ex: TOGO EXPORT',
    image: exporterImage,
  },
  {
    icon: BadgeCheck,
    title: 'Importateurs européens',
    description: 'Vérifient l’historique, les preuves et la conformité EUDR avant achat et mise sur le marché.',
    example: 'Ex: CHOCO HOLLAND BV',
    image: supermarketImage,
  },
]

function StakeholderCard({ actor, index }: { actor: typeof actors[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = actor.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.03 + index * 0.07 }}
      viewport={{ once: true, amount: 0.3 }}
      className="h-full"
    >
      <div
        className="relative rounded-2xl overflow-hidden bg-muted h-full cursor-pointer group shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container - Full Height */}
        <div className="relative w-full h-72 sm:h-80 lg:h-96 overflow-hidden">
          <Image
            src={actor.image}
            alt={actor.title}
            fill
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
          />

          {/* Border Gradient Overlay (always visible) */}
          <div className="absolute inset-0 border border-border/20 rounded-2xl pointer-events-none" />

          {/* Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.8 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black"
          />

          {/* Content Overlay - Icon + Title + Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6 text-white pointer-events-none"
          >
            {/* Top Icon */}
            <div className="w-12 h-12 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-white" />
            </div>

            {/* Bottom Content */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold leading-snug">{actor.title}</h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/95">{actor.description}</p>
              <p className="text-xs sm:text-sm text-white/70 pt-1 border-t border-white/20">{actor.example}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export function Stakeholders() {
  return (
    <section id="actors" className="relative py-20 sm:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Acteurs de la filière
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ChainCacao sécurise les échanges entre tous les acteurs, en conservant une chaîne de preuves cohérente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {actors.map((actor, index) => (
            <StakeholderCard key={actor.title} actor={actor} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

