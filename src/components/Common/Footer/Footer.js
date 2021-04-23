import React, { Component } from 'react';
import '../Footer/style.css';
class Footer extends Component {
    render() {
        return (
            <div>
                {/* Footer */}
  <footer className="footer">
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-10 d-flex">
          <div className="col-md-3 download-app">
            <h3>TẢI ỨNG DỤNG CHỢ TỐT</h3>
            <div className="download-app d-flex">
              <img src="./images/qr-image.jpeg" alt="" className="col-md-6 padding-0" />
              <div className="store col-md-6 padding-0">
                <a href="#"><img src="./images/ios.svg" alt="" /></a>
                <a href="#"><img src="./images/android.svg" alt="" /></a>
              </div>
            </div>                       
          </div>
          <div className="col-md-3 support d-flex flex-column">
            <h3>HỖ TRỢ KHÁCH HÀNG</h3>
            <ul>
              <li><a href="#">Trung tâm trợ giúp</a></li>
              <li><a href="#">An toàn mua bán</a></li>
              <li><a href="#">Quy định cần biết</a></li>
              <li><a href="#">Quy chế quyền riêng tư</a></li>
              <li><a href="#">Liên hệ hỗ trợ</a></li>
            </ul>  
          </div>
          <div className="col-md-3 introduce d-flex flex-column">
            <h3>VỀ CHỢ TỐT</h3>
            <ul>
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Tuyển dụng</a></li>
              <li><a href="#">Truyền thông</a></li>
              <li><a href="#">Blog</a></li>
            </ul>  
          </div>
          <div className="col-md-3 merge">
            <h3>LIÊN KẾT</h3>
            <div className="social">
              <ul className=" d-flex flex-inline">
                <li className="social-link"><a href="#"><i className="fab fa-facebook" /></a></li>
                <li className="social-link"><a href="#"><i className="fab fa-youtube" /></a></li>
                <li className="social-link"><a href="#"><i className="fab fa-google-plus" /></a></li>
              </ul>
            </div>
            <h3>CHỨNG NHẬN</h3>
            <a href><img src="./images/cerfiticate.png" alt="" /></a>
          </div> 
        </div>                  
      </div>
    </div>
    <hr />
    <div className="footer-text text-center">
      <p>CÔNG TY TNHH CHỢ TỐT - Địa chỉ: Phòng 1808, Tầng 18, Mê Linh Point Tower, 02 Ngô Đức Kế, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh <br /> Giấy chứng nhận đăng ký doanh nghiệp số 0312120782 do Sở Kế Hoạch và Đầu Tư TPHCM cấp ngày 11/01/2013 <br /> Email: trogiup@chotot.vn - Đường dây nóng: (028)38664041</p>
    </div>
  </footer>
  {/* End Footer */}
            </div>
        );
    }
}

export default Footer;