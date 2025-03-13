import Analytics from "./assets/components/Analytics";
import Cart from "./assets/components/Cart";
import Footer from "./assets/components/Footer";
import Hero from "./assets/components/Hero";
import Navbar from "./assets/components/Navbar";
import Newsletter from "./assets/components/Newsletter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
