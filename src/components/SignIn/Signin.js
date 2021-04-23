import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../SignIn/style.css'
import image from "../../images/logo.svg";
class Signin extends Component {
    render() {
        return (
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4 signin mx-auto">
                        <div className="tittle d-flex justify-content-between">
                            <div className="tittle-text">
                            <h3>Đăng nhập</h3>
                            <p>Chào bạn quay lại</p>
                            </div>
                            <img src={image} alt="" />
                        </div>
                        <div className="body text-center">
                            <form className="form-signin ">
                            <div className="form-label-group">
                                <input type="email" id="inputEmail" className="form-control" placeholder="Nhập SĐT của bạn" required autofocus />
                                <label htmlFor="inputPhone" />
                            </div>
                            <div className="form-label-group">
                                <input type="password" id="inputPassword" className="form-control" placeholder="Nhập mật khẩu của bạn" required />
                                <label htmlFor="inputPassword" />
                            </div>     
                            <button className="btn btn-md btn-primary btn-block" type="submit">Đăng nhập</button>
                            <a className="forget-password" href="#">Bạn quên mật khẩu?</a>
                            <p>hoặc sử dụng</p>                             
                            <ul className="social-button d-flex flex-inline justify-content-center padding-0">
                                <li><a href="#"><img src="../images/facebook.svg" alt="" /></a></li>
                                <li><a href="#"><img src="../images/google.svg" alt="" /></a></li>
                                <li><a href="#"><img src="../images/apple.svg" alt="" /></a></li>
                            </ul>
                            <p>Chưa có tài khoản?  <Link to="/dangky">Đăng ký ngay</Link></p>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>


        );
    }
}

export default Signin;