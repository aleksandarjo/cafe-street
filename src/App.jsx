import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="mx-auto px-10 2xl:px-0">
      <Header />
      <Hero />
      <Services />
    </div>
  );
};

export default App;
