import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

class SearchBar extends Component {
  state = {
    query: '',
  };
  HandleSubmit = event => {
    event.preventDefault();
    this.props.HandleQueryInput(this.state.query);
  };

  HandleInputChange = event => {
    if (event.target.value.length === 0) {
      this.setState({ query: ' ' });
    }
    this.setState({ query: event.target.value });
  };
  render() {
    const { HandleQueryInput } = this.props;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.HandleSubmit}>
          <button className={styles.SearchFormButton} type="submit">
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.HandleInputChange}
          />
        </form>
      </header>
    );
  }
}
SearchBar.propTypes = {
  HandleQueryInput: PropTypes.func.isRequired,
};
export default SearchBar;
