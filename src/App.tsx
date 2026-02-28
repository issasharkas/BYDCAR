import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CarShowcase } from "./components/CarShowcase";
import { ConnectedSystems } from "./components/ConnectedSystems";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Audience } from "./components/Audience";
import { Cta } from "./components/Cta";

function App() {
  return (
    <div className="relative w-full bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CarShowcase />
        <ConnectedSystems />
        <Services />
        <About />
        <Audience />
        <Cta />
      </main>
    </div>
  );
}

export default App;
