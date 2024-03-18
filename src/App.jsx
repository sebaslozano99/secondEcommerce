import { DataContext } from "./contexts/DataContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Products from "./pages/products/Products";



function App() {
  return (
    <DataContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="products" element={ <Products /> }>
            <Route path="products/:id" element={ <p>Product Page</p> } />
          </Route>
          <Route path="login" element={ <div>log in page</div> } />
          <Route path="about" element={ <div>About</div> } />
          <Route path="checkout" element={ <div>Check Out</div> } />
          <Route path="*" element={ <div>Not Found :c</div> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataContext>
  )
}

export default App
