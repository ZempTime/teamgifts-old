import React, { Component } from 'react';
import List from '../components/List.js';
import { connect } from 'react-redux';
import ItemForm from '../components/ItemForm';
import { loadList } from '../actions/listActions';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadList(1));
  }
  render() {
    return (
      <div>
        <p>Hello There!</p>
      </div>
    );
  }
}

export default connect()(App);
