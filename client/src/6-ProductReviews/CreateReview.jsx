import { useState } from 'react';
import StarReview from './StarReview';
import './ProductReview.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const CreateReview = (props) => {
  const [currentOverallRating, setCurrentOverallRating] = useState(5);
  const [headline, setHeadline] = useState('');
  const [review, setReview] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const handleHeadlineChange = (event) => {
    setHeadline(event.target.value);
  };
  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    let newReveiw = {};
    newReveiw.title = headline;
    newReveiw.body = review;
    newReveiw.rating = currentOverallRating;
    newReveiw.username = name;
    let d = new Date();
    newReveiw.datecreated = d.toLocaleDateString();
    props.setReviews((prev) => [...prev, newReveiw]);

    fetch('https://fec-amazon-back-end.onrender.com/reviews', { method: 'post', body: JSON.stringify(props.reviews) })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err.stack));
  };

  return (
    <div className="create-review">
      <h2>Create Review</h2>
      <div className="rating-line">
        <h4>Overall Rating:</h4>
        <StarReview currentRating={currentOverallRating} setCurrentRating={setCurrentOverallRating} />
        <div className="spacer"></div>
        <Link to="/" className="back-button button">
          Back
        </Link>
      </div>
      <div>
        <div className="deviderLine"></div>
      </div>
      <h4>Review Title</h4>
      <input
        type="input"
        onChange={(e) => handleHeadlineChange(e)}
        style={{ width: '650px' }}
        placeholder={`What's the most important thing to know?`}
      />
      <div></div>
      <div>
        <h4>Add Written Review</h4>

        <textarea onChange={(e) => handleReviewChange(e)} style={{ height: '150px', width: '650px' }}></textarea>
      </div>
      <div>
        <h4>Choose your public name</h4>
        <span>This is how you'll appear to other customers</span>
        <br />

        <input onChange={(e) => handleNameChange(e)} style={{ width: '650px' }}></input>
        <br />
        <span>Don't worry, you can always change this on your profile</span>
      </div>
      <Link to="/" className="submitReview button" onClick={handleSubmit}>
        Submit
      </Link>
    </div>
  );
};

export default CreateReview;
