import React from 'react';
import Modal from 'react-bootstrap/Modal'
import { useDispatch } from "react-redux";
import { updateShowModal } from '../actions/webbingtonActions';
import './Webbington.styles.scss';

const WebbingtonModal = ({show, title}) => {
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(updateShowModal(false));
  }

  return (
    <Modal show={show} onHide={handleClose} title={title}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>
   </Modal>);
}

export default WebbingtonModal;
