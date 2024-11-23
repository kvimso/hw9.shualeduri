import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <Header cartCount={cart.reduce((total, item) => total + item.quantity, 0)} 
             cart={cart} 
             showCart={showCart} 
             setCart={setCart}
             toggleCart={toggleCart} />
      <Hero cart={cart} 
            setCart={setCart} 
            showCart={showCart} 
            setShowCart={setShowCart} />
    </div>
  );
}

export default App;