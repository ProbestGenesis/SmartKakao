import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Stats } from '@/components/stats'
import { Solution } from '@/components/solution'
import { Process } from '@/components/process'
import { Partners } from '@/components/partners'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { CTA } from '@/components/cta'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'BlockChain Cacao - Traçabilité du Cacao Togolais',
  description: 'Révolutionnez la chaîne d\'approvisionnement du cacao avec la technologie blockchain. Connectez les producteurs togolais au marché européen avec transparence totale.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Process />
      <Solution />
      <Partners />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
