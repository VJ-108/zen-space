import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subscriptions from "./components/Subscriptions";
import Testimonials from "./components/Testimonials";
import WhatWeProvide from "./components/WhatWeProvide";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen text-white ">
        <Navbar />
        <Hero />
        <WhatWeProvide />
        <Subscriptions />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
