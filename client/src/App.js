import Navbar from "./components/Navbar.js";
import Welcome from "./components/Welcome.js";
import Services from "./components/Services.js";
import Transactions from "./components/Transactions.js";
import Footer from "./components/Footer.js";
import "./App.css";
import WalletChecker from "./components/WalletChecker.js";
function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <WalletChecker />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
