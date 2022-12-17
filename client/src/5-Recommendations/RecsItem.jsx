import React from 'react';
import './recs.css';
import { useEffect, useState } from 'react';

const RecsItem = () => {
  const [imgLink, setImgLink] = useState('');
  const [productName, setProductName] = useState('');
  const [productSeller, setProductSeller] = useState('');
  const [numOfReviews, setNumOfReviews] = useState(0);
  const [operatingSystem, setOperatingSystem] = useState('');
  const [price, setPrice] = useState(0);
  const [isBestSeller, setIsBestSeller] = useState(false);
  const [isLimitedTimeDeal, setIsLimitedTimeDeal] = useState(false);
  const [isPrimeDelivery, setIsPrimeDelivery] = useState(false);
  const [limitedTimeEnd, setLimitedTimeEnd] = useState('');
  const [isOffer, setIsOffer] = useState(0);
  const [isClimateFriendly, setIsClimateFriendly] = useState(false);
  const [itemData, setItemData] = useState([]);

  //   useEffect(() => {
  //        fetch("https://fec-amazon-back-end.onrender.com/recs")
  //         .then((res) => res.json())
  //         .then((data) => setItemData(data));

  //   });
  //   console.log(itemData)
  //   console.log(itemData[0].product_img);

  const str =
    productName ||
    'ASTRO Gaming A50 Wireless Headset + Base Station Gen 4 - Compatible with Xbox Series X|S, Xbox One, PC, Mac - Black/Gold';
  const limitStr = (str) => {
    return str.length > 55 ? str.substring(0, 55) + '...' : str;
  };

  return (
    <>
      <div className="product-img">
        <img className="product-img" src="./recs-imgs/71Pfow1d1-L._SX522_.jpg"></img>
      </div>
      <div className="product-name">{limitStr(str)}</div>
      <div className="product-seller">ASTRO Gaming</div>
      <div className="reviews">
        <div className="review-stars">
          <img src="./recs-imgs/Screenshot 2022-12-15 at 3.06.16 PM.png"></img>
        </div>
        <div className="num-reviews">4,753</div>
      </div>
      <div className="operating-system">No Operating System</div>
      <div className="price">
        <span className="dollar">$</span>
        <span className="amount">249.99</span>
      </div>
      <div className="is-prime-delivery">Prime FREE Delivery</div>
    </>
  );
};

export default RecsItem;
