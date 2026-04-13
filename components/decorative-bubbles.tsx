'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

interface BubblePosition {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

interface BubbleData {
  pos: BubblePosition
  size: number
  duration: number
  color: string
}

interface BubbleConfig {
  count?: number
  colors?: string[]
  minSize?: number
  maxSize?: number
  positions?: BubblePosition[]
}

export function DecorativeBubbles({
  count = 3,
  colors = ['bg-orange-500', 'bg-orange-400', 'bg-accent/40'],
  minSize = 40,
  maxSize = 200,
  positions,
}: BubbleConfig) {
  const [bubbles, setBubbles] = useState<BubbleData[]>([])

  useEffect(() => {
    // Stable random values generated only on mount in the client
    const generateRandomPos = () => ({
      top: Math.random() > 0.5 ? `${Math.random() * 30}%` : undefined,
      bottom: Math.random() > 0.5 ? `${Math.random() * 30}%` : undefined,
      left: Math.random() > 0.5 ? `${Math.random() * 20}%` : undefined,
      right: Math.random() > 0.5 ? `${Math.random() * 20}%` : undefined,
    })

    const initialBubbles = Array.from({ length: count }).map((_, index) => {
      const pos = positions ? positions[index % positions.length] : generateRandomPos()
      return {
        pos,
        size: minSize + Math.random() * (maxSize - minSize),
        duration: 15 + Math.random() * 10,
        color: colors[index % colors.length],
      }
    })

    setBubbles(initialBubbles)
  }, [count, colors, minSize, maxSize, positions])

  if (bubbles.length === 0) return null

  return (
    <>
      {bubbles.map((bubble, index) => (
        <motion.div
          key={`bubble-${index}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
            ease: 'easeOut',
          }}
          className={`absolute pointer-events-none ${bubble.color} rounded-full blur-3xl`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            ...bubble.pos,
            zIndex: 0,
          }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full h-full"
          />
        </motion.div>
      ))}
    </>
  )
}
