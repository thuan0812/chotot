import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './style.css';
import axios from 'axios';



class Details extends Component {
  constructor(props) {
    super(props)
    this.state= {
      listItems: [],
      error: null 
    };
  }
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/products');
      this.setState({ listItems: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };
  render() {
    const { error, listItem } = this.state;
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <div className="container">
          <div className="row">
          {this.state.listItems.map((listItem,idx) => {

            return (<>
            <div className="col-md-10 mx-auto">
            <div className="col-md-7 details">
              <img key={idx} src={listItem.anhSp} alt="" width="100%" />
              <h3 className="tittle" key={idx}>{listItem.tenSp}</h3>
              <p className="price" key={idx}>{listItem.giaSp}</p>
              <p className="description" key={idx}>{listItem.chiTietSp}</p>
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
            </>)
          }
          )};
            </div>
      </div>
    );
  }
}
export default Details;