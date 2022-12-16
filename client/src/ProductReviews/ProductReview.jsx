import ReactStars from 'react-rating-stars-component';

import React from 'react';

const ProductReview = (props) => {
  const starSettings = {
    size: 40,
    count: 5,
    isHalf: false,
    value: props.rating,
    color: 'grey',
    activeColor: 'yellow',
  };

  var count = props.count;
  return (
    <div className="product-review">
      <div>
        {console.log(props.author)}
        <h3>{props.author} </h3>
        <h3>
          {' '}
          <ReactStars {...starSettings} />
        </h3>
        <div>Reviewed in the United States 🇺🇸 on December 5, 2022</div>
        <div id="verifiedReview">Verified Review</div>

        <p className="reviewBody">{props.body}</p>

        <div style={{ display: count === 0 ? 'none' : 'flex' }}>{count}</div>
        <button id="helpful" onClick={() => setCount((prev) => prev + 1)}>
          Helpful
        </button>
        <span> | Report Abuse</span>
      </div>
    </div>
  );
};

export default ProductReview;
