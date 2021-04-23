import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../Home/style.css'
class Home extends Component {
    render() {
        return (
            <div>
                {/* Category */}
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-10 categories">
        <h3 className="col tittle">Khám phá danh mục</h3>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="wrapper d-flex flex-wrap d-block w-100">
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/bds.png" alt="" />
                  <span>Bất động sản</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/xe-co.png" alt="" />
                  <span>Xe cộ</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/do-dien-tu.png" alt="" />
                  <span>Đồ điện tử</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/do-an.png" alt="" />
                  <span>Đồ ăn, thực phẩm và các loại khác</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/giai-tri.png" alt="" />
                  <span>Giải trí, Thể thao, Sở thích</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/me-va-be.png" alt="" />
                  <span>Mẹ và bé</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/viec-lam.png" alt="" />
                  <span>Việc làm</span>
                </div>
                <div className="col-md-2 items d-flex flex-column text-center">
                  <Link to="/danhsach">
                    <img src="./images/thu-cung.png" width="127px" alt="" />
                    <span>Thú cưng</span>
                  </Link>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/do-gia-dung.png" alt="" />
                  <span>Đồ gia dụng, nội thất, cây cảnh</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/tu-lanh.png" alt="" />
                  <span>Tủ lạnh, máy lạnh, máy giặt</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/thoi-trang.png" alt="" />
                  <span>Thời trang, Đồ dùng cá nhân</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/van-phong.png" alt="" />
                  <span>Đồ dùng văn phòng, công nông nghiệp</span>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="wrapper d-flex flex-wrap d-block w-100">
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/do-dien-tu.png" alt="" />
                  <span>Đồ điện tử</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/do-an.png" alt="" />
                  <span>Đồ ăn, thực phẩm và các loại khác</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/giai-tri.png" alt="" />
                  <span>Giải trí, Thể thao, Sở thích</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/me-va-be.png" alt="" />
                  <span>Mẹ và bé</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/du-lich.png" alt="" />
                  <span>Du lịch, Dịch vụ</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/cho-tang-mien-phi.png" alt="" />
                  <span>Cho tặng miễn phí</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/do-gia-dung.png" alt="" />
                  <span>Đồ gia dụng, nội thất, cây cảnh</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/tu-lanh.png" alt="" />
                  <span>Tủ lạnh, máy lạnh, máy giặt</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/thoi-trang.png" alt="" />
                  <span>Thời trang, Đồ dùng cá nhân</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/van-phong.png" alt="" />
                  <span>Đồ dùng văn phòng, công nông nghiệp</span>
                </div>
                <div className="col-md-2 items d-flex flex-column">
                  <img src="./images/tat-ca-danh-muc.png" alt="" />
                  <span>Tất cả danh mục</span>
                </div>
              </div>
            </div>                       
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* End Category */}
  {/* New Post */}
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-10 new-posts">
        <h3 className="col tittle">Tin đăng mới</h3>
        <div className="total-items">
          <div className="items">
            <img src="./images/iphone-x.jpg" width="100%" alt="" />
            <div className="items-body">
              <a className="items-tittle" href="#">Iphone X 256GB</a>
              <p className="items-price">10.500.000 đ</p>
              <div className="items-description d-inline-flex ">
                <img className src="./images/user-ava.png" width="10%" alt="" />
                <span className="items-last-upload">4 phút trước</span>
                <span className="items-location">Tp Hồ Chí Minh</span>
              </div>
            </div>
          </div>
          <div className="items">
            <Link to="/chitietsp">
            <img src="./images/iphone-x.jpg" width="100%" alt="" />
            <div className="items-body">
              <a className="items-tittle" href="#">Iphone X 256GB</a>
              <p className="items-price">10.500.000 đ</p>
              <div className="items-description d-inline-flex ">
                <img className src="./images/user-ava.png" width="10%" alt="" />
                <span className="items-last-upload">4 phút trước</span>
                <span className="items-location">Tp Hồ Chí Minh</span>
              </div>
            </div>
            </Link>
          </div>
          <div className="items">
            <img src="./images/iphone-x.jpg" width="100%" alt="" />
            <div className="items-body">
              <a className="items-tittle" href="#">Iphone X 256GB</a>
              <p className="items-price">10.500.000 đ</p>
              <div className="items-description d-inline-flex ">
                <img className src="./images/user-ava.png" width="10%" alt="" />
                <span className="items-last-upload">4 phút trước</span>
                <span className="items-location">Tp Hồ Chí Minh</span>
              </div>
            </div>
          </div>
          <div className="items">
            <img src="./images/iphone-x.jpg" width="100%" alt="" />
            <div className="items-body">
              <a className="items-tittle" href="#">Iphone X 256GB</a>
              <p className="items-price">10.500.000 đ</p>
              <div className="items-description d-inline-flex ">
                <img className src="./images/user-ava.png" width="10%" alt="" />
                <span className="items-last-upload">4 phút trước</span>
                <span className="items-location">Tp Hồ Chí Minh</span>
              </div>
            </div>
          </div>
          <div className="items">
            <img src="./images/iphone-x.jpg" width="100%" alt="" />
            <div className="items-body">
              <a className="items-tittle" href="#">Iphone X 256GB</a>
              <p className="items-price">10.500.000 đ</p>
              <div className="items-description d-inline-flex ">
                <img className src="./images/user-ava.png" width="10%" alt="" />
                <span className="items-last-upload">4 phút trước</span>
                <span className="items-location">Tp Hồ Chí Minh</span>
              </div>
            </div>
          </div>
          <div className="items">
            <img src="./images/iphone-x.jpg" width="100%" alt="" />
            <div className="items-body">
              <a className="items-tittle" href="#">Iphone X 256GB</a>
              <p className="items-price">10.500.000 đ</p>
              <div className="items-description d-inline-flex ">
                <img className src="./images/user-ava.png" width="10%" alt="" />
                <span className="items-last-upload">4 phút trước</span>
                <span className="items-location">Tp Hồ Chí Minh</span>
              </div>
            </div>
          </div>
          <div className="items">
            <img src="./images/iphone-x.jpg" width="100%" alt="" />
            <div className="items-body">
              <a className="items-tittle" href="#">Iphone X 256GB</a>
              <p className="items-price">10.500.000 đ</p>
              <div className="items-description d-inline-flex ">
                <img className src="./images/user-ava.png" width="10%" alt="" />
                <span className="items-last-upload">4 phút trước</span>
                <span className="items-location">Tp Hồ Chí Minh</span>
              </div>
            </div>
          </div>
          <div className="items">
            <img src="./images/iphone-x.jpg" width="100%" alt="" />
            <div className="items-body">
              <a className="items-tittle" href="#">Iphone X 256GB</a>
              <p className="items-price">10.500.000 đ</p>
              <div className="items-description d-inline-flex ">
                <img className src="./images/user-ava.png" width="10%" alt="" />
                <span className="items-last-upload">4 phút trước</span>
                <span className="items-location">Tp Hồ Chí Minh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End New Post */}
            </div>
        );
    }
}

export default Home;