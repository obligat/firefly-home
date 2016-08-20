/**
 * Created by fcc on 16-8-18.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars

class HouseItem extends Component {
  render() {
    let {name, price, address, city, type, image}=this.props;
    return (
      <div className="raw">
        <div className="text-center col-xs-4">
          <a href="#" className="text-center thumbnail">
            <img src={image} alt="..."/>
          </a>
          <div>{name},{address},{city}</div>
          <div>{type},￥{price}/晚</div>
        </div>
      </div>
    );
  }
}
export default HouseItem;