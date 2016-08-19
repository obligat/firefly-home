/**
 * Created by fcc on 16-8-18.
 */
import React, {Component} from 'react';

class HouseItem extends Component {
    render() {
        let {name, price, address, province,type, image}=this.props;
        return (
            <div  className="raw">
                <div className="text-center col-xs-4">
                    <a href="#" className="text-center thumbnail">
                        <img src={image} alt="..."/>
                    </a>
                    <div>{name},{address},{province},{type}</div>
                    <div>￥{price}/晚</div>
                </div>
            </div>
        );
    }
}
export default HouseItem;