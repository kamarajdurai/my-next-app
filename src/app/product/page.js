"use client";
import { useState } from "react";
import Image from "next/image"; // ✅ Important import
import "../../styles/Product.css";

export default function Product() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Samsung Galaxy A35 5G", price: 27000, image: "/assets/p1.jpg" },
    { id: 2, name: "Samsung Galaxy A14 5G", price: 18000, image: "/assets/p2.jpg" },
    { id: 3, name: "Samsung Galaxy S25 Ultra", price: 100000, image: "/assets/p3.jpg" },
    { id: 4, name: "Samsung Galaxy F36 5G", price: 25000, image: "/assets/p4.jpg" },
  ];

  const addToCart = (p) => {
    if (!cart.find((item) => item.id === p.id)) setCart([...cart, p]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <section className="product-section">
      <h1 className="page-title">Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Image
              src={product.image}
              alt={product.name}
              className="product-img"
              width={300}  // ✅ Required
              height={250} // ✅ Required
              priority
            />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            {isInCart(product.id) ? (
              <button className="btn remove" onClick={() => removeFromCart(product.id)}>
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
