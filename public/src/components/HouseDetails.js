/**
 * Created by zhangsha on 16-8-22.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {requestHouseDetails} from '../actions/housedetails';
import Header from './Header';
import Footer from './Footer';

export default class HouseDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let {id} = this.props.params;
    this.props.requestHouseDetails(id);
  }

  render() {
    const {name, price, image, city, address, houseDescription, situation} = this.props.houseDetails;

    return (
      <div>
        <Header/>
        <br />
        <div>
          <span className="title-span">{name}</span><br/>
          <div>
            <a href="#">萤火虫</a><span>></span><a href="#">{city}></a>{address}
          </div>
          <img src={image} className="room1-picture"/>
          <div className="body-right">
            <span>￥{price}/每晚</span>
          </div>
          {/*<div className="preview">
           <img src="images/room1.jpg" className="room" onClick={this.handleClick.bind(this)}/>
           <img src="images/room2.jpg" className="room" onClick={this.handleClick.bind(this)}/>
           <img src="images/room3.jpg" className="room" onClick={this.handleClick.bind(this)}/>
           <img src="images/room4.jpg" className="room" onClick={this.handleClick.bind(this)}/>
           <img src="images/room5.jpg" className="room" onClick={this.handleClick.bind(this)}/>
           <img src="images/room6.jpg" className="room" onClick={this.handleClick.bind(this)}/>
           </div>*/}

          <div>
            <h2>个性描述</h2>
            {houseDescription}
          </div>
          <div>
            <h2>内部情况</h2>
            {situation}
          </div>
        </div>
        <br />
        <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails);