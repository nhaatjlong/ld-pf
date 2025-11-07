import Hero from "./sections/Hero";
import MinePage from "./pages/mine";

const App = () => {


  if (window.location.pathname === "/mine") {
    return <MinePage />
  }

  return (
    <div className="container mx-auto max-w-7xl">
      {/* <Navbar /> */}
      <Hero />
      {/* <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default App;
