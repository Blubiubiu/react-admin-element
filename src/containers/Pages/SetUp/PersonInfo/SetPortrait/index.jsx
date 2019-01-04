/**
 * @desc 头像裁剪模块
 *  图片裁剪功能采用的是github上面DominicTobias开发的React Image Crop项目
 *  github地址为：https://github.com/DominicTobias/react-image-crop
 * @author benzzle
 */

import React, { PureComponent } from "react";
import ImageCrop from "@/components/ImageCrop";
import { Button, Dialog } from "element-react";

import "./style.scss";

import defaultStudentUrl from "@/assets/images/default_head_img.png";

class SetPortrait extends PureComponent {
  state = {
    file: "",
    src: null, //本地选取的图片
    cropDialog: false, //图片裁剪弹框
    cropImgUrl: null, //剪切结果
    headImg: null //头像展示
  };

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.setState({ src: reader.result, cropDialog: true });
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  readCropImgUrl = cropImgUrl => {
    this.setState({
      cropImgUrl
    });
  };

  confirmHandle = () => {
    let headImg = this.state.cropImgUrl;
    this.setState({
      headImg,
      cropDialog: false
    });
    this.props.changePortrait(this.state.cropImgUrl);
  };

  render() {
    const { src } = this.state;
    return (
      <div className="portrait">
        <div
          style={{ backgroundImage: `url(${defaultStudentUrl})` }}
          className="portrait__wrapper"
        >
          {this.state.headImg && <img src={this.state.headImg} alt="头像" />}
        </div>
        <Button className="head" size="small">
          头像修改
          <input
            type="file"
            value={this.state.file}
            onChange={this.onSelectFile}
          />
        </Button>
        <Dialog
          title="头像截取"
          visible={this.state.cropDialog}
          onCancel={() => this.setState({ cropDialog: false })}
          onClose={() => this.setState({ file: null })}
        >
          <Dialog.Body>
            {src && (
              <ImageCrop src={src} readCropImgUrl={this.readCropImgUrl} />
            )}
          </Dialog.Body>

          <Dialog.Footer className="dialog-footer">
            <Button onClick={() => this.setState({ cropDialog: false })}>
              取 消
            </Button>
            <Button type="primary" onClick={this.confirmHandle}>
              确 定
            </Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    );
  }
}
export default SetPortrait;
