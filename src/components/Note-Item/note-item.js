import React, { Component } from 'react';

export default class NoteItem extends Component {

  render() {
    return (
      <div>
        
        <h3>{this.props.note.title}</h3>
        <p>{this.props.note.content}</p>
        <button id={this.props.note.id} onClick={this.props.removeNote}>Delete</button>
        
      </div >
      
    );
  }
}

