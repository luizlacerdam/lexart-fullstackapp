import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

function DeleteConfirmationModal({ show, onHide, onConfirm }) {
  return (
    <Modal show={ show } onHide={ onHide } centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this item?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={ onHide }>
          Cancel
        </Button>
        <Button variant="danger" onClick={ onConfirm }>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

DeleteConfirmationModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default DeleteConfirmationModal;
