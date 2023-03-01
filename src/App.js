import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      {/* <ToastContainer /> */}
      <Routes>
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
