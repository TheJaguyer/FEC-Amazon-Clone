import ProductReview from './ProductReview';
import './ProductReview.css';
import { Link } from 'react-router-dom';

function ReviewsComponent(props) {
  return (
    <div className="reveiwSection">
      <div className="left-section">
        <div className="section-title">Review this product</div>
        <div className="subtitle">Share your thoughts with other customers</div>
        <Link to="/newReview" className="button">
          Write a cusomer review
        </Link>
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
