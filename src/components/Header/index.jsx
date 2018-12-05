import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        header
      </div>
    )
  }
  componentDidMount () {
      console.log(`header`)
  }
}
