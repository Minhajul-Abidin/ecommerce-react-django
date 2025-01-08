import new_products from "../assets/new_products";
import Item from "./Item";
function NewProducts() {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-[#717171] text-5xl font-light mt-8">New Products</h1>
      <hr className="w-48 h-1 rounded-lg bg-[#252525]" />
      <div className="mt-6 m-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
        {new_products.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewProducts;
