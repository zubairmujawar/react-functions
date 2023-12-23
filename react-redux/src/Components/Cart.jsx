import React from "react";
import { MdDelete } from "react-icons/md";

const imgsrc =
  "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661";
  
const Cart = () => {
  return (
    <div className="cart">
      <main>
        <CartItem
          imgsrc={imgsrc}
          name={"Macbook Air"}
          price={"$2000"}
          id="6372834"
          Qty={1}
        />
        <CartItem
          imgsrc={imgsrc}
          name={"Macbook Air"}
          price={"$2000"}
          id="6372834"
          Qty={1}
        />
        <CartItem
          imgsrc={imgsrc}
          name={"Macbook Air"}
          price={"$2000"}
          id="6372834"
          Qty={1}
        />
        <CartItem
          imgsrc={imgsrc}
          name={"Macbook Air"}
          price={"$2000"}
          id="6372834"
          Qty={1}
        />
        <CartItem
          imgsrc={imgsrc}
          name={"Macbook Air"}
          price={"$2000"}
          id="6372834"
          Qty={1}
        />
      </main>
      <aside>
        <h2>
          Subtotal: ${200}</h2>
          <h2>Shipping: ${200}</h2>
          <h2>Tax: ${200}</h2>
          <h2>Total: ${200}</h2>
      </aside>
    </div>
  );
};

export default Cart;

const CartItem = ({
  imgsrc,
  name,
  price,
  id,
  Qty,
  decriment,
  increment,
  deleteItem,
}) => {
  return (
    <div className="cartItem">
      <img src={imgsrc} alt={name} />
      <article>
        <h3>{name}</h3>
        <h3>{price}</h3>
      </article>

      <div>
        <button onClick={() => decriment(id)}>-</button>
        <p>{Qty}</p>
        <button onClick={() => increment(id)}>+</button>
      </div>
      <MdDelete onClick={() => deleteItem(id)} />
    </div>
  );
};
