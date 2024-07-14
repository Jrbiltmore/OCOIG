
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addGrant, updateGrant } from '../redux/actions/grantActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const GrantSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  amount: Yup.number().required('Required').positive('Must be a positive number'),
  status: Yup.string().required('Required'),
  dueDate: Yup.date().required('Required'),
});

const GrantForm = ({ grant, onSave }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleSubmit = async (values) => {
    try {
      if (grant) {
        await dispatch(updateGrant(grant._id, values));
      } else {
        await dispatch(addGrant(values));
      }
      onSave();
    } catch (err) {
      setError('Error saving grant');
    }
  };

  return (
    <div className="grant-form-container">
      <h2>{grant ? 'Edit Grant' : 'Add Grant'}</h2>
      <Formik
        initialValues={grant || { title: '', description: '', amount: '', status: 'pending', dueDate: '' }}
        validationSchema={GrantSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Title</label>
              <Field type="text" name="title" />
              <ErrorMessage name="title" component="div" className="error" />
            </div>
            <div>
              <label>Description</label>
              <Field type="text" name="description" />
              <ErrorMessage name="description" component="div" className="error" />
            </div>
            <div>
              <label>Amount</label>
              <Field type="number" name="amount" />
              <ErrorMessage name="amount" component="div" className="error" />
            </div>
            <div>
              <label>Status</label>
              <Field as="select" name="status">
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </Field>
              <ErrorMessage name="status" component="div" className="error" />
            </div>
            <div>
              <label>Due Date</label>
              <Field type="date" name="dueDate" />
              <ErrorMessage name="dueDate" component="div" className="error" />
            </div>
            {error && <div className="error">{error}</div>}
            <button type="submit" disabled={isSubmitting}>{grant ? 'Update Grant' : 'Add Grant'}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

GrantForm.propTypes = {
  grant: PropTypes.object,
  onSave: PropTypes.func.isRequired,
};

export default GrantForm;
