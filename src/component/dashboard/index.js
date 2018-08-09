"use strict";

import React, { Component, Fragment } from "react";
import NoteCreateForm from "./NoteCreateForm";
import NoteList from "./NoteList";

export default class Dashboard extends Component {
  state = {
    notes: []
  };

  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(note) {
    this.setState({
      notes: [...this.state.notes, note]
    });
  }

  removeNote(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <Fragment>
        <h1>All Notes All the Time</h1>
        <NoteCreateForm onSubmit={this.addNote} />
        <NoteList notes={this.state.notes} onRemove={this.removeNote} />
      </Fragment>
    );
  }
}