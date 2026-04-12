'use client'

import { Button } from '@/components/ui/button'
import { motion } from "motion/react"

import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
        >
          <source src="/video/hero-cacao.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos
        </video>
      </div>

      <div className="container mx-auto px-4  py-20 sm:py-32 sm:pt-0  relative z-10">
        <div className="grid md:grid-cols-2  gap-12 items-center">
          <div>

          </div>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className='bg-foreground/40 p-8 '
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                  <span className="text-white text-sm font-medium">
                    Traçabilité blockchain innovante
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter text-white">
                  Cacao du Togo, Qualité Certifiée
                </h1>

                <p className="text-lg sm:text-xl text-white leading-relaxed tracking-tighter  max-w-lg">
                  Révolutionnez la chaîne d&apos;approvisionnement du cacao avec la technologie blockchain. Garantissez l&apos;authenticité et la traçabilité totale du Togo jusqu&apos;à l&apos;Europe.
                </p>
              </div>

              <div className="flex flex-col justify-end sm:flex-row gap-4">
                <Link href="#contact">
                  <Button className="w-full rounded-full sm:w-auto h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                    Découvrir la solution
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full rounded-full sm:w-auto h-12"
                >
                  Voir la démo
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm">
                <div>
                  <div className="font-bold text-2xl text-gray-200">100%</div>
                  <div className="text-muted-foreground">Traçabilité</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-200">24h</div>
                  <div className="text-muted-foreground">Certifications</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-200">50+</div>
                  <div className="text-muted-foreground">Producteurs</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
         {/* <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[500px] hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl overflow-hidden border border-accent/20">
              
              <img
                src="/cacao-blockchain.jpg"
                alt="Visualisation blockchain du cacao"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>*/}
        </div>
      </div>
    </section>
  )
}
