import React from 'react';
import Modal from 'react-bootstrap/Modal'
import { useDispatch } from "react-redux";
import { updateShowModal, updateShowVideo } from '../actions/webbingtonActions';
import './Webbington.styles.scss';

const WebbingtonModal = ({show, title}) => {
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(updateShowModal(false));
  }

  function buttonClick() {
    dispatch(updateShowVideo(true));
  }

  return (
    <Modal show={show} onHide={handleClose} title={title}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Why search for something when we have something worth finding! <button onClick={buttonClick}>Click here</button></p>
      </Modal.Body>
   </Modal>);
}

export default WebbingtonModal;
