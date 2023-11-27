import "./App.css";
import RouterConfig from "./config/Router-Config";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div className="containerContent background">
        <RouterConfig></RouterConfig>
      </div>
      <Footer />
    </>
  );
}

export default App;
