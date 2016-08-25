/**
 * Created by zhangsha on 16-8-22.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {requestHouseDetails} from '../../actions/housedetails';
import Header from '../Header';
import Footer from '../Footer';
import MonthSelect from './MonthSelect';
import DaySelect from './DaySelect';
import {Link} from 'react-router';
import ReactGallery from '../ReactGallery';

function isEmpty(obj) { //eslint-disable-line complexity

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  if (obj == null) return true;

  if (obj.length > 0)    return false;
  if (obj.length === 0)  return true;

  if (typeof obj !== 'object') return true;

  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }

  return true;
}


export default class HouseDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let {id} = this.props.params;
    this.props.requestHouseDetails(id);
  }


  render() {

    if (!isEmpty(this.props.houseDetails)) {
      const {name, price, image, city, address, houseDescription, situation} = this.props.houseDetails;

      const images = image.map(v => {
        return {
          original: v,
          thumbnail: v,
        };
      });


      return (
        <div>
          <Header/>
          <div>
            <span className="title-span">{name}</span><br/>
            <div>
              <a href="#">萤火虫</a><span>></span><Link to={'/houseResource/?city=' + city}>{city}></Link>{address}
            </div>
            <div className="carousel">
              <ReactGallery images={images}/>
            </div>
            <div className="body-right">
              <div className="day-price">
                <div className="price">￥{price}</div>
                <div className="per">每晚</div>
              </div>
              <div className="start">
                <span>入住日期：</span>
                <select ref="startYear">
                  <option>2015年</option>
                  <option>2016年</option>
                </select>
                <MonthSelect ref="startMonth"/>
                <DaySelect ref="startDay"/>
              </div>
              <div className="end">
                <span>离开日期：</span>
                <select ref="endYear">
                  <option>2015年</option>
                  <option>2016年</option>
                </select>
                <MonthSelect ref="endMonth"/>
                <DaySelect ref="endDay"/>
              </div>
              <div className="subscribe">
                <Link to='/orderPage'>立即预订</Link>
              </div>
              <div className="landlord">
                <img src="images/homePage/landlord.jpg" className="head-pic"/>
              </div>
              <div>
                <div className="name">
                  <span>shary</span>
                  <p>
                    <span>实名认证.个人房东</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2>个性描述</h2>
              {houseDescription}
            </div>
            <div>
              <h2>内部情况</h2>
              {situation}
            </div>
          </div>
          <Footer/>
        </div>
      );
    }
    else {
      return (<h1></h1>);
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails);