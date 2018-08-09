"use strict";

import React, { Component } from "react";
import uuid from "uuid/v4";

/*
id: always should contain the result of uuid.v1()
editing: false by default
completed: false by default
content: user provided content
title: user provided title
*/

export default class NoteCreateForm extends Component {
  state = {
    editing: false,
    completed: false,
    content: "",
    title: ""
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state, id: uuid() });
  };

  onChange = event => {
    const val =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const changedBit = {
      [event.target.name]: val
    };
    this.setState(changedBit);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} onChange={this.onChange}>
        <input name="title" placeholder="title" />
        <textarea name="content" placeholder="content" />
        <label>
          <span>editing</span>
          <input name="editing" type="checkbox" />
        </label>
        <label>
          <span>completed</span>
          <input name="completed" type="checkbox" />
        </label>
        <button>Create Note</button>
      </form>
    );
  }
}