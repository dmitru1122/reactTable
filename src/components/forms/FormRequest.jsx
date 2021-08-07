/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { TextInput, Select, SelectItem, RadioButtonGroup, RadioButton } from 'carbon-components-react';
import './FormRequest.scss';
// import styles from './OtherFinalForumRecord.module.scss';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values, form) => {
  console.log(values);
  console.log(form);
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
  form.restart();
};

export default () => {
  const formData = {};
  const [isValid, setIsValid] = useState(false);

  return (
    <div className='{styles.wrapper}'>
      <div className='{styles.title}'>React Final Form Example</div>
      <Form
        onSubmit={onSubmit}
        initialValues={formData}
        validate={(values) => {
          const errors = {};
          if (values.lastName && values.firstName && values.gender && values.favoriteColor) {
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
          if (!values.favoriteColor) {
            errors.favoriteColor = 'Required';
          }
          //   if (!values.confirm) {
          //     errors.confirm = 'Required';
          //   } else if (values.confirm !== values.password) {
          //     errors.confirm = 'Must match';
          //   }
          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name='firstName'>
              {({ input, meta }) => (
                <div>
                  <TextInput
                    {...input}
                    required
                    id='firstName'
                    invalidText='Input First Name.'
                    invalid={meta.error && meta.touched}
                    labelText='First Name'
                    placeholder='Placeholder text'
                  />
                </div>
              )}
            </Field>
            <Field name='lastName'>
              {({ input, meta }) => (
                <div>
                  <TextInput
                    {...input}
                    required
                    invalid={meta.error && meta.touched}
                    id='test2'
                    invalidText='Input First Name.'
                    labelText='Last Name'
                    placeholder='Placeholder text'
                  />
                </div>
              )}
            </Field>
            <label>Gender</label>
            <Field name='gender'>
              {({ input, meta }) => (
                <>
                  <RadioButtonGroup
                    {...input}
                    invalid={meta.error && meta.touched}
                    invalidText='This is an invalid error message.'
                    legend='Group Legend'
                    labelText='Last Name'
                    valueSelected={values.gender}
                    name='radio-button-group'>
                    <RadioButton id='radio-1' labelText='Men' value='men' />
                    <RadioButton id='radio-2' labelText='Woman' value='woman' />
                    <RadioButton required id='radio-3' labelText='Hidden' value='hidden' />
                  </RadioButtonGroup>
                </>
              )}
            </Field>
            <Field name='favoriteColor'>
              {({ input, meta }) => (
                <div>
                  <Select
                    {...input}
                    required
                    id='select-1'
                    invalidText='This is an invalid error message.'
                    invalid={meta.error && meta.touched}
                    labelText='Select'>
                    <SelectItem text='Purpose' value='' disabled />
                    <SelectItem text='Option 1' value='option-1' />
                    <SelectItem text='Option 2' value='option-2' />
                    <SelectItem text='Option 3' value='option-3' />
                  </Select>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <div className='{styles.buttons}'>
              <button type='submit' className={`form__submit-btn ${!isValid ? 'form__submit-btn--disabled' : ''}`}>
                Submit
              </button>
              <button type='button' onClick={form.reset} disabled={submitting || pristine}>
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
};
<Field name='toppings' component='select' multiple>
  <option value='chicken'>🐓 Chicken</option>
  <option value='ham'>🐷 Ham</option>
  <option value='mushrooms'>🍄 Mushrooms</option>
  <option value='cheese'>🧀 Cheese</option>
  <option value='tuna'>🐟 Tuna</option>
  <option value='pineapple'>🍍 Pineapple</option>
</Field>;
// export default FormRequest;

// import React from 'react';
// import { Form, Field } from 'react-final-form';

// // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// // const onSubmit = async (values) => {
// //   await sleep(300);
// //   window.alert(JSON.stringify(values, 0, 2));
// // };
// const submit = (val) => console.log(val);

// const FormRequest = () => (
//   <div>
//     <h1>🏁 React Final Form - Simple Example</h1>
//     <a href='https://github.com/erikras/react-final-form#-react-final-form'>Read Docs</a>
//     <Form
//       onSubmit={submit}
//       initialValues={{ stooge: 'larry', employed: false }}
//       render={({ handleSubmit, form, submitting, pristine, values }) => (
//         <form onSubmit={handleSubmit}>
//           <div>
//             {/* <label>First Name</label> */}
//             <Field name='firstName' component='input' type='text' placeholder='First Name' validate={required} />
//           </div>
//           <div>
//             {/* <label>Last Name</label> */}
//             <Field name='lastName' component='input' type='text' placeholder='Last Name' />
//           </div>
//           <div>
//             {/* <label>Employed</label> */}
//             <Field name='employed' component='input' type='checkbox' />
//           </div>
//           <div>
//             {/* <label>Favorite Color</label> */}
//             <Field name='favoriteColor' component='select'>
//               <option value=''>1</option>
//               <option value='#ff0000'>❤️ Red</option>
//               <option value='#00ff00'>💚 Green</option>
//               <option value='#0000ff'>💙 Blue</option>
//             </Field>
//           </div>
//           <div>
//             {/* <label>Toppings</label> */}
//             <Field name='toppings' component='select' multiple>
//               <option value='chicken'>🐓 Chicken</option>
//               <option value='ham'>🐷 Ham</option>
//               <option value='mushrooms'>🍄 Mushrooms</option>
//               <option value='cheese'>🧀 Cheese</option>
//               <option value='tuna'>🐟 Tuna</option>
//               <option value='pineapple'>🍍 Pineapple</option>
//             </Field>
//           </div>
//           <div>
//             {/* <label>Sauces</label> */}
//             <div>
//               {/* <label> */}
//               <Field name='sauces' component='input' type='checkbox' value='ketchup' /> Ketchup
//               {/* </label> */}
//               {/* <label> */}
//               <Field name='sauces' component='input' type='checkbox' value='mustard' /> Mustard
//               {/* </label> */}
//               {/* <label> */}
//               <Field name='sauces' component='input' type='checkbox' value='mayonnaise' /> Mayonnaise
//               {/* </label> */}
//               {/* <label> */}
//               <Field name='sauces' component='input' type='checkbox' value='guacamole' /> Guacamole 🥑
//               {/* </label> */}
//             </div>
//           </div>
//           <div>
//             {/* <label>Best Stooge</label> */}
//             <div>
//               {/* <label> */}
//               <Field name='stooge' component='input' type='radio' value='larry' /> Larry
//               {/* </label> */}
//               {/* <label> */}
//               <Field name='stooge' component='input' type='radio' value='moe' /> Moe
//               {/* </label> */}
//               {/* <label> */}
//               <Field name='stooge' component='input' type='radio' value='curly' /> Curly
//               {/* </label> */}
//             </div>
//           </div>
//           <div>
//             {/* <label>Notes</label> */}
//             <Field name='notes' component='textarea' placeholder='Notes' />
//           </div>
//           <div className='buttons'>
//             <button type='submit' disabled={submitting || pristine}>
//               Submit
//             </button>
//             <button type='button' onClick={form.reset} disabled={submitting || pristine}>
//               Reset
//             </button>
//           </div>
//           <pre>{JSON.stringify(values, 0, 2)}</pre>
//         </form>
//       )}
//     />
//   </div>
// );
// export default FormRequest;
