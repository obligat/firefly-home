/**
 * Created by fcc on 16-8-18.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {Link} from 'react-router';

class HouseItem extends Component {
  render() {
    let {id, name, price, address, city, type, image}=this.props;
    return (
      <div className="raw">
        <div className="text-center col-xs-4">
          <Link to={'/houseDetail/' + id} className="text-center thumbnail">
            <img src={image[0]} alt="..."/>
          </Link>
          <div>{name},{address},{city}</div>
          <div>{type},￥{price}/晚</div>
        </div>
      </div>
    );
  }
}
export default HouseItem;