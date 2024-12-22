import { useContext } from "react";

import { ProductContext } from "../../contexts/ProductContext/ProductContext";
import Product from "../../components/Product/Product";

function Home() {
  const { products } = useContext(ProductContext);
  const filterProducts = products.filter((items) => {
    return items.category === "electronics" || items.category === "jewelery";
  });
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-3 max-w-sm mx-auto md:max-w-none md:mx-0">
            {filterProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
