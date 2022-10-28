import React, { useState } from "react";

function Item({ name, category }) {

  const [isCart, setIsCart] = useState(false)

  function handleCart(){
    setIsCart((isCart) => !isCart)
  }

  const cartClassName = isCart ? "in-cart" : ""

  return (
    <li className={cartClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isCart ? "remove" : "add"} onClick={handleCart}>{isCart ? "Remove" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
