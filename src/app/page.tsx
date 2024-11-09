import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/HanzalaA.PNG"
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-full mb-8 shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-4 text-center">Hanzala Afaq</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        I'm a passionate developer with expertise in web technologies. 
        Explore my work and skills to learn more about what I can bring to your team.
      </p>
      <div className="flex space-x-4">
        <Link 
          href="/about" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          About Me
        </Link>
        <Link 
          href="/skills" 
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          My Skills
        </Link>
      </div>
    </div>
  )
}