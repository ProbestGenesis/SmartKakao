'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'Problème', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Cas d’usage', href: '#use-cases' },
    { label: 'Conformité EUDR', href: '#eudr' },
    { label: 'Acteurs', href: '#actors' },
    { label: 'Avantages', href: '#benefits' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold text-accent-foreground">CC</span>
          </div>
          <span className="font-semibold text-sm hidden sm:inline">ChainCacao</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/*<div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Connexion
          </Button>
          <Link href="#contact" className="hidden sm:inline-flex">
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Demander une démo
            </Button>
          </Link>

         
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>*/}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <Button variant="outline" size="sm" className="w-full">
                  Connexion
                </Button>
                <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Demander une démo
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
