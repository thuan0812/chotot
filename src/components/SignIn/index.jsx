import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './style.css'
import image from "../../images/logo.svg";
import axios from 'axios';
// class Signin extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //          email: '',
    //          password:'' 
    //     }
    //     this.handleChangeEmail = this.handleChangeEmail.bind(this)
    //     this.handleChangePassword = this.handleChangePassword.bind(this)
    //     this.handleSubmit = this.handleSubmit.bind(this)
    //   }
    
    //   handleChangeEmail(event) {
    //     this.setState({ email: event.target.value})
    //   }
    //   handleChangePassword(event) {
    //     this.setState({ password: event.target.value})
    //   }
      
    // handleSubmit() {
    //     axios
    //         .post('http://localhost:1337/auth/local', {
    //             identifier: this.state.email,
    //             password: this.state.password
    //         })
    //         .then(response => {
    //             alert('Đăng nhập thành công!');
    //             // console.log('success');
    //         })
    //         .catch(error => {
    //             // Handle error.
    //             console.log('An error occurred:', error.response);
    //         });
    // }
const Signin = ({user,loginAccount})=>{

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
                    <button onClick={(e)=>{loginAccount({email:"test00@gmail.com",pass:"123456"})}} className="btn btn-md btn-primary btn-block" type="submit">Đăng nhập</button>
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

export default Signin;