import React, { useState, useRef } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import Buttons from '../buttons/Buttons';

import EditRequest from '../pages/edit-request/EditRequest';
import AddRequest from '../pages/add-request/AddNewRequest';

const propTypes = {
  type: PropTypes.string,
  buttonLabel: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.string,
  continueAction: PropTypes.func,
  id: PropTypes.string,
};
const defaultProps = {
  type: 'delete',
  buttonLabel: null,
  title: '',
  description: null,
  action: 'Continue',
  continueAction: null,
  id: '',
};

const ModalBodyCsPropTypes = {
  type: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
};
const ModalBodyCsDefaultProps = {
  type: 'delete',

  description: null,
  id: '',
};

const ModalBodyCs = (props) => {
  const { type, id, description } = props;
  if (type === 'edit') {
    return <EditRequest id={id} />;
  }
  if (type === 'add') {
    return <AddRequest />;
  }
  return <>{description}</>;
};
ModalBodyCs.propTypes = ModalBodyCsPropTypes;
ModalBodyCs.defaultProps = ModalBodyCsDefaultProps;

const Confirm = (props) => {
  const { type, title, buttonLabel, description, action, continueAction, id } = props;
  const [modal, setModal] = useState(false);
  const fffff = useRef(null);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Buttons action={toggle} type={type} buttonLabel={buttonLabel} />
      <Modal isOpen={modal} toggle={toggle} ref={fffff}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <ModalBodyCs type={type} description={description} id={id} />
        </ModalBody>
        <ModalFooter>
          {type === 'delete' ? (
            <Button color='primary' onClick={continueAction}>
              {action}
            </Button>
          ) : (
            <></>
          )}

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
