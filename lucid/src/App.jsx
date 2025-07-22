// src/App.js
import './App.css';
import React, { useEffect } from 'react'; // Added useEffect import
import { Navbar, Footer, LucidLoader } from './components/layout';
import { BrowserRouter as Router, useLocation, useRoutes } from 'react-router-dom';
import { AppBreadcrumbs } from './components/layout';
import routes from './Routes';
import { IoLogoWhatsapp } from "react-icons/io5";

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Added ScrollToTop component */}
      <LucidLoader/>

      <Navbar />
      {/* <AppBreadcrumbs /> */}
      <AppRoutes />
      <div className="fixed bottom-10 right-10 z-50 shadow-lg rounded-full bg-[#25D366] p-3">
        <a href="https://wa.me/7402623998" target="_blank" rel="noopener noreferrer">
          <IoLogoWhatsapp className="text-[2rem] lg:text-[2.5rem] text-white transition-colors" />
        </a>
      </div>
      <Footer />
    </Router>
  );
}

export default App;