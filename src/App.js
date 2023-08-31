import "./App.css";
import "./bootstrap.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 offset-3">
            <Header text="Header text" subtext={3} />
            <Products />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
