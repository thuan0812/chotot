import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './style.css'
class Header extends Component {
    render() {
        return (
            <div>
                 {/* Header */}
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                    <div className="col-md-10 header ">
                        <div className="row">
                        <div className="col-md-7 d-flex flex-column  ">
                            <Link to="/"><img src="./images/logo-chotot.png" width="20%" alt="" className="logo" /> </Link>              
                            <input className="search" type="text" placeholder="Tìm kiếm trên Chợ tốt" />
                        </div>
                        <div className="col-md-5 ">
                            <div className="row">
                            <div className="col-md-6 d-flex flex-column justify-content-md-between">
                                <div className="home">
                                <i className="fas fa-home" />
                                <Link to="/" className="sign-in-link">Trang chủ</Link>
                                </div>
                                <div className="sign-in d-flex align-items-center">
                                <i className="far fa-user-circle" />
                                <Link to="/dangnhap" className="sign-in-link">Đăng nhập</Link>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex flex-column justify-content-md-between">
                                <div className="account">
                                <i className="far fa-id-badge" />
                                <a className="account-link" href="#">Tài khoản</a>
                                </div>
                                <div className="post">
                                <i className="far fa-edit" />
                                <a className="post-link" href="#">Đăng tin</a>
                                </div>                              
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>  
                {/* End Header */}
            </div>
        );
    }
}

export default Header;