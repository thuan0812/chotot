import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './style.css'


class List extends Component {
    render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 mx-auto">
                <div className="col-md-7 pet padding-0">
                    <h3>Mua Bán Vật Nuôi, Thú Cưng Giá Cực Tốt Tại Hàn Quốc</h3>
                    <div className="list_pet">
                    <div className="items_pet d-flex border-bottom">
                        <img src="../images/pet_ga.jpg" alt="" className="col-md-3 padding-0" />
                        <div className="col-md-9 info d-flex flex-column ">
                        <p className="tittle">Ô bông cựa nhật nguyệt</p>
                        <p className="price">1.600.000đ</p>
                        <div className="d-inlie-flex description">
                            <img className="rounded-circle" src="../images/user-ava.png" width="6%" alt="" />
                            <span className="items-last-upload">4 phút trước</span>
                            <span className="items-location">Tp Hồ Chí Minh</span>
                        </div>
                        </div>  
                    </div>
                    <div className="items_pet d-flex border-bottom">
                        <img src="../images/pet_ga.jpg" alt="" className="col-md-3 padding-0" />
                        <div className="col-md-9 info d-flex flex-column ">
                        <p className="tittle">Ô bông cựa nhật nguyệt</p>
                        <p className="price">1.600.000đ</p>
                        <div className="d-inlie-flex description">
                            <img className="rounded-circle" src="../images/user-ava.png" width="6%" alt="" />
                            <span className="items-last-upload">4 phút trước</span>
                            <span className="items-location">Tp Hồ Chí Minh</span>
                        </div>
                        </div>  
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
    }
}

export default List;