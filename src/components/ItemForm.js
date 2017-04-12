import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ItemForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" component="input" type="text"/>
          </div>
          <div>
            <label htmlFor="link">Link</label>
            <Field name="link" component="input" type="text"/>
          </div>
          <div>
            <label htmlFor="notes">Notes</label>
            <Field name="notes" component="input" type="text"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

ItemForm = reduxForm({
  form: 'item'
})(ItemForm);

export default ItemForm;
