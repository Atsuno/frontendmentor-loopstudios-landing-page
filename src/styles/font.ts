import { Alata, Josefin_Sans } from 'next/font/google'

const fontPrimary = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-primary',
})

const fontSecondary = Alata({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-secondary',
})

const useFonts = [fontPrimary, fontSecondary]

/* #####################
 * Magic
 ####################### */
const fontClass = useFonts.map((font) => (
  font.variable
)).join(' ')

export default fontClass
