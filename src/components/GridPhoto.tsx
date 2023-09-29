import Image from 'next/image'

type GalleryPhoto = {
  name: string
  photoMobile: string
  photoDesktop: string
}

const galleryPhotos: Array<GalleryPhoto> = [{
  name: 'Deep earth',
  photoMobile: './images/mobile/image-deep-earth.jpg',
  photoDesktop: './images/desktop/image-deep-earth.jpg',
},
{
  name: 'Night arcade',
  photoMobile: './images/mobile/image-night-arcade.jpg',
  photoDesktop: './images/desktop/image-night-arcade.jpg',
},
{
  name: 'Soccer team VR',
  photoMobile: './images/mobile/image-soccer-team.jpg',
  photoDesktop: './images/desktop/image-soccer-team.jpg',
},
{
  name: 'The grid',
  photoMobile: './images/mobile/image-grid.jpg',
  photoDesktop: './images/desktop/image-grid.jpg',
},
{
  name: 'From up above VR',
  photoMobile: './images/mobile/image-from-above.jpg',
  photoDesktop: './images/desktop/image-from-above.jpg',
},
{
  name: 'Pocket borealis',
  photoMobile: './images/mobile/image-pocket-borealis.jpg',
  photoDesktop: './images/desktop/image-pocket-borealis.jpg',
},
{
  name: 'The curiosity',
  photoMobile: './images/mobile/image-curiosity.jpg',
  photoDesktop: './images/desktop/image-curiosity.jpg',
},
{
  name: 'Make it fisheye',
  photoMobile: './images/mobile/image-fisheye.jpg',
  photoDesktop: './images/desktop/image-fisheye.jpg',
}]

const GridPhoto = () => (
  <>
    <div className="md:flex md:justify-between md:px-10percen">
      <p className="pb-10 text-center text-4xl uppercase">Our creations</p>

      <p className="hidden md:block">
        <button className="border-2 border-black px-10 py-2 font-bold uppercase tracking-widest duration-200 hover:cursor-pointer hover:bg-black hover:text-white" type="button">See all</button>
      </p>
    </div>

    <div className="grid gap-5 px-6  md:grid-cols-4 md:grid-rows-2 md:px-10percen">

      { galleryPhotos.map(({ name, photoMobile, photoDesktop }) => (
        <div key={name} className="group relative">
          <Image className="h-full w-full object-cover md:hidden" width={654} height={240} src={photoMobile} alt={name} />
          <Image className="hidden h-full w-full object-cover  duration-300 group-hover:opacity-30 md:block" width={256} height={450} src={photoDesktop} alt={name} />
          <div className="absolute top-0 h-full w-full bg-gradient-to-r from-black/50 md:bg-gradient-to-t" />
          <p className="absolute bottom-0 left-0 w-40 pb-6 pl-6 text-2xl uppercase leading-none text-white duration-300  group-hover:text-black md:w-36 md:text-xl lg:w-52 lg:text-3xl">{name}</p>

        </div>
      ))}

      <div className="flex justify-center py-10">
        <p>
          <button className="border-2 border-black px-10 py-2 font-bold uppercase tracking-widest duration-200 hover:cursor-pointer hover:bg-black hover:text-white md:hidden" type="button">See all</button>
        </p>
      </div>
    </div>
  </>
)

export default GridPhoto
