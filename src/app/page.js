import "../styles/App.css";
import Image from "next/image";

export default function Home() {
  return (
    <section className="home-container">
      <div className="home-content">
        <h1>
          Welcome to <span className="highlight">flipkart🛍️</span>
        </h1>
        <p>Discover modern tech gadgets at unbeatable prices.</p>
        <button className="shop-btn">Explore Products</button>
      </div>
      <Image
  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=60"
  alt="Shopping Banner"
  className="home-banner"
  width={900}
  height={600}
  priority
/>
    </section>
  );
}
