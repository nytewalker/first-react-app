import MainContent from "./components/MainContent"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import logo from "./assets/react copy.svg"


function MyApp() {
  return (
    <div className='myApp'>
        <img src={logo} alt="react-svg" className="BackImage"/>
        <Navbar />
        <MainContent />
        <Footer/>
    </div>
  )
}

export default MyApp
