import { useState } from 'react';
import StarReview from './StarReview';
import './ProductReview.css';

const CreateReview = (props) => {

  const [currentOverallRating, setCurrentOverallRating] = useState(4);
  const [currentValueRating, setCurrentValueRating] = useState(4);
  const [currentBatteryRating, setCurrentBatteryRating] = useState(4);
  const [currentComfortRating, setCurrentComfortRating] = useState(4);
  const [headline, setHeadline] = useState('');
  const [review, setReview] = useState('');
  const [name, setName] = useState('');


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
    let d = new Date()
    newReveiw.datecreated = d.toLocaleDateString()
    props.setReviews((prev) => [...prev, newReveiw]);
    props.setReviewMode(false);

    fetch('https://fec-amazon-back-end.onrender.com/reviews', {method: 'post', body: JSON.stringify(props.reviews)})
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data)
      
    }
    )
    .catch((err)=> console.error(err.stack))
  };

  return (
    <div>
      <button onClick={() => props.setReviewMode(false)}> X</button>
      <h2>Create Review</h2>
      <h3>Overall Rating</h3>
      <StarReview currentRating={currentOverallRating} setCurrentRating={setCurrentOverallRating} />

      <div>
        {' '}
        <h2>Rate Features</h2>
        <br />
        <div className="deviderLine"></div>
        <span>Value for Money</span>
        <StarReview currentRating={currentValueRating} setCurrentRating={setCurrentValueRating} />
        <br />
        <div className="deviderLine"></div>
        <span>Battery Life</span>
        <StarReview currentRating={currentBatteryRating} setCurrentRating={setCurrentBatteryRating} />
        <br />
        <div className="deviderLine"></div>
        <span>Comfort</span>
        <StarReview currentRating={currentComfortRating} setCurrentRating={setCurrentComfortRating} />
        <br />
        <div className="deviderLine"></div>
      </div>
      <h2>Add a Headline</h2>
      <input
        type="input"
        onChange={(e) => handleHeadlineChange(e)}
        style={{ width: '650px' }}
        placeholder={`What's the most important thing to know?`}
      />
      <div>
        {/* <h2>Add a photo or Video</h2>
        <span>Shoppers find images and videos more helpful than text alone.</span>
        <form>
          <input type="image"></input>
        </form> */}
      </div>
      <div>
        <h2>Add Written Review</h2>

        <textarea onChange={(e) => handleReviewChange(e)} style={{ height: '150px', width: '650px' }}></textarea>
      </div>
      <div>
        <h2>Choose your public name</h2>
        <span>This is how you'll appear to other customers</span>
        <br />

        <input onChange={(e) => handleNameChange(e)} style={{ width: '650px' }}></input>
        <br />
        <span>Don't worry, you can always change this on your profile</span>
      </div>
      <button className='submitReview' style={{marginLeft: '550px'}} onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreateReview;
