import React from 'react';
import { TrashCan32 as Delete, Edit32 as Edit, Add32 as Add } from '@carbon/icons-react';
import { Button as ButtonCarbon } from 'carbon-components-react';

import PropTypes from 'prop-types';

const ButtonsPropTypes = {
  type: PropTypes.string,
  buttonLabel: PropTypes.string,
  action: PropTypes.func,
};
const ButtonDefaultProps = {
  type: '',
  buttonLabel: '',
  action: null,
};

const Buttons = (props) => {
  const { action, type, buttonLabel } = props;
  if (type === 'delete') {
    return (
      <ButtonCarbon
        hasIconOnly
        renderIcon={Delete}
        onClick={action}
        tooltipAlignment='center'
        tooltipPosition='bottom'
        iconDescription='Delete row'
        kind='ghost'
      />
    );
  }
  if (type === 'edit') {
    return (
      <ButtonCarbon
        hasIconOnly
        renderIcon={Edit}
        onClick={action}
        tooltipAlignment='center'
        tooltipPosition='bottom'
        iconDescription='Edit row'
        kind='ghost'
      />
    );
  }
  if (type === 'add') {
    return (
      <ButtonCarbon className='button-add' onClick={action} renderIcon={Add} kind='primary'>
        Add new
      </ButtonCarbon>
    );
  }
  return (
    <ButtonCarbon data-test='default-btn' color='danger' onClick={action}>
      {buttonLabel}
    </ButtonCarbon>
  );
};
Buttons.propTypes = ButtonsPropTypes;
Buttons.defaultProps = ButtonDefaultProps;

export default Buttons;
