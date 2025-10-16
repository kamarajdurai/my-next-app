import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "E-Shop",
  description: "Discover modern tech gadgets at unbeatable prices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <h2 className="logo">E-Shop 🛍️</h2>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/product">Products</Link>
            <Link href="/service">Services</Link>
            <Link href="/user">Users</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
