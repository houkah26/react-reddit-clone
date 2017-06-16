import React, { Component } from 'react';

export default class AddFilter extends Component {
  state = {
    filterInput: '',
  };

  handleChange = (event) => {
    this.setState({
      filterInput: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.changeFilters("add", this.state.filterInput);
    this.setState({filterInput: ''})
  }

  render() {
    const {
      filterInput,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <i className="fa fa-plus"/>
          <input
            type="text"
            placeholder="add term"
            value={filterInput}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}