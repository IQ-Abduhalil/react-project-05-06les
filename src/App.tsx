import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Children from "./components/Children";
// import Greet from "./components/Greet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {
  // const Users = [
  //   {
  //     first: "John",
  //     last: "Doe",
  //   },
  //   {
  //     first: "Duen",
  //     last: "Johnson",
  //   },
  //   {
  //     first: "Tom",
  //     last: "Cruz",
  //   },
  // ];

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
        </Routes>
      </Router>

      {/* <Children>
        <Greet Users={Users} />
      </Children> */}
    </>
  );
}

export default App;
