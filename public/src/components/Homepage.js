import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import {Link} from  'react-router';
import ReactGallery from './ReactGallery';
import Header from './Header';
import Footer from './Footer';

class Homepage extends Component {
  render() {
    const images = [
      {
        original: '/images/homepageImages/homepage1.jpg',
        thumbnail: '/images/homepageImages/homepage1.jpg',
      },
      {
        original: '/images/homepageImages/homepage2.jpg',
        thumbnail: '/images/homepageImages/homepage2.jpg',
      },
      {
        original: '/images/homepageImages/homepage3.jpg',
        thumbnail: '/images/homepageImages/homepage3.jpg',
      }
    ];

    return (
      <div >
        <Header/>

        <ReactGallery images={images}/>

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

        <Footer/>
      </div>
    );
  }
}

export default Homepage;

