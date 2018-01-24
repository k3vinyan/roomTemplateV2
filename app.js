import React from 'react';
import ReactDOM from 'react-dom';
import Room from './components/Room.js';

class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rooms: [],
    }
  }

  addRoom = (e) => {
    const rooms = this.state.rooms;
    rooms[rooms.length] = rooms.length;

    this.forceUpdate();
  }

  render(){
    let _this = this;

    return(
      <div>
        <div className="room-container">
        <button onClick={this.addRoom}>Add Room</button>
        {
          _this.state.rooms.map(function(text, i){
            return(<Room key={i} title={_this.state.rooms[i]}/>)
          })
        }
        </div>
      </div>
    )
  }


}


ReactDOM.render(<Layout />, document.getElementById('app'));
