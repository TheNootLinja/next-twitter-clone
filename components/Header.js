import Image from 'next/image'

const Header = () => {
  return (
    <div className='bg-[rgba(0,0,0,.60)] h-12 flex items-center justify-between px-4 sticky top-0 backdrop-blur-md'>
      <div className="flex items-center">
        <div className="bg-blue-500 h-8 w-8 rounded-full overflow-hidden">
          <Image width='100%' height='100%' alt='profile picture' src="https://pbs.twimg.com/profile_images/896121832365019137/FSNKW7qF_400x400.jpg"/>
        </div>
        <h1 className="font-bold ml-5">Home</h1>
      </div>
      <div className="h-10 w-10 flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
    </div>
  )
}

export default Header