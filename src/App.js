import logo from "./logo.svg";
import "./App.css";
import CustomButton from "./components/atoms/CustomButton";
import Home from "./components/pages/Home";
import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
