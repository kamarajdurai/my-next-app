import "../styles/App.css";
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
    </section>
  );
}
