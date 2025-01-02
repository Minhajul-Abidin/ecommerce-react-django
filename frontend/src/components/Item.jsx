import PropTypes from "prop-types";

function Item({ image, name, new_price, old_price }) {
  return (
    <div className="w-80 hover:transform hover:scale-105 transition duration-300 ease-in-out">
      <img src={image} className="rounded-lg" />
      <p className="m-1">{name}</p>
      <div className="flex gap-7">
        <div className=" text-[#374151] text-lg font-semibold">
          ₹{new_price}
        </div>
        <div className="text-[#8c8c8c] text-lg font-medium line-through">
          ₹{old_price}
        </div>
      </div>
    </div>
  );
}
Item.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  new_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  old_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default Item;
