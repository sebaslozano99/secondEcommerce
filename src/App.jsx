import { DataContext } from "./contexts/DataContext";
import { FakeAuthContext } from "./contexts/FakeAuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import LogIn from "./pages/LogIn";



function App() {
  return (
    <DataContext>
      <FakeAuthContext>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="products" element={ <Products /> } />
            <Route path="products/:id" element={ <SingleProduct /> } />
            <Route path="login" element={ <LogIn /> } />
            <Route path="about" element={ <About /> } />
            <Route path="checkout" element={ <div>Check Out</div> } />
            <Route path="*" element={ <div>Not Found :c</div> } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FakeAuthContext>
    </DataContext>
  )
}

export default App
