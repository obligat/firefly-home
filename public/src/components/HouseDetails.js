/**
 * Created by zhangsha on 16-8-22.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {requestHouseDetails} from '../actions/housedetails';
import MonthSelect from './MonthSelect';
import DaySelect from './DaySelect';
import {Link} from 'react-router';
import ReactGallery from './ReactGallery';

function isEmpty(obj) {

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  // null and undefined are "empty"
  if (obj == null) return true;

  // Assume if it has a length property with a non-zero value
  // that that property is correct.
  if (obj.length > 0)    return false;
  if (obj.length === 0)  return true;

  // If it isn't an object at this point
  // it is empty, but it can't be anything *but* empty
  // Is it empty?  Depends on your application.
  if (typeof obj !== "object") return true;

  // Otherwise, does it have any properties of its own?
  // Note that this doesn't handle
  // toString and valueOf enumeration bugs in IE < 9
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

      const images = image.map(v =>{
        return {
          original: v,
          thumbnail: v,
        };
      });


      return (
        <div>
          <div>
            <span className="title-span">{name}</span><br/>
            <div>
              <a href="#">萤火虫</a><span>></span><Link to={'/houseResource/?city='+city}>{city}></Link>{address}
            </div>
            <ReactGallery images={images}/>
            <div className="body-right">
              <div className="day-price">
                <div className="price">￥{price}</div>
                <div className="per">每晚</div>
                <div className="start">
                  <select ref="startYear">
                    <option>2015年</option>
                    <option>2016年</option>
                  </select>
                  <MonthSelect ref="startMonth"/>
                  <DaySelect ref="startDay"/>
                </div>
                <div className="end">
                  <select ref="endYear">
                    <option>2015年</option>
                    <option>2016年</option>
                  </select>
                  <MonthSelect ref="endMonth"/>
                  <DaySelect ref="endDay"/>
                </div>
                <div className="subscribe">
                  <button>立即预订 ￥</button>
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
        </div>
      );
    }
    else {
      return (<h1>sldkfjlksjdklfjlskdjflkj</h1>);
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