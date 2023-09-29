import Image from 'next/image'

const Problem = () => (
  <div className="flex flex-col px-5 py-20 md:flex-row md:items-end md:px-10percen">
    <div>
      <Image className="h-full w-full object-cover md:hidden" width={654} height={448} src="./images/mobile/image-interactive.jpg" alt="man with vr" />
      <Image className="hidden h-full w-[60vw] md:block" width={731} height={500} src="./images/desktop/image-interactive.jpg" alt="man with vr" />
    </div>
    <div className="bg-white px-3 md:-ml-10percen md:flex md:w-2/4 md:flex-col md:px-0 md:pl-5percen md:pt-5percen lg:pl-5percen lg:pt-5percen">
      <h1 className="pb-6 pt-14 text-center text-3xl uppercase md:pt-0 md:text-left md:text-lg lg:text-3xl xl:text-4xl">The leader in interactive VR</h1>

      <p className="px-5 text-center font-secondary font-light text-Dark-Gray md:px-0 md:text-left md:text-xs lg:text-base">
        Founded in 2011, Loopstudios has been producing world-class virtual reality
        projects for some of the best companies around the globe. Our award-winning
        creations have transformed businesses through digital experiences that bind
        to their brand.
      </p>

    </div>
  </div>
)

export default Problem
