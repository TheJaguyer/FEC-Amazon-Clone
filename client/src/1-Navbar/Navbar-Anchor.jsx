import Overlay from './Overlay';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountDown from './CountDown.jsx';
import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';
import PrimeModal from './PrimeModal.jsx';

function NavAnchor() {
  const [width, setWidth] = useState();
  const [showPrime, setShowPrime] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const anchorItems = [
    'Very Merry Deals',
    ' Holiday Gift Guide',
    'Best Sellers',
    ' Amazon Basics',
    'Customer Service',
    'Prime',
    'New Releases',
    'Books',
    'Music',
    'Registry',
    'Gift Cards',
    'Amazon Home',
    'Fashion',
  ];

  function handleResize() {
    let box = document.getElementById('itemsList').getBoundingClientRect();
    setWidth(box.width);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handlePrimeHover(e) {
    let box = e.target.getBoundingClientRect();
    setTop(box.bottom + window.pageYOffset);
    setLeft(box.right - 128);
    setShowPrime(true);
  }

  return (
    <div
      style={{
        backgroundColor: '#232f3e',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexFlow: 'row nowrap',
        overflow: 'hidden',
        fontSize: '14px',
        lineHeight: '12px',
        whiteSpace: 'nowrap',
        height: '40px',
      }}
    >
      <Overlay excess={anchorItems.slice(Math.floor(width / 150) + 1)} />
      <div className={styles['items-list']} id="itemsList">
        {anchorItems.slice(0, Math.floor(width / 150) + 1).map((item, index) => {
          if (item === 'Prime') {
            return (
              <span
                key={index}
                className={styles['prime-item']}
                onMouseEnter={(e) => handlePrimeHover(e)}
                onMouseLeave={() => setShowPrime(false)}
              >
                {item} <div className={styles.iconarrow}></div>
                {showPrime && <PrimeModal top={top} left={left + 13} />}
              </span>
            );
          } else {
            return (
              <span key={index} className={styles['anchor-item']}>
                {item}
              </span>
            );
          }
        })}
      </div>

      <div className="countdown-gif" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <img
          src="/Navbar-images/countdownClock.gif"
          style={{ gridColumn: '1 / span 2', gridRow: '1 / span 2', height: '40px', width: '360px' }}
        />
        <CountDown />
      </div>
    </div>
  );
}
export default NavAnchor;
