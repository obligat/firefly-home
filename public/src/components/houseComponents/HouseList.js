/**
 * Created by fcc on 16-8-18.
 */
import React, {Component} from 'react';
import HouseItem from './HouseItem';

class HouseList extends Component {
    render() {
        let {house}=this.props;
        return (
            <div>
                {
                    house.map((v, k)=>(
                        <HouseItem key={k} name={v.name}
                                   price={v.price} address={v.address}
                                   province={v.province} image={v.image}/>
                    ))
                }
            </div>
        );
    }
}
export default HouseList;