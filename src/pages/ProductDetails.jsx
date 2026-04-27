import { getProductById } from "../data/product";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    const foundproduct = getProductById(id);

    if (!foundproduct) {
      navigate("/");
      return;
    }
    setProduct(foundproduct);
  }, [id]);
  if (!product) {
    return <div>Loading...</div>;
  }

  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";

  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-content">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">${product.price}</p>
            <p className="product-detail-description">{product.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart{productQuantityLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
