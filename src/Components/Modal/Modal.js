import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const modal = document.querySelector('#modal');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.ToggleModal();
    }
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.ToggleModal();
    }
  };
  render() {
    const { ToggleModal } = this.props;
    return createPortal(
      <div onClick={this.handleBackdropClick} className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={this.props.bigPicture} alt="" />
        </div>
      </div>,
      modal,
    );
  }
}
Modal.propTypes = {
  ToggleModal: PropTypes.func.isRequired,
};
export default Modal;
