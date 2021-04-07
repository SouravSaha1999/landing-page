import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import Presentation from './Components/Presentation';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import aboutimage from './images/Frame 19.png';
import aboutimage1 from './images/download.png';

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutimage} title='Comes with All You Need For Daiy Life' button='Get The App'/>
      <Presentation />
      <About image={aboutimage1} title='Download and Get The App Now' button='Download'/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
