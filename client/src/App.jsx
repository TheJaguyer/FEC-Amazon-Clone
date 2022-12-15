import { useState } from 'react';
import Navbar from './Navbar.jsx';
import RecsSection from './recs.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <RecsSection />
    </div>
  );
}

export default App;
