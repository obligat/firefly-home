/**
 * Created by tong on 16-8-23.
 */
import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {Link} from  'react-router';

export default class Header extends Component {
  render() {
    return (
      <div className="container header">
        <div className="col-xs-6">

          <div className="span1"><img className="logo" src="../../images/homepageImages/fireflyLogo.jpg"/>萤火虫
            <span className="span2">居住自由主义</span>
          </div>
        </div>
        <div className="col-xs-6 row">
          <div className="col-xs-3 text-center">
            <Link to="register"><h4><strong>注册</strong></h4></Link>
          </div>
          <div className="col-xs-3 text-center">
            <Link to="login"><h4><strong>登录</strong></h4></Link>
          </div>
          <div className="col-xs-3 text-center">
            <Link to="userGuide"><h4><strong>短租指南</strong></h4></Link>
          </div>
          <div className="col-xs-3 text-center">
            <Link to="hostCenter"><h4><strong>个人中心</strong></h4></Link>
          </div>
        </div>
      </div>
    );
  }
}