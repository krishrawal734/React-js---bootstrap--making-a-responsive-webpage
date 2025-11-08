import "./App.css";
import About from "./components/About";

import Header from "./components/Header";
import Navbar from "./components/navbar";
import Cards from "./components/Cards";
import Table from "./components/Table";
import Accordtion from "./components/Accordtion";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Header />
      <About />
      <Cards/>
      <Table/>
      <Contact/>
      <Accordtion/>
    </>
  );
}

export default App;
