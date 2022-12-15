import React from "react";

function AmazonQA(props) {
    return (
      <div>
        <h2>Look for specific info?</h2>
        <span class='search_product_subheader'>Search product info, Q&A, reviews</span>
        <h2>{props.question}</h2>
        <p>{props.answer}</p>
        <p>
          Product ID: {props.product_id}
          Date Posted: {props.date_posted}
          Rating: {props.rating}
        </p>
      </div>
    );
  }
  
  export default AmazonQA;