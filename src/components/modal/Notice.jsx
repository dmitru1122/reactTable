import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
  isShowModal: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  closeAction: PropTypes.func,
};
const defaultProps = {
  isShowModal: false,
  title: '',
  description: null,
  closeAction: null,
};

const Confirm = (props) => {
  const { title, isShowModal, description, closeAction } = props;
  const [modal, setModal] = useState(isShowModal);
  useEffect(() => {
    setModal(isShowModal);
  }, [isShowModal]);

  const toggle = () => {
    setModal(!modal);
    closeAction();
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle} data-test='modal'>
        <ModalHeader data-testid='modal-header' toggle={toggle}>
          {title}
        </ModalHeader>
        <ModalBody>{description}</ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
Confirm.propTypes = propTypes;
Confirm.defaultProps = defaultProps;

export default Confirm;
