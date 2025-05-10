import React from 'react'
import Navbar from './navbar/page'
import Footer from './footer/page'
import Lastestpost from '@/Components/lastestpost'
import Questions from '@/Components/questions'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Lastestpost/>
      <Questions/>
      <Footer/>
    </div>
  )
}

export default page
