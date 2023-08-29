import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
function App() {
  return (
    <>
      <Header text={3} subtext="HIIIIIIIIIIII" />
      <div>Hello World</div>
      <h1>Hi</h1>;
      <Products />
      <Footer />
    </>
  );
}

export default App;
