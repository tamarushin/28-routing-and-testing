import React, { Component } from 'react';

export default class NoteItem extends Component {

  render() {
    return (
<<<<<<< HEAD
      <div>
        
        <h3>{this.props.note.title}</h3>
        <p>{this.props.note.content}</p>
        <button id={this.props.note.id} onClick={this.props.removeNote}>Delete</button>
        
      </div >
      
=======
      this.props.note.map(note => {
        <li key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button id={note.id} onClick={this.props.removeNote}>Delete</button>
        </li>;
      })
>>>>>>> c136765a5b01e6ded2199d4ca3028f7fd717ffac
    );
  }
}

