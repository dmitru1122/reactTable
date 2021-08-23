import React from 'react';
import PropTypes from 'prop-types';

const ButtonsPropTypes = {
  children: PropTypes.string,
};
const ButtonDefaultProps = {
  children: '',
};

const Title = ({ children }) => <h1>{children}</h1>;

Title.propTypes = ButtonsPropTypes;
Title.defaultProps = ButtonDefaultProps;
export default Title;
