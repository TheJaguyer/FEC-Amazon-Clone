import Overlay1 from "./Overlay"
import 'bootstrap/dist/css/bootstrap.min.css';
import CountDown from "./Countdown";
import './Navbar.module.css'
function NavAnchor () {
    return (
        <div style={{backgroundColor:'#232f3e', color:"white", alignItems:'center', justifyContent:"space-between", display:"flex", fontSize: '14px', lineHeight:'12px'}}>
            <Overlay1 />
            <span>Very Merry Deals</span>
            <span>Holiday Gift Guide</span>
            <span>Best Sellers</span>
            <span>Amazon Basics</span>
            <span>Customer Service</span>
            <span>Prime</span>
            <span>New Releases</span>
            <span>Books</span>
            <span>Music</span>
            <span>Registry</span>
            <span>Gift Cards</span>
            <span>Amazon Home</span>
            <span>Fashion</span>
            <div className="countdown-gif">
            <img src="/Navbar-images/countdownClock.gif"/>
            <CountDown />
            </div>
        </div>



    )
}
export default NavAnchor