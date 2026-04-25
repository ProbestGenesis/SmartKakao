'use client'

import { motion } from 'motion/react'
import { DecorativeBubbles } from './decorative-bubbles'

type Member = {
  id: string
  name: string
  role: string
  bio?: string
  skills?: string[]
  avatarColor?: string
  contacts?: {
    github?: string
    twitter?: string
    email?: string
  }
}

type Props = {
  members?: Member[]
}

/**
 * Composant Team élégant et responsive pour présenter l'équipe de dev.
 * - Cards avec avatar stylisé (initiales), rôle, bio courte et skills en badges.
 * - Hover animé : légère élévation + reveal des contacts.
 * - Accessible (aria) et facilement personnalisable via la prop `members`.
 */

const defaultMembers: Member[] = [
  {
    id: '1',
    name: 'KOUMOND K.',
    role: 'Lead mobile',
    bio: 'Coordination terrain — du product backlog aux coopératives.',
    skills: ['Fluter', 'Dart', 'Java'],
    avatarColor: 'bg-accent/60',
  },
  {
    id: '2',
    name: 'Dimon A.',
    role: 'Lead Frontend web',
    bio: "Design d'interfaces accessibles et performantes.",
    skills: ['React', 'Tailwind', 'UX'],
    avatarColor: 'bg-cacao-500',
  },
  {
    id: '3',
    name: 'KPATOU P.',
    role: 'Backend & Infra',
    bio: 'API résilientes, synchronisation offline et preuves immuables.',
    skills: ['FAST API', 'Postgres', 'Docker'],
    avatarColor: 'bg-cacao-400',
  },
  {
    id: '4',
    name: 'NOVIVO O.',
    role: 'Data Architect',
    bio: 'Validation des données terrain.',
    skills: ['Python', 'Pandas', 'Postgres'],
    avatarColor: 'bg-accent/70',
  },
]

export default function Team({ members = defaultMembers }: Props) {
  return (
    <section id="team" className="relative py-20 sm:py-32 bg-background border-t border-border">
      <DecorativeBubbles
        count={4}
        colors={['bg-cacao-500', 'bg-cacao-400', 'bg-accent/40', 'bg-accent/20']}
        minSize={40}
        maxSize={140}
        positions={[
          { top: '6%', left: '6%' },
          { top: '12%', right: '8%' },
          { bottom: '8%', left: '10%' },
          { bottom: '18%', right: '6%' },
        ]}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
            L'équipe{' '}
            <strong className="text-lg font-bold text-accent border p-2 ">BeGEEK</strong>{' '}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Les développeurs derrière <span className="text-primary">ChainCacao</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Une équipe de terrain qui rend le travail des producteurs visible, vérifiable et mieux
            rémunéré.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <motion.article
              key={m.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 hover:shadow-lg hover:scale-[1.02] transition-transform"
              aria-labelledby={`member-${m.id}-name`}
            >
              <div className="flex items-start gap-4">
                {/* Avatar stylisé avec initiales */}
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-white font-semibold text-lg ${m.avatarColor} ring-1 ring-accent/10`}
                  aria-hidden
                >
                  {m.name
                    .split(' ')
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')
                    .toUpperCase()}
                </div>

                <div className="flex-1 min-w-0">
                  <h3
                    id={`member-${m.id}-name`}
                    className="text-base font-semibold text-foreground"
                  >
                    {m.name}
                  </h3>
                  <p className="text-sm text-accent/90 mt-1">{m.role}</p>

                  <p className="text-sm text-muted-foreground mt-3 line-clamp-3">{m.bio}</p>

                  {/* Skills */}
                  {m.skills && m.skills.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {m.skills.map((s) => (
                        <span
                          key={s}
                          className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md border border-accent/10"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/**Decoration */}
              <div className="pointer-events-none absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br from-accent/10 to-accent/5 blur-sm opacity-60" />
            </motion.article>
          ))}
        </div>

        {/* CTA / note 
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Besoin d’un profil précis pour le projet ? Nous pouvons ajouter des fiches détaillées (expérience, missions, disponibilité).
          </p>
        </div>*/}
      </div>
    </section>
  )
}
