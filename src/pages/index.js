import { Inter } from '@next/font/google'
import { signIn } from 'next-auth/react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Gaslight</title>
        <meta name="description" content="Get your most played tracks from Spotify." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex flex-col items-center mt-20">
        <h1 className='mb-5 text-3xl font-bold'>Gaslight</h1>
        <button className="text-white px-8 py-2 rounded-full bg-green-500 font-bold text-lg" onClick={() => signIn('spotify', { callbackUrl: "/explore" })}>Login with spotify</button>
      </div>
    </>
  )
}
