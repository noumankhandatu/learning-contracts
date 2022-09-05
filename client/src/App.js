import Navbar from "./components/Navbar.js";
import Welcome from "./components/Welcome.js";
import Services from "./components/Services.js";
import Transactions from "./components/Services.js";
import Footer from "./components/Footer.js";
import "./App.css";
function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
