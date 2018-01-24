import React from 'react';
import ReactDOM from 'react-dom';
import Room from './components/Room.js';

class Layout extends React.Component {
  addRoom(){
    return <Room />
  }

  render(){
    return(
        <button onClick={this.addRoom}>ADD ROOM</button>
    )
  }
}

ReactDOM.render(<Layout />, document.getElementById('app'));
