import { useState, createContext } from "react";
import './App.css'
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

export const JobContext = createContext([]);
export const CartContext = createContext([]);

function App() {
  const { cartArray, jobs } = useLoaderData();
  const [cart, setCart] = useState(cartArray);
  return (
    <JobContext.Provider value={jobs}>
      <CartContext.Provider value={[cart,setCart]}>
          <Header />
          <Outlet />
          <Footer />
      </CartContext.Provider>
    </JobContext.Provider>
  );
}

export default App
