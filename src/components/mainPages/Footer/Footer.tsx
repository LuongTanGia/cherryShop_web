import Logo from "../../../assets/images/Logo.svg";

import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer_top">
                <div className="footer_top_left">
                    <div className="footer_top_left-content">
                        <img src={Logo} alt="logo" />
                        <p className="footer_top_left-content-title">
                            Sign up for 15% off & updates straight to your
                            inbox.
                        </p>
                        <div className="inputBox">
                            <input type="text" placeholder="Email address" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="footer_top_center">
                    <ul className="Menu_footer">
                        <li className="menuItem_footer">Home</li>
                        <li className="menuItem_footer">Brand</li>
                        <li className="menuItem_footer">Shop</li>
                        <li className="menuItem_footer">About</li>
                        <li className="menuItem_footer">Community</li>
                        <li className="menuItem_footer">Review</li>
                        <li className="menuItem_footer">FAQ</li>
                    </ul>
                </div>
                <div className="footer_top_right">
                    <div className="footer_top_right-top">
                        <ul className="Menu_footer">
                            <li className="menuItem_footer">
                                <i className="fa-brands fa-instagram"></i>
                                Instagram
                            </li>
                            <li className="menuItem_footer">
                                <i className="fa-brands fa-facebook-f"></i>
                                Facebook
                            </li>
                            <li className="menuItem_footer">
                                <i className="fa-brands fa-twitter"></i>Twitter
                            </li>
                        </ul>
                    </div>
                    <div className="footer_top_right-bottom">
                        <ul className="Menu_footer">
                            <li className="menuItem_footer">
                                Returns and Refunds
                            </li>
                            <li className="menuItem_footer">Contact us</li>
                            <li className="menuItem_footer">Privacy Policy</li>
                            <li className="menuItem_footer">
                                Terms & Conditions
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="footer_bottom-content contentBody">
                    <p className="footer_bottom-content-desc">
                        ©2022 @LuongTanGia
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
