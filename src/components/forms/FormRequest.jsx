import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { TextInput, Select, SelectItem, RadioButtonGroup, RadioButton, Button } from 'carbon-components-react';
import { Container, Row, Col } from 'reactstrap';
import './FormRequest.scss';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  initialData: PropTypes.shape({
    id: PropTypes.string,
    purpose: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.string,
  }),
  action: PropTypes.func,
};
const defaultProps = {
  title: null,
  initialData: { id: '', purpose: '', firstName: '', lastName: '', gender: '' },
  action: null,
};

const FormRequest = (props) => {
  const { title, initialData, action } = props;
  const formData = initialData;
  const [isValid, setIsValid] = useState(false);

  const onSubmit = async (values, form) => {
    action(values, form);
  };

  return (
    <Container className='form'>
      {title ? <h2 className='form__title'>{title}</h2> : <></>}
      <Form
        onSubmit={onSubmit}
        initialValues={formData}
        validate={(values) => {
          const errors = {};
          if (values.lastName && values.firstName && values.gender && values.purpose) {
            setIsValid(true);
          } else {
            setIsValid(false);
          }
          if (!values.firstName) {
            errors.firstName = 'Required';
          }
          if (!values.lastName) {
            errors.lastName = 'Required';
          }
          if (!values.gender) {
            errors.gender = 'Required';
          }
          if (!values.purpose) {
            errors.purpose = 'Required';
          }

          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className=''>
            <Row>
              <Col className='col-md-12'>
                <Field name='purpose'>
                  {({ input, meta }) => (
                    <div className='form__field'>
                      <Select
                        {...input}
                        required
                        id='select-1'
                        invalidText='This is an invalid error message.'
                        invalid={meta.error && meta.touched}
                        labelText='Select purpose of the request'>
                        {values.purpose ? (
                          <SelectItem text={values.purpose} value={values.purpose} disabled />
                        ) : (
                          <SelectItem text='Purpose' value='' disabled />
                        )}
                        <SelectItem text='Job proposition' value='Job proposition' />
                        <SelectItem text='Review' value='Review' />
                        <SelectItem text='Another' value='Another' />
                      </Select>
                    </div>
                  )}
                </Field>
              </Col>
            </Row>
            <Row>
              <Field name='firstName'>
                {({ input, meta }) => (
                  <Col className='form__field col-sm-6 col-12'>
                    <TextInput
                      {...input}
                      required
                      className='bx--text-input--lg'
                      labelText=''
                      id='firstName'
                      invalidText='Input First Name.'
                      invalid={meta.error && meta.touched}
                      placeholder='First Name'
                    />
                  </Col>
                )}
              </Field>
              <Field name='lastName'>
                {({ input, meta }) => (
                  <Col className='form__field col-sm-6 col-12'>
                    <TextInput
                      {...input}
                      required
                      labelText=''
                      className='bx--text-input--lg'
                      invalid={meta.error && meta.touched}
                      id='test2'
                      invalidText='Input Last Name.'
                      placeholder='Last Name'
                    />
                  </Col>
                )}
              </Field>
            </Row>
            <Row>
              <Col>
                <Field name='gender'>
                  {({ input, meta }) => (
                    <div className='form__field'>
                      <h4 htmlFor='male'>Gender</h4>
                      <RadioButtonGroup
                        {...input}
                        invalid={meta.error && meta.touched}
                        invalidText='This is an invalid error message.'
                        defaultSelected={values.gender}
                        legend='Group Legend'
                        labelText='Last Name'
                        valueSelected={values.gender}
                        name='radio-button-group'>
                        <RadioButton id='male' labelText='male' value='male' />
                        <RadioButton id='female' labelText='female' value='female' />
                        <RadioButton required id='another' labelText='another' value='another' />
                      </RadioButtonGroup>
                    </div>
                  )}
                </Field>
              </Col>
            </Row>

            <Row className='justify-content-center'>
              <Col className='d-flex form__field'>
                <Button
                  kind={!isValid ? 'danger--tertiary' : 'tertiary'}
                  type='submit'
                  className={`form__submit-btn ${!isValid ? 'button--disabled bx--btn--danger--tertiary' : ''}`}>
                  {!isValid ? 'Disabled' : 'Submit'}
                </Button>
              </Col>
              <Col className='d-flex form__field'>
                <Button
                  kind={submitting || pristine ? 'danger--tertiary' : 'tertiary'}
                  disabled={submitting || pristine}
                  className={`form__reset-btn ${
                    submitting || pristine ? 'button--disabled bx--btn--danger--tertiary' : ''
                  }`}
                  onClick={form.reset}
                  type='button'>
                  Reset
                </Button>
              </Col>
            </Row>
          </form>
        )}
      />
    </Container>
  );
};

FormRequest.propTypes = propTypes;
FormRequest.defaultProps = defaultProps;

export default FormRequest;
