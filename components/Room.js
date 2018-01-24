import React from 'react';

export default class Room extends React.Component {
  render(){
    return(
      <div className="room">
        <p className="title">{this.props.title}</p>
      </div>
    )
  }
}
