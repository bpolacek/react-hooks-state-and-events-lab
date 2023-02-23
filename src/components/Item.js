import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  const cartStatus = isInCart ? "Remove From Cart" : "Add to Cart"
  const changeCartStatus = (e) => setIsInCart(!isInCart)
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeCartStatus}>{cartStatus}</button>
    </li>
  );
}

export default Item;
