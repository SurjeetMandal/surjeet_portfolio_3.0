import Nav from "./components/Nav"
import Header from "./components/Header";
import Intro from "./components/Intro"
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import Resume from "./components/Resume";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  return(
    <div className="bg-stone-200 antialiased">
      <LoadingScreen />
      <Modal />
      <Nav />
      <Header />
      <Intro />
      <Projects />
      <Resume />
      <FAQs />
      <Footer />
    </div>
  )
}

export default App;