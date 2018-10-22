import React, { Component } from 'react';
import ReactDom from 'react-dom';
<<<<<<< HEAD


import App from './components/App/App';

class Main extends Component {
  render() {
    return (
      <App />
    );
  }
}

=======
import './styles/index.css';


import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';

class Main extends Component {
  render() {
    return (
      <App />
    );
  }
}

>>>>>>> c136765a5b01e6ded2199d4ca3028f7fd717ffac
ReactDom.render(<Main />, document.getElementById('root'));