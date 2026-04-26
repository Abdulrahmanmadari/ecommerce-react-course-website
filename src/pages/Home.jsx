import ProductCard from "../Components/ProductCard";
import { getProducts } from "../data/product";
import { Link } from "react-router-dom";

export default function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1>Welcome to ShopHub</h1>
        <p className="home-subtitle">
          Discover amazing product at greate product
        </p>
      </div>
      <div className="container">
        <h2 className="page-title">Our products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
