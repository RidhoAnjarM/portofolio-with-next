import About from '@/components/layouts/about';
import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/header'
import Landing from '@/components/layouts/landing';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Footer />
    </div>
  );
}
