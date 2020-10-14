import React, { Component } from "react";
import PropTypes from "prop-types";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";

import imagesApi from "../services/imagesApi";

import "./App.css";

export default class App extends Component {
  static propTypes = {
    //   contacts: PropTypes.arrayOf(PropTypes.object),
    searchQuery: PropTypes.string,
    //   name: PropTypes.string,
  };

  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");

    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      console.log("Щось робимо!!!!");

      this.fetchImages();
    }
  }


  fetchImages = () => {
    console.log("this.state.page: ", this.state.page);

    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchBarSubmit = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchBarSubmit} />
        <ImageGallery images={images} />
      </>
    );
  }
}
