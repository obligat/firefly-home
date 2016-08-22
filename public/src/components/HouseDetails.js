/**
 * Created by zhangsha on 16-8-22.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {requestHouseDetails} from '../actions/housedetails';


export default class HouseDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let {id} = this.props.params;
    this.props.requestHouseDetails(id);
  }

  render() {
    const {name, price, image, city, address, houseDescription} = this.props.houseDetails;

    return (
      <div>
        <div className="header">
          <div className="left">
            <span><strong>萤火虫 </strong>居住自由主义</span>
          </div>
          <div className="right">
            <span><a href="#">登录</a></span>
            <span>短租指南</span>
            <div className="issue-room"><a href="#">免费发布房间</a></div>
          </div>
        </div>
        <div>
          <span className="title-span">{name}</span><br/>
           <div>
           <a href = "#" >萤火虫</a><span>></span><a href="#">{city}></a>{address}
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
        </div>
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