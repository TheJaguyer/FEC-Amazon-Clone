// import React, { useState } from 'react';
// import './ProductReview.css'
// const MAX_RATING = 5;

// const styles = {

// }
// function Star({ selected }) {
//   return (
//     <div role="img" aria-label="star" className='clip-path-polygon-star' style={{ backgroundColor: selected ? '#ffc107' : '#e4e5e9' }}>
     
//     </div>
//   );
// }

// function Rating() {
//   const [rating, setRating] = useState(0);

//   return (
//     <div className='container'>
//       {Array.from({ length: MAX_RATING }, (_, i) => i + 1).map(value => (
//         <Star
//           key={value}
//           selected={value <= rating}
//           onClick={() =>{ setRating(value)
//             console.log(rating)}}
//         />
//       ))} 
//     </div>
//   );
// }

// export default Rating;

import ReactStars from "react-rating-stars-component";
import React from "react";

const starSettings = {
  size: 40,
  count: 5,
  isHalf: false,
  value: 4,
  color: "grey",
  activeColor: "yellow",
  onChange: newValue => {
    console.log(` new value is ${newValue}`);
  }
};

export default function StarRating() {
  return (
    <div className="App">
  
      <ReactStars {...starSettings} />
    
    </div>
  );
};