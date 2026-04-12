'use client'

import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'Produit',
      links: [
        { label: 'Plateforme', href: '#' },
        { label: 'Tarification', href: '#' },
        { label: 'Sécurité', href: '#' },
      ],
    },
    {
      title: 'Entreprise',
      links: [
        { label: 'À propos', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Carrières', href: '#' },
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
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-accent-foreground">BC</span>
              </div>
              <span className="font-semibold">BlockChain Cacao</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Révolutionner le marché du cacao avec la technologie blockchain et la transparence.
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
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
              © {currentYear} BlockChain Cacao. Tous les droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
