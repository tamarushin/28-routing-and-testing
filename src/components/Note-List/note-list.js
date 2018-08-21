import React, { Component } from 'react';

export default class NoteList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      this.props.notes.map(note => {
        <li key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button className='delete_btn' onClick={this.props.removeNote}>Delete</button>
        </li>;
      })
    );
  }
}