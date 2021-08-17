import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
  isShowModal: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};
const defaultProps = {
  isShowModal: false,
  title: '',
  description: null,
};

const Confirm = (props) => {
  const { title, isShowModal, description } = props;
  const [modal, setModal] = useState(isShowModal);
  useEffect(() => {
    setModal(isShowModal);
  }, [isShowModal]);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
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
