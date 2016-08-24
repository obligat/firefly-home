import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {Link} from  'react-router';
import ReactGallery from './ReactGallery';

class Homepage extends Component {
    render() {
        return (
            <div >
                <div className="container header">
                    <div className="col-xs-6">
                        <div className="span1"><strong>萤火虫 </strong>
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
                <div>
                    <ReactGallery />
                </div>


                <div className="container">
                    <div className="col-xs-9">
                        <div className="p1">住在我家里吧
                            <span className="p2">一个温暖的港湾，一次有趣的邂逅</span>
                        </div>
                    </div>
                    <div className="col-xs-3 rent">
                        <Link to="houseResource" className="btn btn-info btn-lg active"
                              role="button"><strong>我要租房</strong></Link>
                    </div>
                </div>
                {/* <div className="show">
                 <table className="houses">
                 <tr>
                 <td><img src={"../../images/homepageImages/house1.jpg"}/></td>
                 <td><img src={"../../images/homepageImages/house2.jpg"}/></td>
                 <td><img src={"../../images/homepageImages/house3.jpg"}/></td>
                 </tr>
                 <tr>
                 <td><img src={"../../images/homepageImages/house4.jpg"}/></td>
                 <td><img src={"../../images/homepageImages/house7.jpg"}/></td>
                 <td><img src={"../../images/homepageImages/house8.jpg"}/></td>
                 </tr>
                 <tr>
                 <td><img src={"../../images/homepageImages/house5.jpg"}/></td>
                 <td><img src={"../../images/homepageImages/house6.jpg"}/></td>
                 <td><img src={"../../images/homepageImages/house9.jpg"}/></td>
                 </tr>
                 </table>

                 </div>*/}
                <div className="container tail">

                    <div className="col-xs-4 text-center "><a href="#"><h4><strong>关于我们</strong></h4></a></div>
                    <div className="col-xs-4 text-center "><a href="#"><h4><strong>帮助中心</strong></h4></a></div>
                    <div className="col-xs-4 text-center "><a href="#"><h4><strong>客服电话</strong></h4></a></div>
                </div>
            </div>
        );
    }
}

export default Homepage;

