/**
 * @desc 富文本编译器
 *  富文本编译器功能采用的是github上面的react-quill项目
 *  选取理由：拥有丰富的api并且处于长期维护中
 *  github地址为：https://github.com/zenoamaro/react-quill
 * @setEditorContent Function 父组件应该传递给子组件的函数名称（用于在父组件中获取富文本框输入的代码）
 * @content String 父组件传递给子组件应该显示的信息
 * @author benzzle
 */

import React, { Component } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import "./index.scss";
class Editor extends Component {
  modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image"],
      ["clean"]
    ],
    clipboard: {
      matchVisual: false
    }
  };

  formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video"
  ];

  render() {
    return (
      <ReactQuill
        onChange={this.props.setEditorContent}
        value={this.props.content}
        modules={this.modules}
        formats={this.formats}
        placeholder="请开始编辑"
      />
    );
  }
}

export default Editor;
