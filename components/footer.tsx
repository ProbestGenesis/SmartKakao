'use client'

import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'Produit',
      links: [
        { label: 'Solution', href: '#solution' },
        { label: 'Cas d’usage', href: '#use-cases' },
        { label: 'Conformité EUDR', href: '#eudr' },
      ],
    },
    {
      title: 'Entreprise',
      links: [
        { label: 'À propos', href: '#about' },
        { label: 'Acteurs', href: '#actors' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Légal',
      links: [
        { label: 'Conditions', href: '#' },
        { label: 'Confidentialité', href: '#' },
        { label: 'Cookies', href: '#' },
      ],
    },
  ]

  return (
    <footer className="bg-foreground text-white  border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-accent-foreground">CC</span>
              </div>
              <span className="font-semibold">ChainCacao</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Traçabilité blockchain café‑cacao du Togo vers l’Europe, avec conformité EUDR.
            </p>
          </div>

          {/* Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ChainCacao. Tous les droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
