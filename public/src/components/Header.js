/**
 * Created by tong on 16-8-23.
 */
import React, {Component} from 'react';
import {Link} from  'react-router';

export default class Header extends Component {
  render() {
    return (
      <div className="header container">
        <div className="left">
          <span className="span1"><strong>萤火虫 </strong></span>
          <span className="span2">居住自由主义</span>
        </div>
        <div className="right">
          <Link id='linkHomepage1' to="register"><strong>注册</strong></Link>
          <Link id='linkHomepage2' to="login"><strong>登录</strong></Link>
          <Link id="UserGuide" to="userGuide"><strong>短租指南</strong></Link>
          <a href="#"><strong>免费发布房间</strong></a>
        </div>
      </div>
    );
  }
}