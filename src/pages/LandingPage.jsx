import { Navbar } from '../components';
import { Hero, Insight, Summit, Join, Footer} from '../sections/landing';

const LandingPage = () => (
  <div>
    <Navbar />
    <Hero />
    <Insight />
    <Summit />
    <Join />
    <Footer />
  </div>
);

export default LandingPage;
