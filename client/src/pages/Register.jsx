
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/authActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password too short').required('Required'),
  role: Yup.string().required('Required'),
});

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleSubmit = async (values) => {
    try {
      await dispatch(registerUser(values));
      history.push('/login');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '', role: 'user' }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label>Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div>
              <label>Role</label>
              <Field as="select" name="role">
                <option value="user">User</option>
                <option value="engager">Engager</option>
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
                <option value="inspector_general">Inspector General</option>
              </Field>
              <ErrorMessage name="role" component="div" className="error" />
            </div>
            {error && <div className="error">{error}</div>}
            <button type="submit" disabled={isSubmitting}>Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
