import React, { Component } from 'react';
import ReactDom from 'react-dom';


import App from './components/App/App';
import './styles/reset.css';
import './styles/index.scss';

class Main extends Component {
  render() {
    return (
      <App />
    );
  }
}

ReactDom.render(<Main />, document.getElementById('root'));