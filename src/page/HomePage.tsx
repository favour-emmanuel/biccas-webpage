import Benefits from "../components/Benefits";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Plan from "../components/Plan";
import Support from "../components/Support";
import TeamsCollabs from "../components/TeamsCollabs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TeamsCollabs />
      <Support />
      <Features />
      <Benefits />
      <Plan />
      <Footer />
    </div>
  );
};

export default HomePage;
