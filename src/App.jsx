import styles from "./App.module.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Hero from "./Components/Hero/Hero";
import Project from "./Components/Project/Project";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Project/>
      <Contact />
    </div>
  );
}

export default App;
