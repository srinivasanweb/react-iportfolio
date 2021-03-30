import About from './Components/About';
import Contact from './Components/Contact';
import Facts from './Components/Facts';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Testimonials from './Components/Testimonials';
import { Fragment } from 'react';

function App() {
  return (
<Fragment>
  <Header/>
  <Hero/>
  <main id="main">
    <About/>
    <Facts/>
    <Skills/>
    <Resume/>
    <Portfolio/>
    <Services/>
    <Testimonials/>
    <Contact/>
  </main>
  <Footer/>
</Fragment>
  );
}

export default App;
