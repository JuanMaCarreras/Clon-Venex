import Footer from './Footer'
import CardList from './CardList'
import NavBar from './NavBar'
import FilterNavBar from './FilterNavBar'
import SliderImg from './SliderImg'

function Home () {
  return (
    <>
      <NavBar />
      <FilterNavBar />
      <SliderImg />
      <CardList />
      <h1 className='font-hook text-2xl pb-96' />
      <Footer />
    </>
  )
}

export default Home
