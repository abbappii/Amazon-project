import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Cheekout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Cheekout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="cheekout">
      <div className="cheekout_left">
        <img
          className="cheekout__ad"
          src="https://m.media-amazon.com/images/G/01/BSP/brand-banner/US/d/amazonbasics_desktop.jpg"
          alt=""
        />
        <div>
          <h3>Hello,{user?.email}</h3>
          <h2 className="cheekout_title">Your shopping basket</h2>

          {/* cheekoutProduct */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              reating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="cheekout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cheekout;
