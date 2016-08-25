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
    let {city} = this.props.location.query;
    if (city !== undefined) {
      this.props.requestHouseList(city);
    }
  }

  render() {
    const {houseResource, requestHouseList} = this.props;
    let {city} = this.props.location.query;

    return (
      <div className="houselist">
        <Header />
        <br/>
        <SelectZone select={requestHouseList} city={city}/>
        <br/><br/>
        <HouseList houses={houseResource}/>
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
    requestHouseList: (city, sortRule)=> {
      dispatch(requestHouseList(city, sortRule));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseResource);
