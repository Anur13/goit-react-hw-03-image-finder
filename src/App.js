import GetPage from './Utils/Apis';
import React, { Component } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Modal from './Components/Modal/Modal';
import Loader from 'react-loader-spinner';
import './index.css';

class App extends Component {
  state = {
    query: '',
    pageNumber: 1,
    bigPicture: '',
    showModal: false,
    loader: false,
    galleryPresent: false,
    nothingFound: false,
  };
  ToggleModal = () => {
    this.setState(prevState => {
      return { showModal: !prevState.showModal };
    });
  };

  ToggleFound = () => {
    this.setState({ nothingFound: true });
  };

  ToggleGalleryState = state => {
    this.setState({ galleryPresent: state });
  };
  ToggleLoader = () => {
    this.setState({ loader: !this.state.loader });
  };
  HandlePictureModal = Url => {
    this.setState({ bigPicture: Url });
  };

  HandleQueryInput = query => {
    this.setState({ query: query });
  };
  SetPageNumber = page => {
    this.setState({ pageNumber: page });
  };

  HandleLoadMoreButton = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  render() {
    return (
      <div className="container">
        {this.state.showModal && (
          <Modal
            ToggleModal={this.ToggleModal}
            bigPicture={this.state.bigPicture}
          />
        )}

        <SearchBar HandleQueryInput={this.HandleQueryInput} />
        {this.state.query.length > 0 && (
          <ImageGallery
            ToggleFound={this.ToggleFound}
            ToggleGalleryState={this.ToggleGalleryState}
            ToggleLoader={this.ToggleLoader}
            ToggleModal={this.ToggleModal}
            HandleLoadMoreButton={this.HandleLoadMoreButton}
            HandlePictureModal={this.HandlePictureModal}
            SetPageNumber={this.SetPageNumber}
            {...this.state}
          />
        )}
        {!this.state.galleryPresent &&
          !this.state.loader &&
          this.state.nothingFound && <span>Nothing was found</span>}
        {this.state.loader && (
          <Loader
            className="Loader"
            type="TailSpin"
            color="#00BFFF"
            height={150}
            width={150}
            timeout={6000} //3 secs
          />
        )}
      </div>
    );
  }
}

export default App;
