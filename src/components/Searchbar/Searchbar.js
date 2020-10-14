import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Searchbar.css";

export default class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);

    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="searchbar-form" onSubmit={this.handleSubmit}>
          <button type="submit" className="searchbar-button">
            <span className="searchbar-label">Search</span>
          </button>

          <input
            value={this.state.inputValue}
            onChange={this.handleChange}
            className="searchbar-input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  inputValue: PropTypes.string,
};

Searchbar.defaultProps = {
  inputValue: "",
};
