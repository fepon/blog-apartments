import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2022{' '}
        <a href="https://flowbite.com" className="hover:underline">
          FEPON
        </a>
        . Todos los derechos reservados.
      </span>
      <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <Link href="https://github.com/HilmAlex">
          <a>
            Desarrollado por <b>Alex Padilla</b>
          </a>
        </Link>
        {/* <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li> */}
      </ul>
    </footer>
  )
}

export default Footer
