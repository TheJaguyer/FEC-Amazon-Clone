import { useState } from 'react';
import Navbar from './Navbar.jsx';
import AmazonQA from './q&a.jsx';
import Preview from './Preview.jsx';
import styles from './App.module.css';

import RecsSection from './RecsSection.jsx';
import ReviewsComponent from './ProductReviews/ReviewsComponent.jsx';

import CreateReview from './ProductReviews/CreateReview.jsx';

import CarouselOne from './HomeCarousel.jsx';


const review = {
  title: 'Great controller',
  body: "I knew before buying this that it would be a 'premium' controller when I'm more familiar with the generic options afforded by Mircosoft and Sony respectively. My concern was that it would be uncomfortable as i have smaller hands. I am pleased to report that not only is it comfortable, but it feels much more premium than I even expected. This controller is SOLID and the software control (I am using this as a game pad for PC) is pretty user friendly. The back toggles are surprisingly easy to reach and have a very satisfying 'click' when actuated. The rumble feature is what really proved the build quality to me. Being familiar with the standard options, I am used to a very high-pitched rattle when the rumble is activated, but the elite has a low grumble without feeling muffled which is a testament to either the better rumble devices OR the more solid build quality OR both. All in all I am pleased with this purchase and I'm thoroughly enjoying using it, just wish it didn't hurt my wallet as bad.",
  rating: 5,
  author: 'John Doe',
};

function App() {
  const [reviews, setReviews] = useState([review]);
  const [reviewMode, setReviewMode] = useState(false);

  // fetch and post reviews

  return (
    <div className={styles.App}>
      <Navbar />
      <CarouselOne/>
      <div className={styles.main}>
        <div className={styles.centralCollumn}>
          {reviewMode ? (
            <CreateReview setReviews={setReviews} setReviewMode={setReviewMode} />
          ) : (
            <>
              <Preview />
              <RecsSection />

              <AmazonQA />

              <ReviewsComponent reviews={reviews} setReviewMode={setReviewMode} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
