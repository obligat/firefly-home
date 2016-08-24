/**
 * Created by tong on 16-8-18.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import HouseList from './HouseList';
import SelectZone from './SelectZone';

import {requestHouseList} from '../../actions/houselist';
import Header from '../Header';
import Footer from '../Footer';

class HouseResource extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {houseResource, requestHouseList} = this.props;

    return (
      <div>
        <Header />
        <br/>
        <div>
          <SelectZone select={requestHouseList}/>
          <br/><br/>
          <HouseList houses={houseResource}/>
        </div>
        <Footer />
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
