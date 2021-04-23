import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../SignUp/style.css'
class Signup extends Component {
    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col-md-4 signup mx-auto">
                    <div className="tittle d-flex justify-content-between">
                        <div className="tittle-text">
                        <h3>Đăng ký</h3>
                        <p>Tạo tài khoản Chợ Tốt ngay</p>
                        </div>
                        <img src="../images/logo.svg" alt="" />
                    </div>
                    <div className="body text-center">
                        <form className="form-signup ">
                        <div className="form-label-group">
                            <input type="email" id="inputEmail" className="form-control" placeholder="Nhập SĐT của bạn" required autofocus />
                            <label htmlFor="inputPhone" />
                        </div>
                        <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control" placeholder="Tạo một mật khẩu có ít nhất 5 kí tự" required />
                            <label htmlFor="inputPassword" />
                        </div>     
                        <button className="btn btn-md btn-primary btn-block" type="submit">Đăng ký</button>
                        <p>Bằng việc Đăng ký, bạn đã đồng ý với <a className="policy" href="#">Điều khoản sử dụng </a>của Chợ Tốt</p>
                        <p>hoặc sử dụng</p>                             
                        <ul className="social-button d-flex flex-inline justify-content-center padding-0">
                            <li><a href="#"><img src="../images/facebook.svg" alt="" /></a></li>
                            <li><a href="#"><img src="../images/google.svg" alt="" /></a></li>
                            <li><a href="#"><img src="../images/apple.svg" alt="" /></a></li>
                        </ul>
                        <p>Bạn đã có tài khoản? <Link to="/dangnhap">Đăng nhập</Link></p>
                        </form>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Signup;