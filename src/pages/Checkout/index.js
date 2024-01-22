import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import "./styles.css";


const Checkout = ({ data }) => {

  const globalState = useSelector((state) => state.categoriesData);

  const preSelectedGifts = globalState.giftCatalog.filter((item) => {
    return item.isSelected === true;
  });

  const giftWrapOpted = globalState.wraps.filter((item) => {
    return item.isSelected === true;
  });

  const mergedArray = [...preSelectedGifts, ...giftWrapOpted];

let estimatedTotal = 0;

 mergedArray.forEach((item)=>{
  estimatedTotal = estimatedTotal + item.price
 });

  console.log(preSelectedGifts);

  return (<div className="checkout">
    <div className="title">
      <h1>Shopping Bag</h1>
      <p></p>
    </div>
    <div className="breadcrumbs">
      <Link to={`/gift`}>
        Back
      </Link>
    </div>
    <hr />
    <div className="cart-items">
      {preSelectedGifts.map((item, index) => (
        <div className="single-cart-item">
          <div>
            <img
              src={item.imgSrc}
              alt={item.label}
              className="image-thumbnail"
            />
          </div>
          <div>{item.label}</div>
          <div>{item.priceLabel}</div>
        </div>
      ))}
    </div>
    <hr />
    <div className="sub-title">
      <h3>Gift Wrap</h3>
      <div className="cart-items">
        {giftWrapOpted.map((item, index) => (
          <div className="single-cart-item">
            <div>
              <img
                src={item.imgSrc}
                alt={item.label}
                className="image-thumbnail"
              />
            </div>
            <div>{item.label}</div>
            <div>{item.priceLabel}</div>
          </div>
        ))}
      </div>
    </div>
    <hr />
    <div className="estimated-total sub-margin">
      <div>Estimated Total</div>
      <div>${estimatedTotal}</div>
    </div>
    <div className="payment-group sub-margin">
      <div><button className="pink">BUY NOW WITH 10% DISCOUNT <i class="fa-regular fa-heart"></i></button></div>
      <div className="sub-margin text-align">OR</div>
      <div><button className="black">CHOOSE A DATE <i class="fa-solid fa-calendar-days"></i></button></div>
      <div><button className="white">RESET BASKET <i class="fa-solid fa-arrows-rotate"></i></button></div>
    </div>
    <div class="payment hidden">
      <button className="pay-now">VISA</button>
      <button className="pay-now">Master</button>
      <button className="pay-now">Amex</button>
      <button className="pay-now">Klarna</button>
    </div>
  </div>)

};

export default Checkout;