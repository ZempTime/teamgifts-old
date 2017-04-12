import React, { Component } from 'react';
import List from '../components/List.js';
import { connect } from 'react-redux';
import ItemForm from '../components/ItemForm';
import { submitItem } from '../actions/itemActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { addItemExpanded: false }
    this.toggleAddItemExpanded = this.toggleAddItemExpanded.bind(this);
    this.handleItemSubmit = this.handleItemSubmit.bind(this);
  }
  toggleAddItemExpanded(event) {
    event.preventDefault();
    this.setState({
      addItemExpanded: !this.state.addItemExpanded
    });
  }
  handleItemSubmit = (values) => {
    this.props.dispatch(submitItem(values, this.props.list.id));
  }
  render() {
    return (
      <div>
        <List list={this.props.list} />
        {
          this.state.addItemExpanded ? (
            <ItemForm listId={this.props.list.id} onSubmit={this.handleItemSubmit} />
          ) : (
            <a href="#" onClick={this.toggleAddItemExpanded}>+ add item</a>
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const list = state.list[1];
  const items = list.items.map((id) => { return state.items[id];});
  list.items = items;

  return {
    list: list
  }
}

export default connect(mapStateToProps)(App);
