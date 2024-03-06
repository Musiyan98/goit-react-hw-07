import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least3 symbol long')
    .max(50, 'Name must be shorter than 50 symbol long')
    .required('This is required field'),
  number: Yup.string()
    .min(3, 'Number must be at least3 symbol long')
    .max(50, 'Number must be shorter than 50 symbol long')
    .required('This is required field'),
});

const ContactForm = () => {
  const nameFildId = nanoid();
  const numberFildId = nanoid();

  const dispatch = useDispatch();

  const pushContact = item => {
    dispatch(addContact(item));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(value, action) => {
        pushContact({
          id: Date.now(),
          ...value,
        });
        action.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.formItem}>
          <label className={css.label} htmlFor={nameFildId}>
            Name
          </label>
          <Field className={css.input} type="text" name="name" id={nameFildId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formItem}>
          <label className={css.label} htmlFor={numberFildId}>
            Number
          </label>
          <Field className={css.input} type="text" name="number" id={numberFildId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.submitButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
