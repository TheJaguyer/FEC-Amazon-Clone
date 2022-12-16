import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeCarousel.css'
import Carousel from 'react-bootstrap/Carousel';

function CarouselOne() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/amazon2.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/amazon3.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/amazon4.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselOne;