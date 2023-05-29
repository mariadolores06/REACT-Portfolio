import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';

function Portfolio () {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
        // a switch statement that returns the componet of currentPage
      switch(currentPage.toLowerCase()) {
        case 'about':
          return <About />;
        case 'contact':
          return <Contact />;
        case 'portfolio':
          return <Projects />;
        case 'resume':
          return <Resume />;
        default:
          return <About />;
        }
      };
      
return (
    <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    <div>
    {
        renderPage()
    }
    </div>
    </div>
);
}

export default Portfolio;
