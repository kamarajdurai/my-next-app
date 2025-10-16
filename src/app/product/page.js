"use client";
import { useState } from "react";
import "../../styles/Product.css";

export default function Product() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Wireless Headphones", price: 2999, image: "/p1.jpg" },
    { id: 2, name: "Smart Watch", price: 4999, image: "/p1.jpg" },
    { id: 3, name: "Bluetooth Speaker", price: 1999, image: "/p1.jpg" },
    {
      id: 4,
      name: "Laptop Stand",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1616627562856-1d8e8bfc8b4f?auto=format&fit=crop&w=400&q=60",
    },
  ];

  const addToCart = (p) => {
    if (!cart.find((item) => item.id === p.id)) setCart([...cart, p]);
  };
  const removeFromCart = (id) =>
    setCart(cart.filter((item) => item.id !== id));

  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <section className="product-section">
      <h1 className="page-title">Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            {isInCart(product.id) ? (
              <button
                className="btn remove"
                onClick={() => removeFromCart(product.id)}
              >
                Remove from Cart
              </button>
            ) : (
              <button className="btn add" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
