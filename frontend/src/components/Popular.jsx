import data_product from "../assets/data";
import Item from "./Item";

function Popular() {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-[#717171] text-5xl font-light mt-8">POPULAR</h1>
      <hr className="w-48 h-1 rounded-lg bg-[#252525]" />
      <div className="mt-8 flex gap-7">
        {data_product.map((item, i) => {
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

export default Popular;
