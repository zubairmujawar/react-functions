import React from "react";

const ProductCard = ({ name, id, price, handler, imgsrc }) => {
  return (
    <di className="productcard">
      <img src={imgsrc} alt="img" className="img" />
      <p>{name}</p>
      <h4 className="h4">${price}</h4>
      <button
        onClick={() => handler({ name, price, id, imgsrc })}
        className="button"
      >
        Add to cart
      </button>
    </di>
  );
};
export default ProductCard;
