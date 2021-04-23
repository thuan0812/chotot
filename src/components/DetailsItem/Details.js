import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../DetailsItem/style.css'
class Details extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="col-md-7 details">
                  <img src="../images/iphone-x.jpg" alt="" width="100%" />
                  <h3 className="tittle">iPhoneX 256G QUỐC TẾ LIKENEW ZIN100% APPLE T&amp;T HUẾ</h3>
                  <p className="price">10.500.000 đ</p>
                  <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laudantium placeat soluta culpa eveniet sapiente earum alias a error, reiciendis, quos temporibus possimus sint recusandae doloribus cumque, optio magnam aperiam.</p>
                  </div>
                  <div className="information">
                    <div className="brand">
                      <img src="../images/mobile_brand.txt" width="10%" alt="" />
                      <span>Hãng: Apple</span>
                    </div>
                    <div className="condition">
                      <img src="../images/elt_condition.png" width="10%" alt="" />
                      <span>Tình trạng: Mới</span>
                    </div>
                    <div className="capacity">
                      <img src="../images/mobile_capacity.png" width="10%" alt="" />
                      <span>Dung lượng: 256GB</span>
                    </div>
                    <div className="model">
                      <img src="../images/mobile_model.png" width="10%" alt="" />
                      <span>Dòng máy: iphone X</span>
                    </div>
                    <div className="color">
                      <img src="../images/mobile_brand.txt" width="10%" alt="" />
                      <span>Màu sắc: Vàng</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}

export default Details;