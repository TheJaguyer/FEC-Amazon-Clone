import ReactStars from 'react-rating-stars-component';
import React from 'react';

export default function StarRating(props) {
  const starSettings = {
    size: 40,
    count: 5,
    isHalf: false,
    value: props.currentRating,
    color: 'grey',
    activeColor: 'yellow',
    onChange: (newValue) => {
      props.setCurrentRating(newValue);
    },
  };
  return (
    <div className="App">
      <ReactStars {...starSettings} />
    </div>
  );
}
