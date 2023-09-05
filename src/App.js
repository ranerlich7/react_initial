import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
// import Calculator from "./components/Calculator";
function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Header text="Products app" subtext={3} />
            {/* <Calculator /> */}
            <Products />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
