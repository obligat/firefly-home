import ImageGallery from 'react-image-gallery';
import React from 'react';

class ReactGallery extends React.Component {


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
      <div>
        <ImageGallery
          ref={i => this._imageGallery = i}
          items={images}
          slideInterval={2000}
          showThumbnails={false}
          autoPlay={true}
        />
      </div>
    );
  }

}

export default ReactGallery;