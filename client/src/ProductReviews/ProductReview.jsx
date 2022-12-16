import { useState } from "react";
import CreateReview from "./CreateReview.jsx";
import StarRating from './StarReview'
// var ProductReview = (props)=> {


//   return(
//     <></>
//   )
// }


import React from 'react';

const ProductReview = (props) => {
 var count = props.count
  // const [count, setCount] = useState(0);
  return (
    <div className="product-review">
    <div>{console.log(props.author)}
    <h3>{props.author} </h3>
      <h3> <StarRating/> {props.title} </h3>
      <div>Reviewed in the United States 🇺🇸 on December 5, 2022</div>
      <div id="verifiedReview">Verified Review</div>
        
      <p className="reviewBody">{props.body}</p>
      <>
      <div style={{display: count === 0 ? 'none': "flex"}}>{count}</div>
      <button id="helpful" onClick={()=> setCount((prev)=> prev + 1)}>Helpful</button>
      <span> | Report Abuse</span>
      </>
    </div>
    </div>
  );
};

export default ProductReview;