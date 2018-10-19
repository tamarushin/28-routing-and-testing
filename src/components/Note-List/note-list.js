<<<<<<< HEAD
import React from 'react';

import NoteItem from '../Note-Item/note-item';


export default class NoteList extends React.Component {

  render() {
    return (
      <div>
      <ul>
        {
          this.props.notes.map((note) => {
            <li key={note.id}>
              <NoteItem 
                note={note}
                handleRemoveNote={this.props.removeNote}
              />

            </li>;
          })
        }
      </ul>
      </div>
=======
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
>>>>>>> c136765a5b01e6ded2199d4ca3028f7fd717ffac
    );
  }
}