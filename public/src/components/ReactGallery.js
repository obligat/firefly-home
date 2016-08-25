import ImageGallery from 'react-image-gallery';
import React from 'react';

class ReactGallery extends React.Component {


  render() {
    return (
      <div>
        <ImageGallery
          ref={i => this._imageGallery = i}
          items={this.props.images}
          slideInterval={2000}
          showThumbnails={false}
          autoPlay={true}
        />
      </div>
    );
  }

}

export default ReactGallery;