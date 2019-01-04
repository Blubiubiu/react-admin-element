//参照segmentfault的用户头像管理功能开发
import React, { PureComponent } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/lib/ReactCrop.scss";
class ImageCrop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      crop: {
        aspect: 1,
        width: 50,
        height: 50,
        x: 0,
        y: 0
      },
      croppedImageUrl: ""
    };
  }

  onImageLoaded = (image, pixelCrop) => {
    this.imageRef = image;
    // Make the library regenerate aspect crops if loading new images.
    const { crop } = this.state;
    if (crop.aspect && crop.height && crop.width) {
      this.setState({
        crop: { ...crop, height: null }
      });
    } else {
      this.makeClientCrop(crop, pixelCrop);
    }
  };

  onCropComplete = (crop, pixelCrop) => {
    this.makeClientCrop(crop, pixelCrop);
  };

  onCropChange = crop => {
    this.setState({ crop });
  };

  async makeClientCrop(crop, pixelCrop) {
    if (this.imageRef && crop.width && crop.height) {
      console.log("没有走过这里吗");
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        pixelCrop,
        "newFile.jpeg"
      );
      await this.setState({ croppedImageUrl: croppedImageUrl });
      this.props.readCropImgUrl(this.state.croppedImageUrl);
    }
  }

  getCroppedImg(image, pixelCrop, fileName) {
    const canvas = document.createElement("canvas");
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, "image/jpeg");
    });
  }

  render() {
    const { crop } = this.state;
    return (
      <div>
        <ReactCrop
          src={this.props.src}
          crop={crop}
          onImageLoaded={this.onImageLoaded}
          onComplete={this.onCropComplete}
          onChange={this.onCropChange}
        />
        {/* {croppedImageUrl && <img alt="Crop" src={croppedImageUrl} />} */}
      </div>
    );
  }
}
export default ImageCrop;
