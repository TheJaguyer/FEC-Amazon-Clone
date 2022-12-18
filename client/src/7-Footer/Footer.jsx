import './Footer.css'

function Footer() {
    return (
        <div className="container">
            <div className='back-to-top'>
            <span className='back-to-top'>Back To Top</span>
            </div>
            <div className="upper-footer">
                <div className="row">
                <div className='col-space-between'></div>
                    <div className="col">
                        <p className="col-header">Get to know us</p>
                        <a href="">Careers</a>
                        <a href="">Amazon Newsletter</a>
                        <a href="">About Amazon</a>
                        <a href="">Sustainability</a>
                        <a href="">Press Center</a>
                        <a href="">Investor Relations</a>
                        <a href="">Amazon Devices</a>
                        <a href="">Amazon Science</a>
                    </div>
                    <div className='col-space-between'></div>
                    <div className="col">
                        <p className="col-header">Make Money with Us</p>
                        <a href="">Sell Products on Amazon</a>
                        <a href="">Sell apps on Amazon</a>
                        <a href="">Supply to Amazon</a>
                        <a href="">Protect & Build your Brand</a>
                        <a href="">Become an Affiliate</a>
                        <a href="">Become a Delivery Driver</a>
                        <a href="">Start a package delivery business</a>
                        <a href="">Advertise your Products</a>
                        <a href="">Self Publish with us</a>
                        <a href="">Host an Amazon Hub</a>
                        <a href="">See More Ways to Make Money</a>
                    </div>
                    <div className='col-space-between'></div>
                    <div className="col">
                        <p className="col-header">Amazon Payment Products</p>
                        <a href="">Amazon Rewards Visa Signiture</a>
                        <a href="">Amazon Store Card</a>
                        <a href="">Amazon Secured Card</a>
                        <a href="">Amazon Business Card</a>
                        <a href="">Shop with Points</a>
                        <a href="">Credit Card Marketplace</a>
                        <a href="">Reload Your Balance</a>
                        <a href="">Amazon Currency Converter</a>
                    </div>
                    <div className='col-space-between'></div>
                    <div className="col">
                    <p className="col-header">Let Us Help You</p>
                        <a href="">Amazon and Covid 19</a>
                        <a href="">Your Account</a>
                        <a href="">Your Orders</a>
                        <a href="">Shipping Rates & Policies</a>
                        <a href="">Amazon Prime</a>
                        <a href="">Returns & Replacements</a>
                        <a href="">Manage Your Content and Devices</a>
                        <a href="">Your Recalls and Product Safety Alerts</a>
                        <a href="">Amazon Assistant</a>
                        <a href="">Help</a>
                    </div>
                    <div className='col-space-between'></div>
                </div>
            </div>
            <div className='mid-footer'>
                <img id='amazon-logos'src="../footer-images/amazon.svg" />
            </div>
            <div className='footer-bottom'></div>
        </div>
    )
}



export default Footer;