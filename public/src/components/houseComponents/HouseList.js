/**
 * Created by fcc on 16-8-18.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import HouseItem from './HouseItem';

class HouseList extends Component {
  render() {
    let {houses}=this.props;
    return (
      <div>
        {
          houses.map((v, k)=>(
            <HouseItem id={v.id} key={k} name={v.name} type={v.type}
                       price={v.price} address={v.address}
                       city={v.city} image={v.image}/>
          ))
        }
      </div>
    );
  }
}
export default HouseList;