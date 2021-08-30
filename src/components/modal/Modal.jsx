import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Buttons from '../buttons/Buttons';
import { editOneRequest, addOneRequest } from '../../redux/actions/index';
import { useGetOneRequest } from '../../cusom-hooks/GetOneRequest';
import Form from '../forms/FormRequest';

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
  const dispatch = useDispatch();

  if (type === 'edit') {
    const listRequests = useGetOneRequest(id);
    const handleEdit = (values) => {
      dispatch(editOneRequest(values, id));
    };
    return <Form title='Edit Request' action={handleEdit} initialData={listRequests?.rowData[0]} />;
  }
  if (type === 'add') {
    const handleAdd = (values, form) => {
      dispatch(addOneRequest(values));
      form.restart();
    };
    return <Form title='Add Request' action={handleAdd} />;
  }
  return <>{description}</>;
};
ModalBodyCs.propTypes = ModalBodyCsPropTypes;
ModalBodyCs.defaultProps = ModalBodyCsDefaultProps;

const confirmPropTypes = {
  type: PropTypes.string,
  isShowModal: PropTypes.bool,
  buttonLabel: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.string,
  continueAction: PropTypes.func,
  closeAction: PropTypes.func,
  id: PropTypes.string,
};
const confirmDefaultProps = {
  type: 'delete',
  isShowModal: false,
  buttonLabel: null,
  title: '',
  description: null,
  action: 'Continue',
  continueAction: null,
  closeAction: null,
  id: '',
};

const Confirm = (props) => {
  const { type, isShowModal, title, buttonLabel, description, action, continueAction, id, closeAction } = props;
  const [modal, setModal] = useState(isShowModal);
  useEffect(() => {
    setModal(isShowModal);
  }, [isShowModal]);
  const toggle = () => {
    setModal(!modal);
    if (closeAction) closeAction();
  };

  return (
    <>
      {type === 'notice' ? <> </> : <Buttons action={toggle} type={type} buttonLabel={buttonLabel} />}
      <Modal isOpen={modal} toggle={toggle} data-test='modal'>
        <ModalHeader toggle={toggle} data-testid='modal-header'>
          {title}
        </ModalHeader>
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
Confirm.propTypes = confirmPropTypes;
Confirm.defaultProps = confirmDefaultProps;

export default Confirm;
