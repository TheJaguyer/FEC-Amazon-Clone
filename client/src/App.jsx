import { useState } from 'react';
import Navbar from './Navbar.jsx';
import Preview from './Preview.jsx';
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.centralCollumn}>
          <Preview />
        </div>
      </div>
    </div>
  );
}

export default App;
