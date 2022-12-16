import { useState } from "react";
import Rating from './StarReview';
import './ProductReview.css';

const CreateReview = (props)=>{
  const handleCurrentReviewBody = (event) => {
    props.setCurrentReviewBody(event.target.value);
    console.log(props.currentReviewBody)
  };
  const handleCurrentUser = (event)=> {
    props.setCurrentUser(event.target.value)
  }
  const handleCurrentRating = (event)=> {
    props.setCurrentRating(event.target.value)
    console.log(props.submittedRating)
  }
  const handleCurrentHeadline = (event)=>{
    props.setTitle(event.target.value)
  }

  return(
  <div>
  <button onClick={()=> props.setAppMode('ItemPage')}> X</button>
  <h2>Create Review</h2>
    <h3>Overall Rating</h3>
    <Rating onChange={handleCurrentRating}/>
   
      <div> <h2>Rate Features</h2> 
        <br/>
        <div className="deviderLine"></div>
        <span>Value for Money</span>
        <Rating/>
        <br/>
        <div className="deviderLine"></div>
        <span>Battery Life</span>
        <Rating/>
        <br/>
        <div className="deviderLine"></div>
        <span>Comfort</span>
        <Rating/>
        <br/>
        <div className="deviderLine"></div>
      </div> 
    <h2>Add a Headline 
        <form>
          <input type="input" onChange={handleCurrentHeadline} style={{width: "650px"}} placeholder={`What's the most important thing to know?`} />
        </form></h2>
        <div>

        <h2>Add a photo or Video</h2>
          <span>Shoppers find images and videos more helpful than text alone.</span>
          <form >
            <input type='image'></input>
            </form>
        </div>
        <div>
          <h2>Add Written Review</h2>
          <form>
            <textarea onChange={handleCurrentReviewBody}  style={{height: "150px", width: "650px"}}></textarea>
          </form>
          </div>
          <div>
            <h2>Choose your public name</h2>
            <span>This is how you'll appear to other customers</span>
            <form ><input onChange={handleCurrentUser} style={{width: "650px"}}></input>
            <br/>
            <span>Don’t worry, you can always change this on your profile</span></form>
          </div>
         
  </div>
    )
}

export default CreateReview;