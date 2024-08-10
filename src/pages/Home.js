import React from 'react'
import Banner from '../components/home/Banner'
import Categories from '../components/home/Categories'
import CatSection from '../components/home/CatSection'
import Layout from './Layout'

const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        <Categories />
        <CatSection />
      </Layout>
    </>
  )
}

export default Home
