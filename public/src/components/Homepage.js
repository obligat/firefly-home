import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {Link} from  'react-router';

class Homepage extends Component {
  render() {
    return (
        <div >
          <div className="header container">
            <div className="left">
              <span className="span1"><strong>萤火虫 </strong></span>
              <span className="span2">居住自由主义</span>
            </div>
            <div className="right">
              <Link id='linkHomepage1' to="register"><strong>注册</strong></Link>
              <Link id='linkHomepage2' to="login"><strong>登录</strong></Link>
              <Link id="UserGuide" to="userGuide" ><strong>短租指南</strong></Link>
              <a href="#"><strong>免费发布房间</strong></a>
            </div>
          </div>
          <div id="myCarousel" className="carousel slide container">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="item active">
                <img src="../../images/homepageImages/homepage1.jpg" alt="First slide"/>
              </div>
              <div className="item">
                <img src="../../images/homepageImages/homepage2.jpg" alt="Second slide"/>
              </div>
              <div className="item">
                <img src="../../images/homepageImages/homepage3.jpg" alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control left" href="#myCarousel"
               data-slide="prev">&lsaquo;</a>
            <a className="carousel-control right" href="#myCarousel"
               data-slide="next">&rsaquo;</a>
          </div>


          <div className="container">
            <div className="information ">
              <p id="p1">住在我家里吧</p>
              <p id="p2">一个温暖的港湾，一次有趣的邂逅</p>
            </div>
            <div className="rent">
              <Link to="houseResource" className="btn btn-info btn-lg active" role="button"><strong>我要租房</strong></Link>
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

