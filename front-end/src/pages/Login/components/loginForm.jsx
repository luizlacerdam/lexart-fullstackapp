import React from 'react';
import { Form, Link, useActionData, useNavigation } from 'react-router-dom';

export default function LoginForm() {
  const actionReturn = useActionData();
  const { state } = useNavigation();

  return (
    <div
      className="d-flex
    justify-content-center align-items-center w-100 vh-100 bg-primary"
    >
      <div className="form-container p-5 rounded bg-white">
        <Form method="post" replace>
          <h3 className="text-center">Login</h3>
          <div className="mb-2">
            <label htmlFor="email-field">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email-field"
              placeholder="Enter email"
              autoComplete="email"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password-field">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password-field"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid">
            <button
              className="btn btn-primary"
              disabled={ state === 'submitting' }
              aria-busy={ state === 'submitting' }
            >
              {state === 'submitting' ? 'Logging in...' : 'Log in'}
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <Link className="mt-3" to="/signup">
              Sign up?
            </Link>
          </div>
        </Form>
        <span
          className="d-flex justify-content-center mt-3 p-1 text-danger"
          aria-live="polite"
        >
          {actionReturn ? actionReturn.response.data.message : null}
        </span>
      </div>
    </div>
  );
}
