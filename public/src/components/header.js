/**
 * Created by zhangsha on 16-8-14.
 */
import React, {Component} from 'react'

export default class Header extends Component{
    render(){
        return(
            <div className="header" >
                <div className="left">
                    <span><strong>萤火虫 </strong>居住自由主义</span>
                </div>
                <div className="right">
                    <span><a href="#">登录</a></span>
                    <span>短租指南</span>
                    <div className="issue-room"><a href="#">免费发布房间</a></div>
                </div>
            </div>
        );
    }
}