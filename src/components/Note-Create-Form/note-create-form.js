'use strict';

import React, { Component } from 'react';

export default class NoteCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };

  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAddNotes(this.state);
    //resets the form to empty
    this.setState({
      title: '',
      content: '',
    });
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={ onComplete }>
          <input
            type='text'
            name='title'
            placeholder='title'
            value={ this.state.title }
            onChange={ this.handleChange }/>
          <input
            type='text'
            name='content'
            placeholder='your note'
            value={ this.state.content }
            onChange={ this.handleChange }/>
        
        <button className='submit_btn' type='submit'> Make Music, Make Notes! </button>
      </form>
    );
  }
};

export default NoteCreateFrom;
