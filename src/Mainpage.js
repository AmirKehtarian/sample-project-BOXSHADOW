import React from 'react'
import { Navbar, Header, Features, Projects, Faq, Footer, Contact } from './components'


const Mainpage = () => {
  return (
    <main>
      <header className="header-bg">
          <Navbar />
          <Header />
      </header>
      <Features />
      <Projects />
      <Contact />
      <Faq />
      <Footer />
     </main>

  )
}

export default Mainpage