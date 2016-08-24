/**
 * Created by tong on 16-8-23.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars

export default class Footer extends Component {
  render() {
    return (
        <div className="container tail">

            <div className="col-xs-4 text-center "><a href="#"><h4><strong>关于我们</strong></h4></a></div>
            <div className="col-xs-4 text-center "><a href="#"><h4><strong>帮助中心</strong></h4></a></div>
            <div className="col-xs-4 text-center "><a href="#"><h4><strong>客服电话</strong></h4></a></div>
        </div>
    );
  }
}