import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LinkedInFeed from './components/LinkedInFeed';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LinkedInFeed />
      <Portfolio />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}