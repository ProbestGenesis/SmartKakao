'use client'

import protect1 from '@/public/assets/protect1.jpg'
import protect2 from '@/public/assets/protect2.jpg'
import protect3 from '@/public/assets/protect3.jpg'
import clsx from 'clsx'
import { ArrowRight, Pause, Play } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'

const INTERVAL_MS = 10500

const data = [
  {
    title: 'Préserver les forêts et la biodiversité',
    description:
      'Chaque arbre sauvé est une promesse de vie pour les générations futures, un refuge pour les animaux et une respiration pour notre planète.',
    image: protect1,
  },
  {
    title: 'Respect des sols et des écosystèmes',
    description:
      'Protéger la terre, c’est protéger nos racines : des sols fertiles nourrissent la vie, des écosystèmes équilibrés assurent notre avenir.',
    image: protect2,
  },
  {
    title: 'Commerce équitable et durabilité',
    description:
      'Choisir la durabilité, c’est offrir aux producteurs une vie digne tout en préservant la beauté fragile de la nature qui nous entoure.',
    image: protect3,
  },
]


function Ideology() {
  const [idx, setIdx] = useState(0)
  const [isPlay, setIsPlay] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const next = () => setIdx((prev) => (prev + 1) % data.length)

  /* ── Auto-play ─────────────────────────────────────────────────────── */
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (isPlay) {
      intervalRef.current = setInterval(next, INTERVAL_MS)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPlay, idx])


  const isLeft = idx % 2 === 0

  return (
    <section className="py-20 sm:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 space-y-8">

        {/* ── SLIDESHOW ──────────────────────────────────────────────────── */}
        <div className="relative w-full rounded-2xl overflow-hidden h-[260px] sm:h-[320px] lg:h-[550px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              {/* Photo */}
              <Image
                src={data[idx].image}
                alt={data[idx].title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />

              {/* Scrim — more opaque on text side, lighter on the other */}
              <div
                className={clsx(
                  'absolute inset-0 bg-gradient-to-r',
                  isLeft
                    ? 'from-black/70 via-black/30 to-transparent'
                    : 'from-transparent via-black/30 to-black/70'
                )}
              />
            </motion.div>
          </AnimatePresence>

          {/* ── TEXT OVERLAY — alternates left / right ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${idx}`}
              initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLeft ? 28 : -28 }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className={clsx(
                'absolute top-1/2 -translate-y-1/2 px-8 sm:px-12 max-w-[min(470px,85%)]',
                isLeft ? 'left-0 text-left' : 'right-0 text-right'
              )}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-2">
                Les valeurs de SmartKakao
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold text-white leading-tight mb-3 drop-shadow-md">
                {data[idx].title}
              </h2>
              <p className="text-sm lg:text-lg text-white/80 leading-relaxed drop-shadow-sm">
                {data[idx].description}
              </p>
            </motion.div>
          </AnimatePresence>

     
          <div className="absolute top-4 right-4 text-white/50 text-xs font-mono tabular-nums">
            {String(idx + 1).padStart(2, '0')} / {String(data.length).padStart(2, '0')}
          </div>
        </div>

       
        <div className="flex items-center justify-center gap-4">

          {/* Play / Pause */}
          <Button
            className="rounded-full"
            size="icon-sm"
            variant={isPlay ? 'default' : 'outline'}
            onClick={() => setIsPlay((prev) => !prev)}
            aria-label={isPlay ? 'Pause' : 'Play'}
          >
            {isPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </Button>


          <div className="flex items-center gap-2">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
                className={clsx(
                  'h-2 rounded-full transition-all duration-400',
                  i === idx
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/40 w-2 hover:bg-muted-foreground/70'
                )}
              />
            ))}
          </div>

          <Button
            className="rounded-full"
            size="icon-sm"
            variant="outline"
            onClick={next}
            aria-label="Slide suivante"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Ideology
