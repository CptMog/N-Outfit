import Banner from './Banner.js';
import Filter from './Filter.js';
import Cart from './Cart.js';
import ListArticle from './ListArticle.js';
import { useState } from 'react';

function App() {
  const [cart,setCart] = useState([]);

  return (
    <div className="App">
      <Banner />
      <Filter />
      <Cart cart={cart} setCart={setCart}/>
      <ListArticle cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
