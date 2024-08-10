import React from 'react'

const DeviceSelector = () => {
  return (
    <>
     {/* Device Selector */}
     <div className="box-grey">
      
      <div className="device_selector">

        <div className="categoryselector shadow p-3 rounded">
          <h4>Find accessories for your device</h4>
          <br/>
          <h5><label>Enter phone, tablet or wearable</label><br/></h5>
          <div className="devices">
            <select id="devicesSelect" name="devices">
              <optgroup label="Apple">
                <option value="product-categories.html">Apple AirTag</option>
                <option value="product-categories.html">Apple iPhone 15 Pro Max</option>
                <option value="product-categories.html">Apple iPhone 15 Pro</option>
                <option value="product-categories.html">Apple iPhone 15</option>
                <option value="product-categories.html">Apple iPhone 14 Pro Max</option>
                <option value="product-categories.html">Apple iPhone 14 Pro</option>
                <option value="product-categories.html">Apple iPhone 14 Plus</option>
                <option value="product-categories.html">Apple iPhone 14</option>
                <option value="product-categories.html">Apple iPhone 13 Pro Max</option>
                <option value="product-categories.html">Apple iPhone 13 Pro</option>
                <option value="product-categories.html">Apple iPhone 13</option>
                <option value="product-categories.html">Apple iPhone 13 mini</option>
                <option value="product-categories.html">Apple Watch Series 7</option>
                <option value="product-categories.html">Apple Watch Series 8</option>
                <option value="product-categories.html">Apple Watch SE 2022</option>
                <option value="product-categories.html">Apple Watch Ultra</option>
                <option value="product-categories.html">Apple Watch Ultra 2</option>
                <option value="product-categories.html">Apple Watch Series 9</option>
                <option value="product-categories.html">Apple iPad Mini 6</option>
                <option value="product-categories.html">Apple iPad 10.2 2021</option>
                <option value="product-categories.html">Apple iPhone 12 Pro Max</option>
                <option value="product-categories.html">Apple iPhone 12 Pro</option>
                <option value="product-categories.html">Apple iPhone 12</option>
                <option value="product-categories.html">Apple iPhone 12 mini</option>
                <option value="product-categories.html">Apple iPhone SE 2020</option>
                <option value="product-categories.html">Apple iPhone SE 2022</option>
                <option value="product-categories.html">Apple iPad Pro 11 inch 2020</option>
                <option value="product-categories.html">Apple iPad Pro 12.9 inch 2020</option>
                <option value="product-categories.html">Apple iPhone 11 Pro Max</option>
                <option value="product-categories.html">Apple iPhone 11 Pro</option>
                <option value="product-categories.html">Apple iPhone 11</option>
                <option value="product-categories.html">Apple iPhone XR</option>
                <option value="product-categories.html">Apple iPhone XS Max</option>
                <option value="product-categories.html">Apple iPhone XS</option>
                <option value="product-categories.html">Apple iPhone X</option>
                <option value="product-categories.html">Apple iPhone 8 Plus</option>
                <option value="product-categories.html">Apple iPhone 8</option>
                <option value="product-categories.html">Apple iPhone 7 Plus</option>
                <option value="product-categories.html">Apple iPhone 7</option>
                <option value="product-categories.html">Apple iPad Air 5</option>
                <option value="product-categories.html">Apple iPad Air 4</option>
                <option value="product-categories.html">Apple iPad 10.2 inch 2020</option>
                <option value="product-categories.html">Apple iPad Pro 11 inch</option>
                <option value="product-categories.html">Apple iPad Pro 12.9 inch</option>
                <option value="product-categories.html">Apple Mac Studio</option>
                <option value="product-categories.html">Macbook Air 13" 2022</option>
                <option value="product-categories.html">Macbook Pro 14" 2021</option>
                <option value="product-categories.html">Macbook Pro 16" 2021</option>
                <option value="product-categories.html">Macbook Pro 14" 2023</option>
                <option value="product-categories.html">Macbook Pro 16" 2023</option>
            </optgroup>            
              <optgroup label="Garmin">
                <option value="product-categories.html">Garmin Vivoactive 4</option>
                <option value="product-categories.html">Garmin Fenix 7</option>
                <option value="product-categories.html">Garmin Forerunner 255</option>
                <option value="product-categories.html">Garmin Epix (Gen 2)</option>
                <option value="product-categories.html">Garmin Approach S62</option>
                <option value="product-categories.html">Garmin Tactix 7</option>
                <option value="product-categories.html">Garmin Instinct 2</option>
                <option value="product-categories.html">Garmin Fenix 6s</option>              
              </optgroup>
              <optgroup label="Samsung">
                <option value="product-categories.html">Samsung Galaxy A03 Core</option>
                <option value="product-categories.html">Samsung Galaxy A03</option>
                <option value="product-categories.html">Samsung Galaxy A02</option>
                <option value="product-categories.html">Samsung Galaxy A02s</option>
                <option value="product-categories.html">Samsung Galaxy A01</option>
                <option value="product-categories.html">Samsung Galaxy Tab S6</option>
                <option value="product-categories.html">Samsung Galaxy Tab S6 Lite</option>
                <option value="product-categories.html">Samsung Galaxy Tab S5e</option>
                <option value="product-categories.html">Samsung Galaxy Tab A8</option>
                <option value="product-categories.html">Samsung Galaxy Tab A7 Lite</option>
                <option value="product-categories.html">Samsung Galaxy Tab Active 3</option>
                <option value="product-categories.html">Samsung Galaxy A72 5G</option>
                <option value="product-categories.html">Samsung Galaxy A72</option>
                <option value="product-categories.html">Samsung Galaxy A73</option>
                <option value="product-categories.html">Samsung Galaxy A73</option>
                <option value="product-categories.html">Samsung Galaxy A73</option>
                <option value="product-categories.html">Samsung Galaxy A53</option>
                <option value="product-categories.html">Samsung Galaxy A54</option>
                <option value="product-categories.html">Samsung Galaxy A34</option>
                <option value="product-categories.html">Samsung Galaxy A52 5G</option>
                <option value="product-categories.html">Samsung Galaxy A52</option>
                <option value="product-categories.html">Samsung Galaxy A42 5G</option>
                <option value="product-categories.html">Samsung Galaxy A53</option>
                <option value="product-categories.html">Samsung Galaxy A33 5G</option>
                <option value="product-categories.html">Samsung Galaxy A32</option>
                <option value="product-categories.html">Samsung Galaxy A22 5G</option>
                <option value="product-categories.html">Samsung Galaxy Z Fold 2 5G</option>
                <option value="product-categories.html">Samsung Galaxy Note 20 Ultra</option>
                <option value="product-categories.html">Samsung Galaxy Note 20 5G</option>
                <option value="product-categories.html">Samsung Galaxy Note 20</option>
                <option value="product-categories.html">Samsung Galaxy Z Flip 5G</option>
                <option value="product-categories.html">Samsung Galaxy S20 Ultra</option>
                <option value="product-categories.html">Samsung Galaxy S20 Plus</option>
                <option value="product-categories.html">Samsung Galaxy S20</option>
                <option value="product-categories.html">Samsung Galaxy S20 FE 5G</option>
                <option value="product-categories.html">Samsung Galaxy S20 FE</option>
                <option value="product-categories.html">Samsung Galaxy S10 Plus</option>
                <option value="product-categories.html">Samsung Galaxy S10</option>
                <option value="product-categories.html">Samsung Galaxy S9 Plus</option>
                <option value="product-categories.html">Samsung Galaxy S9</option>
                <option value="product-categories.html">Samsung Galaxy S8 Plus</option>
                <option value="product-categories.html">Samsung Galaxy S8</option>
                <option value="product-categories.html">Samsung Galaxy Note 10 Plus</option>
                <option value="product-categories.html">Samsung Galaxy Note 10</option>
                <option value="product-categories.html">Samsung Galaxy Note 9</option>
            </optgroup>            
            <optgroup label="Google">
              <option value="product-categories.html">Google Pixel 6 Pro</option>
              <option value="product-categories.html">Google Pixel 6</option>
              <option value="product-categories.html">Google Pixel 5a</option>
              <option value="product-categories.html">Google Pixel 4a</option>
              <option value="product-categories.html">Google Pixel 4 XL</option>
              <option value="product-categories.html">Google Pixel 4</option>
              <option value="product-categories.html">Google Pixel 3a XL</option>
              <option value="product-categories.html">Google Pixel 3a</option>
              <option value="product-categories.html">Google Pixel 3 XL</option>
              <option value="product-categories.html">Google Pixel 3</option>
              <option value="product-categories.html">Google Pixel 2 XL</option>
              <option value="product-categories.html">Google Pixel 2</option>
              <option value="product-categories.html">Google Pixel XL</option>
              <option value="product-categories.html">Google Pixel</option>
              <option value="product-categories.html">Google Nest Hub Max</option>
              <option value="product-categories.html">Google Nest Hub</option>
              <option value="product-categories.html">Google Nest Mini</option>
              <option value="product-categories.html">Google Home Mini</option>
            </optgroup>            
            <optgroup label="Xiaomi">
              <option value="product-categories.html">Xiaomi Redmi Note 11</option>
              <option value="product-categories.html">Xiaomi Redmi Note 10 Pro</option>
              <option value="product-categories.html">Xiaomi Redmi Note 10</option>
              <option value="product-categories.html">Xiaomi Mi 11</option>
              <option value="product-categories.html">Xiaomi Mi 11 Pro</option>
              <option value="product-categories.html">Xiaomi Mi 10T Pro</option>
              <option value="product-categories.html">Xiaomi Mi 10T</option>
              <option value="product-categories.html">Xiaomi Poco X3</option>
              <option value="product-categories.html">Xiaomi Poco X3 Pro</option>
              <option value="product-categories.html">Xiaomi Poco X2</option>
              <option value="product-categories.html">Xiaomi Mi Mix 4</option>
              <option value="product-categories.html">Xiaomi Mi Mix Fold</option>
              <option value="product-categories.html">Xiaomi Mi 10 Ultra</option>
              <option value="product-categories.html">Xiaomi Mi 10 Pro</option>
              <option value="product-categories.html">Xiaomi Mi 10</option>
              <option value="product-categories.html">Xiaomi Mi 9T Pro</option>
              <option value="product-categories.html">Xiaomi Mi 9T</option>
              <option value="product-categories.html">Xiaomi Mi 9 SE</option>
              <option value="product-categories.html">Xiaomi Mi 9</option>
              <option value="product-categories.html">Xiaomi Mi 8 Pro</option>
              <option value="product-categories.html">Xiaomi Mi 8</option>
              <option value="product-categories.html">Xiaomi Mi 6</option>
              <option value="product-categories.html">Xiaomi Mi 5X</option>
              <option value="product-categories.html">Xiaomi Mi 5c</option>
              <option value="product-categories.html">Xiaomi Mi 5</option>
              <option value="product-categories.html">Xiaomi Mi 4</option>
              <option value="product-categories.html">Xiaomi Mi 3</option>
              <option value="product-categories.html">Xiaomi Mi Note 3</option>
              <option value="product-categories.html">Xiaomi Mi Note 2</option>
              <option value="product-categories.html">Xiaomi Mi Note</option>
              <option value="product-categories.html">Xiaomi Redmi K40 Pro</option>
              <option value="product-categories.html">Xiaomi Redmi K40</option>
              <option value="product-categories.html">Xiaomi Redmi K30 Pro</option>
              <option value="product-categories.html">Xiaomi Redmi K30</option>
              <option value="product-categories.html">Xiaomi Redmi K20 Pro</option>
              <option value="product-categories.html">Xiaomi Redmi K20</option>
              <option value="product-categories.html">Xiaomi Redmi 9</option>
              <option value="product-categories.html">Xiaomi Redmi 9A</option>
              <option value="product-categories.html">Xiaomi Redmi 9C</option>
              <option value="product-categories.html">Xiaomi Redmi 8A</option>
              <option value="product-categories.html">Xiaomi Redmi 8</option>
              <option value="product-categories.html">Xiaomi Redmi 7A</option>
              <option value="product-categories.html">Xiaomi Redmi 7</option>
              <option value="product-categories.html">Xiaomi Redmi 6A</option>
              <option value="product-categories.html">Xiaomi Redmi 6</option>
              <option value="product-categories.html">Xiaomi Redmi 5</option>
              <option value="product-categories.html">Xiaomi Redmi 4A</option>
              <option value="product-categories.html">Xiaomi Redmi 4X</option>
              <option value="product-categories.html">Xiaomi Redmi 3S</option>
              <option value="product-categories.html">Xiaomi Redmi 3 Pro</option>
              <option value="product-categories.html">Xiaomi Redmi 3</option>
              <option value="product-categories.html">Xiaomi Mi Pad 5 Pro</option>
              <option value="product-categories.html">Xiaomi Mi Pad 5</option>
              <option value="product-categories.html">Xiaomi Mi Pad 5 Lite</option>
              <option value="product-categories.html">Xiaomi Mi Pad 4 Plus</option>
              <option value="product-categories.html">Xiaomi Mi Pad 4</option>
              <option value="product-categories.html">Xiaomi Mi Pad 4C</option>
              <option value="product-categories.html">Xiaomi Mi Pad 3</option>
              <option value="product-categories.html">Xiaomi Mi Pad 2</option>
              <option value="product-categories.html">Xiaomi Mi Pad</option>
            </optgroup>            
            <optgroup label="OnePlus">
              <option value="product-categories.html">OnePlus 9 Pro</option>
              <option value="product-categories.html">OnePlus 9</option>
              <option value="product-categories.html">OnePlus 9R</option>
              <option value="product-categories.html">OnePlus 8T</option>
              <option value="product-categories.html">OnePlus 8 Pro</option>
              <option value="product-categories.html">OnePlus 8</option>
              <option value="product-categories.html">OnePlus Nord</option>
              <option value="product-categories.html">OnePlus 7T Pro</option>
              <option value="product-categories.html">OnePlus 7T</option>
              <option value="product-categories.html">OnePlus 7 Pro</option>
              <option value="product-categories.html">OnePlus 7</option>
              <option value="product-categories.html">OnePlus 6T</option>
              <option value="product-categories.html">OnePlus 6</option>
              <option value="product-categories.html">OnePlus 5T</option>
              <option value="product-categories.html">OnePlus 5</option>
              <option value="product-categories.html">OnePlus 3T</option>
              <option value="product-categories.html">OnePlus 3</option>
              <option value="product-categories.html">OnePlus 2</option>
              <option value="product-categories.html">OnePlus One</option>
            </optgroup>
            <optgroup label="NOKIA">
              <option value="product-categories.html">Nokia C21</option>
              <option value="product-categories.html">Nokia C21 Plus</option>            
              <option value="product-categories.html">Nokia C2 2nd Edition</option>            
            </optgroup>
            <optgroup label="TCL">
              <option value="product-categories.html">TCL 30 5G</option>
              <option value="product-categories.html">TCL 30+</option>           
            </optgroup>
            <optgroup label="Fixbit">
              <option value="product-categories.html">Fixbit 2</option>
              <option value="product-categories.html">Fixbit 4</option>           
            </optgroup>      
          </select>
            <br/><br/>
            <a href="#" style={{fontWeight: "900"}}>Can't see the accessory you need?</a><br/>
            <a href="#" style={{fontWeight: "900"}}>Need help?</a>
        </div>
        
        </div>
        </div>
      </div>
        {/* Device Selector */} 
    </>
  )
}

export default DeviceSelector
