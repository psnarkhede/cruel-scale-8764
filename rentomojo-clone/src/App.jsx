import "./App.css";
import AllRoutes from "./Pages/AllRoutes";
import Navbar from "../src/Components/Navbar";
import Productspage from "./Pages/Productspage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Productspage/>
    </div>
  );
}

export default App;
