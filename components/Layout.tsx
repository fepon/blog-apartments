import { ReactChild } from 'react'
import { Header } from './'
import Footer from './Footer'

const Layout = ({ children }: { children: ReactChild }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
