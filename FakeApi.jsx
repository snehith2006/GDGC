import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import './FakeApi.css';

function FakeApi() {
  // State for storing products, cart count, and total price
  let [Products, Setproducts] = useState([]);
  let [Increment, setIncrement] = useState(0);
  let [cartItems, setCartItems] = useState([]);
  let [totalPrice, setTotalPrice] = useState(0);

  // Function to handle cart increment, add product details (id, title, price, image), and update total price
  function handleIncrement(product) {
    setIncrement(Increment + 1);
    // Add product id, title, price, and image to the cartItems state
    setCartItems([
      ...cartItems,
      { id: product.id, title: product.title, price: product.price, image: product.image }
    ]);
    // Update total price
    setTotalPrice(totalPrice + product.price);
  }

  // Fetch products from API on component mount
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => Setproducts(res))
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div>
      <h1 className='display-2 text-white text-center bg-dark'>Fake Store</h1>

      {/* Displaying products */}
      <div className='prod row row-cols-1 row-cols-sm-2 row-cols-md-3'>
        {Products.slice(0, 5).map((productObj) => (
          <div className='card col text-center' key={productObj.id}>
            <img src={productObj.image} className='product-image' alt={productObj.title} />
            <div>
              <p className='fw-bold'>Title: {productObj.title}</p>
              <p className='fs-4'>Price: ${productObj.price}</p>
            </div>
            {/* Add to Cart Button */}
            <button
              className='btn btn-primary'
              onClick={() => handleIncrement(productObj)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart component showing cart items */}
      <Cart Increment={Increment} cartItems={cartItems} totalPrice={totalPrice} />
    </div>
  );
}

export default FakeApi;
