import Navbar from "./Components/Navbar"
import Main from "./Components/Main"
import Section2 from "./Components/Section2"
import Sponsor from "./Components/sponsor"
import Footer from "./Components/footer"
import Carousel from "./Components/Carousel"
import CommingSoon from "./Components/CommingSoon"
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>

    {/* <div className="landing-page">
      <Navbar />
      <Main />
      <Section2 />
      <Carousel />
      <Sponsor />
      <Footer />
    </div> */}
    <Route path="/" element = { <HomePage /> }/>
    <Route path="/CommingSoon" element = { <CommingSoon />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
