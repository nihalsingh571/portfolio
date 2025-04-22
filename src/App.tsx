import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

import { config } from "./constants/config";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  useEffect(() => {
    // Set document title
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }

    // Initialize EmailJS with public key
    const publicKey = import.meta.env.VITE_EMAIL_JS_ACCESS_TOKEN;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.warn("EmailJS public key is missing in .env");
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
