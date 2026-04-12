import { Contact } from '@/components/contact'
import { CTA } from '@/components/cta'
import { Eudr } from '@/components/eudr'
import { FAQ } from '@/components/faq'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import Ideology from '@/components/ideology'
import { Process } from '@/components/process'
import { Solution } from '@/components/solution'
import { Testimonials } from '@/components/testimonials'
import { UseCases } from '@/components/use-cases'

export const metadata = {
  title: 'SmartKakao — Traçabilité blockchain café‑cacao (EUDR)',
  description:
    'SmartKakao assure une traçabilité complète et immuable de chaque lot (GPS, poids, photos), du producteur au marché européen, avec certificats EUDR et preuves cryptographiques.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      {/*<Stats />*/}
      <Features />

      <Solution />
     
      <Eudr />
      <Ideology />
      {/*  <Partners />*/}


      <Process />
      <FAQ />


      <Testimonials />

      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
