import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import HomePage from "./components/HomePage/HomePage";
import ResturantList from "./components/Resturant/ResturantList";
import Login from "./components/Users/Login";
import Cart from "./components/Users/Cart";
import Registration from "./components/Users/Registration";
import Menu from "./components/Resturant/Menu";
import Resturant from "./components/Resturant/Resturant";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurantlist/:city" element={<ResturantList />} />
          <Route path="/restaurant/:id" element={<Resturant />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Registration />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
