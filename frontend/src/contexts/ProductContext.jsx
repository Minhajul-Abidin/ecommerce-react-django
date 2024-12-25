import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Create a context
export const ProductContext = createContext();

function ProductProvider({ children }) {
  // Product state
  const [products, setProducts] = useState([]);
  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider;
