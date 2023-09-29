import type { Metadata } from 'next'
import CallToAction from '@/components/CallToAction'
import CodingBy from '@/components/CodingBy'
import ControAction from '@/components/ControAction'
import GridPhoto from '@/components/GridPhoto'
import HeaderTextLine from '@/components/HeaderTextLine'
import LogoHeadLine from '@/components/LogoHeadLine'
import Problem from '@/components/Problem'

export const metadata: Metadata = {
  title: 'Frontendmentor | Loopstudios Landing Page',
  description: 'Challenge Loopstudios Landing Page',
}

const PageHome = () => (
  <section className="md:max-w-8xl">
    <header className="relative flex justify-center md:justify-start">
      <LogoHeadLine />
      <ControAction />
      <HeaderTextLine />
    </header>

    <main>
      <Problem />
      <GridPhoto />
    </main>

    <footer>
      <CallToAction />
      <CodingBy />
    </footer>

  </section>
)

export default PageHome
