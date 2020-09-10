import React from "react";
import FlipMove from 'react-flip-move';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {

  const [{ basket, user }, dispatch] = useStateValue();

  const ArticleList = ({id, title, image, price, rating}) => (
    <FlipMove>
      { articles.map( article => <Article key={article.id} {...article} /> ) }
    </FlipMove>
  );

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div className="checkout__title">
          <h3>Hello, {user?.email}</h3>
          <h2>Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;