import { useState } from 'react';
import Navbar from './Navbar.jsx';
import AmazonQA from './q&a.jsx';
import Preview from './Preview.jsx';
import styles from './App.module.css';

import ReviewsComponent from './ProductReviews/Comp.jsx';
import CreateReview from './ProductReviews/CreateReview.jsx';
import RecsSection from './recs.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [appMode, setAppMode] = useState('ItemPage');

  let appProps = {
    count,
    setCount,
    appMode,
    setAppMode,
  };

  return (
    <div className={styles.App}>
      <Navbar />

      <div className={styles.main}>
        <div className={styles.centralCollumn}>

          {appMode === 'NewReview' ? (
            <CreateReview {...appProps} />
          ) : (
            <>
              <Preview />
              <RecsSection />
              
          <AmazonQA />
              <ReviewsComponent {...appProps} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
