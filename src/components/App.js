import React, { Component } from "react";
import PropTypes from "prop-types";

import Layout from "./Layout";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Modal from "./Modal";
import Loader from "react-loader-spinner";

import imagesApi from "../services/imagesApi";

export default class App extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
    error: PropTypes.string,
    searchQuery: PropTypes.string,
    page: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string,
  };

  static defaultProps = {
    page: 1,
  };

  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    largeImageURL: null,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  showLargeImage = (url) => {
    this.setState({ largeImageURL: url });
    console.log("Модалка открыта!!!!!");
  };

  componentDidUpdate(prevProps, prevState) {
    const { images } = this.state;

    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }

    if (prevState !== images) {
      this.onScrollTo();
    }
  }

  onScrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  componentWillUnmount() {
    console.log("componentWillUnmount");
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  fetchImages = () => {
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

  //!=======================================================
  closeModal = () => {
    this.setState({
      largeImageURL: null,
    });
  };

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.closeModal();
    }
  };

  handleClickOverlay = (e) => {
    if (e.target.nodeName !== "IMG") {
      this.closeModal();
    }
  };
  //!=======================================================

  handleSearchBarSubmit = (query) => {
    this.setState({
      images: [],
      searchQuery: query,
      page: 1,
    });
  };

  render() {
    const { images, loading, largeImageURL } = this.state;

    return (
      <Layout>
        <Searchbar onSubmit={this.handleSearchBarSubmit} />
        <ImageGallery images={images} onShowLargeImage={this.showLargeImage} />

        {loading && (
          <div className="loader">
            <Loader type="Oval" color="#3f51b5" height={100} width={100} />
          </div>
        )}

        {images.length > 0 && <Button onLoadMore={this.fetchImages} />}

        {largeImageURL && (
          <Modal
            largeImageURL={largeImageURL}
            onCloseOverlay={this.handleClickOverlay}
          />
        )}
      </Layout>
    );
  }
}
