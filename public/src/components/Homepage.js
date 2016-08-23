import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {Link} from  'react-router';
import Footer from './Footer';
import Header from './Header';

class Homepage extends Component {
  render() {
    return (
      <div >
        <Header />
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

        <Footer />
      </div>
    );
  }
}

export default Homepage;

