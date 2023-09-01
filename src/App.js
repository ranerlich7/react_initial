import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Header text="HI" subtext={3} />
            <div>Hello World</div>
            <h1>Hi</h1>;
            <Products />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
