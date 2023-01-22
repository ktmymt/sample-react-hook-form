import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className='p-10'>
      <nav>
        <ul className='flex items-center'>
          <div className='mr-20'>
            <Image src='/next.svg' className='w-32' width='40' height='40' alt='logo' />
          </div>
          <div className='flex space-x-8'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/form'>Form</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}
