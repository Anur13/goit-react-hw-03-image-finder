import React, { Component } from 'react';
import fetchPictures from '../../Utils/Apis';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
class ImageGallery extends Component {
  state = {
    pictures: [],
    totalPages: 0,
  };

  componentDidMount() {
    this.UpdatePictures();
  }
  componentDidUpdate({ query, pageNumber }, prevState) {
    if (query !== this.props.query) {
      this.setState({ pictures: [] });
      this.UpdatePictures();
    }
    if (pageNumber !== this.props.pageNumber) {
      this.UpdatePictures();
    }
    if (this.props.query === '') {
      this.setState({ pictures: [] });
    }

    if (prevState !== this.state) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  componentWillUnmount() {
    this.props.ToggleGalleryState(false);
  }

  UpdatePictures = async () => {
    const {
      query,
      pageNumber,
      ToggleLoader,
      ToggleGalleryState,
      ToggleFound,
    } = this.props;
    ToggleLoader();
    await fetchPictures({ query, pageNumber })
      .then(resp =>
        this.setState(({ pictures }) => ({
          pictures: [...pictures, ...resp.hits],
          totalPages: Math.round(resp.totalHits / 12),
        })),
      )
      .finally(() => this.props.ToggleLoader());

    if (this.state.pictures.length > 0) {
      ToggleGalleryState(true);
    }
    ToggleFound();
  };

  test = data => {
    // console.log(data);
    this.setState({ pictures: [] });

    this.props.SetPageNumber(data.selected);
  };
  render() {
    return (
      <>
        <ul className={styles.ImageGallery}>
          {this.state.pictures.map(item => {
            return (
              <ImageGalleryItem
                ToggleModal={this.props.ToggleModal}
                HandlePictureModal={this.props.HandlePictureModal}
                key={item.id}
                {...item}
              />
            );
          })}
        </ul>
        {this.state.pictures.length > 0 && (
          <LoadMoreButton
            HandleLoadMoreButton={this.props.HandleLoadMoreButton}
          />
        )}
        <div>
          <ReactPaginate
            pageCount={this.state.totalPages}
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.test}
            containerClassName={styles.pagination}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>

        {/* <button onClick={this.test} type="button">
          1
        </button>
        <button onClick={this.test} type="button">
          2
        </button>
        <button onClick={this.test} type="button">
          3
        </button> */}
      </>
    );
  }
}
ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  ToggleLoader: PropTypes.func.isRequired,
  ToggleGalleryState: PropTypes.func.isRequired,
  ToggleFound: PropTypes.func.isRequired,
};

export default ImageGallery;
