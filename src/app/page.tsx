import Preloader from '@/components/layout/Preloader';
import Navbar from '@/components/layout/Navbar';
import ScrollProgress from '@/components/layout/ScrollProgress';
import CursorGlow from '@/components/layout/CursorGlow';
import AmbientSound from '@/components/layout/AmbientSound';
import Footer from '@/components/layout/Footer';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Products from '@/components/sections/Products';
import WhyDesigners from '@/components/sections/WhyDesigners';
import Gallery from '@/components/sections/Gallery';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Products />
        <WhyDesigners />
        <Gallery />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <AmbientSound />
    </>
  );
}
