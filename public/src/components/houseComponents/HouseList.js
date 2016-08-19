/**
 * Created by fcc on 16-8-18.
 */
import React, {Component} from 'react';
import HouseItem from './HouseItem';

class HouseList extends Component {
    render() {
        let {houses}=this.props;
        return (
            <div>
                {

                    houses.map((v, k)=>(
                        <HouseItem key={k} name={v.name} type={v.type}
                                   price={v.price} address={v.address}
                                   province={v.province} image={v.image}/>
                    ))
                }
            </div>
        );
    }
}
export default HouseList;