import { Routes, Route } from 'react-router-dom';
import App from '../0-App/App.jsx';
import Review from '../0-App/Review.jsx';

export default function Router() {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path="/newReview" element={<Review />} />
    </Routes>
  );
}
