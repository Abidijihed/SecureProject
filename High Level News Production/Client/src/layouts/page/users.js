import React, { Component } from 'react'
import "./users.css"
export default class  extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      
        <div className='Card'>
        <div className='upper-container'>
        <div className='image-container'>
            <img id='profileimage' src='' alt='' height="" width="" />

        </div>
        </div>
        < div className='lower-container'>
            <h3>{this.props.data.Email}</h3>
            <h3>{this.props.LastName}</h3>
            <h4>job</h4>
            <p></p>
            <button>see more</button>
        </div>
  </div>
    )
  }
}
