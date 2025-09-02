import About from "./components/about/About"
import Banner from "./components/banner/Banner"
import Contact from "./components/contact/Contact"
import Course from "./components/course/Course"
import Faq from "./components/faq/Faq"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Teachers from "./components/teachers/Teachers"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Course/>
      <Teachers/>
      <Banner/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App