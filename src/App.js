import "./App.scss";

import Home from "./pages/Home/Home";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
