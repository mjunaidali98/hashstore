import { Playfair_Display } from 'next/font/google'
import Image from 'next/image';
const playfair = Playfair_Display({ weight: "400", subsets: ['latin'] });

export default function Home() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center p-5">
      <Image width={80} height={100} src="/hash.png" alt='logo' />
      <div className="w-full flex flex-col items-center min-h-[calc(100vh-160px)] justify-center">
        <h1 className='font-normal text-black text-center text-5xl sm:text-6xl md:text-7xl xl:text-8xl'>Great things are coming soon</h1>
        <p className={`${playfair.className} mt-8`}>Stay tuned</p>
      </div>
      <p className={`${playfair.className} text-base`}>
        #HashStore
      </p>
      <p className={`${playfair.className} text-sm flex items-center space-x-1 justify-center`}>
        <span>&copy; </span> <span>{new Date().getFullYear()}</span>
      </p>
    </div>
  )
}
