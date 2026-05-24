import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import DesignsSection from './components/sections/DesignsSection';
import ServicesSection from './components/sections/ServicesSection';
import ContactSection from './components/sections/ContactSection';


function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Gihan | UI/UX Designer";
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <DesignsSection />
      <ServicesSection />
      <ContactSection />
    </Layout>
  );
}

export default App;