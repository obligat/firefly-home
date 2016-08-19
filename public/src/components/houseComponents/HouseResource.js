/**
 * Created by tong on 16-8-18.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import HouseList from './HouseList';

class HouseResource extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {houseResource} = this.props;
        return (
            <div>
                <HouseList house = {houseResource}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {state.houseResource};

export default connect(mapStateToProps)(HouseResource);