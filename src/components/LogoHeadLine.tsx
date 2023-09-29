import Image from 'next/image'

const LogoHeadLine = () => (
  <div>
    <Image className="h-full w-full object-cover md:hidden" priority width={750} height={1300} src="./images/mobile/image-hero.jpg" alt="banner" />
    <Image className="hidden h-full w-full object-contain md:block" priority width={1440} height={650} src="./images/desktop/image-hero.jpg" alt="banner" />
  </div>
)

export default LogoHeadLine
