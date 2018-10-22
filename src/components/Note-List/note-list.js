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
    );
  }
}