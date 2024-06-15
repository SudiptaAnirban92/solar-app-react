import { MdOpacity } from "react-icons/md";
import {
  Navbar,
  Contact,
  ChooseUs,
  Experience,
  Footer,
  Hero,
  Services,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* Navbar */}
    <div className="bg-secondary px-6 sm:px-16 flex justify-center items-center">
      <div className="w-full xl:max-w-[1640px]">
        <Navbar />
      </div>
    </div>

    {/* Hero */}
    <div className="flex justify-center items-start">
      <div className="w-full xl:max-w-[1640px]">
        <Hero />
      </div>
    </div>

    {/* Others */}
    <div className="px-0 sm:px-16 flex justify-center items-start">
      <div className="w-full xl:max-w-[1640px]">
        <Experience />
        <ChooseUs />
        <Contact />
        <Services />
      </div>
    </div>
    <div className="px-0">
      <Footer />
    </div>
  </div>
);

export default App;
