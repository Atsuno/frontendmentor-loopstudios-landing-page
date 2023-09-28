import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frontendmentor | Loopstudios Landing Page',
  description: 'Challenge Loopstudios Landing Page',
}

const PageHome = () => (
  <main className="flex min-h-screen flex-col items-center justify-center gap-10 text-7xl">
    <p className="text-primary">Hello World!!</p>
    <p className="text-5xl">Test Font Primary</p>
    <p className="font-secondary text-5xl ">Test Font Secondary</p>
  </main>
)

export default PageHome
