import React from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Layout = ({ nav = false, footer = true, children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col dark:bg-black bg-white  bg-bodyBg">
        {nav && <Header />}
        <main className="wrapper dark:bg-gray-600">{children}</main>
        { footer && <Footer /> }
      </div>
    </>
  )
}

export default Layout
