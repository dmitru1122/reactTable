import React, { useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { TextInput, Select, SelectItem, RadioButtonGroup, RadioButton, Button } from 'carbon-components-react';
import { Container, Row, Col } from 'reactstrap';
import './FormRequest.scss';
import PropTypes from 'prop-types';

const selectItemList = [
  { text: 'Job proposition', value: 'Job proposition' },
  { text: 'Review', value: 'Review' },
  { text: 'Another', value: 'Another' },
];

const FormRequest = (props) => {
  const { title, initialData, action } = props;
  const [formData, setFormData] = useState({ initialData });
  const [isValid, setIsValid] = useState(false);
  const onSubmit = (values, form) => {
    action(values, form);
  };

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  return (
    <Container className='form'>
      {title && <h2 className='form__title'>{title}</h2>}
      <Form
        onSubmit={onSubmit}
        initialValues={formData}
        validate={(values) => {
          if (values.lastName && values.firstName && values.gender && values.purpose) {
            setIsValid(true);
          } else {
            setIsValid(false);
          }
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} data-testid='form'>
            <Row>
              <Col className='col-md-12'>
                <Field name='purpose'>
                  {({ input, meta }) => (
                    <div className='form__field'>
                      <Select
                        {...input}
                        required
                        id='select-1'
                        data-testid='purpose-select'
                        invalidText='This is an invalid error message.'
                        invalid={meta.error && meta.touched}
                        labelText='Select purpose of the request'>
                        <SelectItem text={values.purpose || 'Purpose'} value={values.purpose || ''} disabled />
                        {selectItemList.map((item) => (
                          <SelectItem text={item.text} key={item.text} value={item.value} />
                        ))}
                      </Select>
                    </div>
                  )}
                </Field>
              </Col>
            </Row>
            <Row>
              <Col className='form__field col-sm-6 col-12'>
                <Field name='firstName'>
                  {({ input, meta }) => (
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
                  )}
                </Field>
              </Col>
              <Col className='form__field col-sm-6 col-12'>
                <Field name='lastName'>
                  {({ input, meta }) => (
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
                  )}
                </Field>
              </Col>
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
                  className={`form__submit-btn ${!isValid && 'button--disabled bx--btn--danger--tertiary'}`}>
                  {!isValid ? 'Disabled' : 'Submit'}
                </Button>
              </Col>
              <Col className='d-flex form__field'>
                <Button
                  kind={submitting || pristine ? 'danger--tertiary' : 'tertiary'}
                  disabled={submitting || pristine}
                  className={`form__reset-btn ${
                    (submitting || pristine) && 'button--disabled bx--btn--danger--tertiary'
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

FormRequest.propTypes = {
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
FormRequest.defaultProps = {
  title: null,
  initialData: { id: '', purpose: '', firstName: '', lastName: '', gender: '' },
  action: null,
};

export default FormRequest;
