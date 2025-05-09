import React from 'react'
import Navbar from './navbar/page'
import Footer from './footer/page'
import Lastestpost from '@/Components/lastestpost'

const page = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='text-3xl'>Welcome user</h1>
      <Lastestpost/>
      <Footer/>
    </div>
  )
}

export default page
