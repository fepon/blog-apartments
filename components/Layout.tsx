import { ReactChild } from 'react'
import { Header } from './'

const Layout = ({ children }: { children: ReactChild }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
