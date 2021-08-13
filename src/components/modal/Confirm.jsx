import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import { Delete16 as Delete } from '@carbon/icons-react';

import { Button as ButtonCarbon } from 'carbon-components-react';

const propTypes = {
  type: PropTypes.string,
  buttonLabel: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.string,
  continueAction: PropTypes.func,
};
const defaultProps = {
  type: 'delete',
  buttonLabel: null,
  title: '',
  description: null,
  action: 'Continue',
  continueAction: null,
};

const Confirm = (props) => {
  const { type, title, buttonLabel, description, action, continueAction } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      {type === 'delete' ? (
        <ButtonCarbon
          hasIconOnly
          renderIcon={Delete}
          onClick={toggle}
          tooltipAlignment='center'
          tooltipPosition='bottom'
          iconDescription='Edit row'
          kind='ghost'
        />
      ) : (
        <Button color='danger' onClick={toggle}>
          {buttonLabel}
        </Button>
      )}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{description}</ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={continueAction}>
            {action}
          </Button>

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
