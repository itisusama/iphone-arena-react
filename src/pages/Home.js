import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

const Home = () => {
  return (
    <>
     <Header/>
     <Navigation/>

     <div id="myModalonload" className="modal fade">
    <div className="modal-dialog">
        <div className="modal-content2">
            <div className="modal-body" style={{display: "flex"}}>
              <div className="discount1"><img src="assets/3.png" alt="discount"/></div>
				        <div className="discount2">
                  <h4 style={{fontSize: "65%"}}><b>Get 10% OFF</b></h4>
                    <p style={{fontSize: "65%"}}>Sign up to our newsletter for access to our exclusive deals and 10% off your first order.</p>
                    <form>
                        <div classNameName="form-group">
                            <input type="email" className="form-control" placeholder="Email Address"/>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-success" style={{fontSize: "70%"}}>Get My Code</button> <br/>
                        <button type="button" className="btn btn-secondary mt-2" data-dismiss="modal" style={{fontSize: "70%"}}>No Thanks</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Home
