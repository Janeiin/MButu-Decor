import Preloader from '@/components/layout/Preloader';
import Navbar from '@/components/layout/Navbar';
import ScrollProgress from '@/components/layout/ScrollProgress';
import Footer from '@/components/layout/Footer';

import Hero from '@/components/sections/Hero';
import Ethos from '@/components/sections/Ethos';
import Story from '@/components/sections/Story';
import WhyHartmann from '@/components/sections/WhyHartmann';
import Materials from '@/components/sections/Materials';
import Applications from '@/components/sections/Applications';
import Gallery from '@/components/sections/Gallery';
import Trust from '@/components/sections/Trust';
import Commercial from '@/components/sections/Commercial';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Closing from '@/components/sections/Closing';

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Ethos />
        <Story />
        <WhyHartmann />
        <Materials />
        <Applications />
        <Gallery />
        <Trust />
        <Commercial />
        <Testimonials />
        <Contact />
        <Closing />
      </main>

      <Footer />
    </>
  );
}
