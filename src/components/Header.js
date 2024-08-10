import React from 'react'

const Header = () => {
  return (
    <>
    <div className="top-contacts">
      <p className="animate__animated animate__backInLeft"><i className="fa fa-envelope" aria-hidden="true"></i> iphonearena07@gmail.com</p>|
      <p className="animate__animated animate__backInLeft animate__delay-1s"><i className="fa fa-phone" aria-hidden="true"></i> +44 7883 846758</p>
    </div>
        <div className="header container">
            <img className="ialogo" src="assets/ialogo.png" alt="logo"/>
            
            <form className="example" action="#">
                <input type="text" placeholder="By device, brand or item" name="search" autocomplete="off"/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>

            <div className="cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"> £0.00</i>
                <button className="btn btn-success"><a href="addtocart.html" style={{textDecoration:"none", color: "white"}}>Checkout</a></button>
            </div>
        </div>

        <div className="preheader container">
            <div className="list">
                <ul>
                    <li><a href="contact.html" className="btn">Help </a>|</li>
                    <li><a href="#" type="button" id="myBtn" className="btn" onclick="openFeedbackModal()">Feedback </a>|</li>
                    <li><a href="trackmyorder.html" className="btn">Track My Order </a>|</li>
                    <li><a href="login.html" className="btn">My Account</a></li>
                </ul>
            </div>
            <div className="preheader__selectors">
                <div className="currency">
                    <select name="currency" id="currency">
                        <option value="GBP">GBP£</option>
                        <option value="EURO">EURO€</option>
                        <option value="USD">USD$</option>
                    </select>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Header
