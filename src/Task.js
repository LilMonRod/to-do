import React from 'react';
import './Task.css';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    console.log(this.data)
  }
  
  render() {
		return (
      <div className='cont'>
        <div className="title-cont">
          <h3 className="title">{this.data.taskName}</h3>
          <p className="title">{this.data.description}</p>
        </div>
      </div>
    )
  }
}
