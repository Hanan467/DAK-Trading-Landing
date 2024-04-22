import './App.css';
import Header from './Hearder';
import Hero from './Hero'; 
import About from './About'
import StaionedImage from './StationaryImage'
import Cards from './Cards'


import image1 from './assets/images/polina-rytova-1dGMs4hhcVA-unsplash.jpg'


import Contact from './Contact';
import ContactForm from './ContactForm'
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className='Golder_Segment'></div>
      <About />
      <StaionedImage image={image1}/>
      <About />
      <About />
      <About />


      <Contact />
      <ContactForm />
    </div>
  );
}

export default App;

