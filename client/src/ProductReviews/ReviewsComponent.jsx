import ProductReview from './ProductReview';
import './ProductReview.css';

function ReviewsComponent(props) {
  return (
    <>
      <button className="submitReview" onClick={() => props.setReviewMode(true)}>
        New Review
      </button>

      {props.reviews.map((item) => (
        <ProductReview key={item.id} {...item} />
      ))}
    </>
  );
}
export default ReviewsComponent;
