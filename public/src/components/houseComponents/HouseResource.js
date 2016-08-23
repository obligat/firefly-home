/**
 * Created by tong on 16-8-18.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import HouseList from './HouseList';
import SelectZone from './SelectZone';

import {requestHouseList} from '../../actions/houselist';
import Header from '../Header';

class HouseResource extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let {city} = this.props.params;
    if (city !== undefined) {
      this.props.requestHouseOfSelectedCity(city);
    }
  }

  render() {
    const {houseResource, requestHouseOfSelectedCity} = this.props;
    let {city} = this.props.params;

    return (
      <div>
        <SelectZone select={requestHouseOfSelectedCity} city={city}/>
        <br/><br/>
        <HouseList houses={houseResource}/>
      <div className="houselist">
        <Header />
        <br/>
        <div>
          <SelectZone select={requestHouseList}/>
          <br/><br/>
          <HouseList houses={houseResource}/>
        </div>
        <div className="houselist-footer">
          <div className="col-xs-4 text-center "><a href="#"><h4><strong>关于我们</strong></h4></a></div>
          <div className="col-xs-4 text-center "><a href="#"><h4><strong>帮助中心</strong></h4></a></div>
          <div className="col-xs-4 text-center "><a href="#"><h4><strong>客服电话</strong></h4></a></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    houseResource: state.houseResource
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    requestHouseList: (city, sort)=> {
      dispatch(requestHouseList(city, sort));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseResource);
