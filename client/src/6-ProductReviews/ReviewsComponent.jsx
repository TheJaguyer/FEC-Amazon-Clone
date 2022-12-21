import ProductReview from './ProductReview';
import './ProductReview.css';

function ReviewsComponent(props) {
  function handleNewReview() {
    props.setReviewMode(true);
    document.body.scrollTop = 0; // For safari... who even uses safari?
    document.documentElement.scrollTop = 0; // For every other normal human browser.
  }
  return (
    <div className="reveiwSection">
      <div className="left-section">
        <div className="section-title">Review this product</div>
        <div className="subtitle">Share your thoughts with other customers</div>
        <div className="button" onClick={handleNewReview}>
          Write a cusomer review
        </div>
      </div>
      <div className="right-section">
        <div className="section-title">Top Reviews from the United States</div>

        {props.reviews.slice(0, 10).map((item, index) => (
          <ProductReview key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
export default ReviewsComponent;
