import React from 'react'
import Navbar from './navbar/page'
import Footer from './footer/page'
import Lastestpost from '@/Components/lastestpost'
import Questions from '@/Components/questions'
import Latestblogs from '@/Components/latestblogs'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Lastestpost/>
      <Questions/>
      <Latestblogs/>
      <Footer/>
    </div>
  )
}

export default page
