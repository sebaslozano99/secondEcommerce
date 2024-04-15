import { DataContext } from "./contexts/DataContext";
import { IsOpen } from "./contexts/IsOpen";
import { CartContext } from "./contexts/CartContext";
import { FakeAuthContext } from "./contexts/FakeAuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Suspense, lazy } from "react";
import FullPageSpinner from "./components/fullPageSpinner/FullPageSpinner";

// import About from "./pages/about/About";
// import SingleProduct from "./pages/singleProduct/SingleProduct";
// import LogIn from "./pages/LogIn";
// import HomePage from "./pages/homepage/HomePage";
// import Products from "./pages/products/Products";
// dist/assets/index-DLr3CRf3.css      12.19 kB │ gzip:  2.80 kB
// dist/assets/index-DBDFEGMa.js      258.17 kB │ gzip: 81.13 kB

const About = lazy(() => import("./pages/about/About"));
const SingleProduct = lazy(() => import("./pages/singleProduct/SingleProduct"));
const LogIn = lazy(() => import("./pages/login/LogIn"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const HomePage = lazy(() => import("./pages/homepage/HomePage"));
const Products = lazy(() => import("./pages/products/Products"));
const WishList = lazy(() => import("./pages/wishList/WishList"));
// dist/assets/Products-99l-MNMH.js          4.09 kB │ gzip:  1.54 kB
// dist/assets/index-DV_MNEHP.js           249.15 kB │ gzip: 78.79 kB

function App() {
  return (
    <DataContext>
      <FakeAuthContext>
        <IsOpen>
          <CartContext>
            <BrowserRouter>
             <Suspense fallback={ <FullPageSpinner /> }>
              <Header />
                <Routes>
                  <Route path="/" element={ <HomePage /> } />
                  <Route path="products" element={ <Products /> } />
                  <Route path="products/:id" element={ <SingleProduct /> } />
                  <Route path="login" element={ <LogIn /> } />
                  <Route path="signup" element={ <SignUpPage /> } />
                  <Route path="about" element={ <About /> } />
                  <Route path="wishlist" element={ <WishList /> } />
                  <Route path="checkout" element={ <div>Check Out</div> } />
                  <Route path="*" element={ <div>Not Found :c</div> } />
                </Routes>
                <Footer />
             </Suspense>
            </BrowserRouter>
          </CartContext>
        </IsOpen>
      </FakeAuthContext>
    </DataContext>
  )
}

export default App
