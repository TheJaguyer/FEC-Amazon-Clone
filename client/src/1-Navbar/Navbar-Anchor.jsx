import Overlay from './Overlay';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountDown from './CountDown.jsx';
import './Navbar.module.css';
function NavAnchor() {
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
      }}
    >
      <Overlay />
      <span>Very Merry Deals</span>
      <span>Holiday Gift Guide</span>
      <span>Best Sellers</span>
      <span>Amazon Basics</span>
      <span>Customer Service</span>
      <span>Prime</span>
      <span>New Releases</span>
      {/* <span>Books</span>
      <span>Music</span>
      <span>Registry</span>
      <span>Gift Cards</span>
      <span>Amazon Home</span>
      <span>Fashion</span> */}

      {/* I will find a way to make excess items disappear like how they do on the real site */}
      <div className="countdown-gif" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <img src="/Navbar-images/countdownClock.gif" style={{ gridColumn: '1 / span 2', gridRow: '1 / span 2' }} />
        <CountDown />
      </div>
    </div>
  );
}
export default NavAnchor;
