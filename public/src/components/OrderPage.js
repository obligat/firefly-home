import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import  Header from './Header';
import Footer from './Footer';
import {requestHouseDetails} from '../actions/housedetails';

class OrderPage extends Component {

  componentDidMount() {
    let {id}=this.props.params;
    this.props.requestHouseDetails(id);
  }

  render() {
    const {name, city, address, price} = this.props.houseDetails;
    return (
      <div>
        <Header/>
        <div style={{height: '527px'}}>
          <div className='panel panel-default' style={{marginTop: '20px'}}>
            <div>
              <h3><span className="label label-info">入住信息</span></h3>
            </div>
            <div>
              <h4><span><strong>房源信息:</strong>
                {name},{address},{city}</span></h4>
            </div>
            <div>
              <h4><span><strong>价格:</strong>
                                ￥{price}元</span></h4>
            </div>
            <div>
              <h4><strong>房东用户名:</strong> zhangsha</h4>
            </div>
            <div>
              <h4><strong>入住时间:</strong>2016/9/9－2016/9/15</h4>
            </div>
          </div>
          <div className='panel panel-default' style={{marginTop: '40px'}}>
            <div>
              <h3><span className="label label-info">入住人信息</span></h3>
            </div>
            <table className="table table-striped">
              <thead >
              <tr>
                <th>真实姓名</th>
                <th>证件</th>
                <th>性别</th>
                <th>出生日期</th>
                <th>住宿意外险</th>
              </tr>
              </thead>
              <tbody>
              <tr ref="row">
                <td><input type="text"/></td>
                <td>
                  <form ><label htmlFor="lisence">身份证</label><input type="text"/></form>
                </td>
                <td><input type="radio" name="male" value='男'/>男
                  <input type="radio" name="male" value='女'/>女
                </td>
                <td><input type="text"/></td>
                <td>免费赠送</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div style={{float: 'right', marginTop: '30px'}}>
            <button className="btn btn-success">提交订单</button>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    houseDetails: state.houseDetails
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestHouseDetails: (id) => {
      dispatch(requestHouseDetails(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);