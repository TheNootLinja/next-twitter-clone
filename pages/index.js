import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex justify-center items-center bg-blue-500 h-screen'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-red-500 h-fit'>
        <h1 className='text-3xl font-bold underline'>It Works!</h1>
      </main>
    </div>
  )
}
