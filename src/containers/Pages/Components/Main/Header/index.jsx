/**
 * @desc 头部
 * @author lsy
 */

import React, { Component } from 'react'

import BreadCrumb from './BreadCrumb'
import User from './User'

import './style.scss'

export default class Header extends Component {
  render() {
    return (
      <div className="admin__header">
        <BreadCrumb/>
        <User/>
      </div>
    )
  }
}
