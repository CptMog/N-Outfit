import Banner from './Banner.js';
import Filter from './Filter.js';
import Cart from './Cart.js';
import ListArticle from './ListArticle.js';
import { useState } from 'react';

function App() {
  const [cart,setCart] = useState([]);
  const [fetchCategory,setFetchCategory] = useState('4213');

  return (
    <div className="App">
      <Banner />
      <Filter setFetchCategory={setFetchCategory} />
      <Cart cart={cart} setCart={setCart}/>
      <ListArticle cart={cart} setCart={setCart} dataCategory={fetchCategory} />
    </div>
  );
}

export default App;
