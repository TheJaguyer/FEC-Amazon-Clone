import { useState } from 'react'
import ProductReview from './productReview'
import CreateReview from './CreateReview'
import './ProductReview.css'


const review = {
  title: "Great controller",
  body: "I knew before buying this that it would be a 'premium' controller when I'm more familiar with the generic options afforded by Mircosoft and Sony respectively. My concern was that it would be uncomfortable as i have smaller hands. I am pleased to report that not only is it comfortable, but it feels much more premium than I even expected. This controller is SOLID and the software control (I am using this as a game pad for PC) is pretty user friendly. The back toggles are surprisingly easy to reach and have a very satisfying 'click' when actuated. The rumble feature is what really proved the build quality to me. Being familiar with the standard options, I am used to a very high-pitched rattle when the rumble is activated, but the elite has a low grumble without feeling muffled which is a testament to either the better rumble devices OR the more solid build quality OR both. All in all I am pleased with this purchase and I'm thoroughly enjoying using it, just wish it didn't hurt my wallet as bad.",
  rating: 5,
  author: "John Doe"
};
var newReview = {...review}


function ReviewsComponent(appProps) {
  const [mode, setMode] = useState('Reviews')

  const [currentUser, setCurrentUser] = useState('')
  const [submittedUser, setSubmittedUser]= useState(currentUser)
  
  const [currentRating, setRating] = useState(0)
  const [submittedRating, setSubmittedRating] = useState(currentRating)
 
  const [title, setTitle] = useState('')
  const [submittedTitle, setSubmittedTitle] = useState(title)

  const [currentReviewBody, setCurrentReviewBody] = useState('');
  const [submitedReview, setSubmitedReview] = useState(currentReviewBody)

  const [reviewArray, setReviewArray] = useState([review]) 
  
  //(mode === "Reviews") ? <ProductReview/> : <CreateReview/>

  var props = {
    ...appProps,
    mode, setMode,
    currentReviewBody, setCurrentReviewBody,
    submitedReview, setSubmitedReview,
    reviewArray, setReviewArray,
    currentUser, setCurrentUser,
    submittedUser, setSubmittedUser,
    currentRating, setRating,
    submittedRating, setSubmittedRating,
    title, setTitle,
    submittedTitle, setSubmittedTitle
  }
  const appNewReview = ()=>{
    appProps.setAppMode('NewReview')
  }
  const handleClick = () => {
    setMode('Reviews');

    setSubmittedUser(currentUser)
    setSubmitedReview(currentReviewBody)
    setSubmittedRating(currentRating)
    setSubmittedTitle(title)

    newReview.title = title
    newReview.rating = submittedRating
    newReview.author = currentUser
    newReview.body = currentReviewBody

    setReviewArray( (prev)=>{
     return [...prev, newReview]
    })
    console.log(reviewArray)
    
    
  }
  if (mode === 'Reviews') {
  return (
    <>
    
    <button className='submitReview' onClick={appNewReview}>New Review</button>
    {reviewArray.map(item => <ProductReview  key={item.id} {...item}   />  )}
    </>
  )
  } else if (mode === 'Create'){
    return (
      <>
      <CreateReview {...props}/>
      <button className='submitReview' onClick={handleClick}>submit</button>
     </>
    )
  }
}
export default ReviewsComponent;
