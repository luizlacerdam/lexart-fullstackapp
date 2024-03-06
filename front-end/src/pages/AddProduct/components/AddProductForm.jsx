/* eslint-disable no-magic-numbers */
/* eslint-disable no-constant-condition */
import React from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';

export default function AddProductForm() {
  const actionReturn = useActionData();

  const { state } = useNavigation();

  return (
    <div
      className="d-flex
    justify-content-center align-items-center w-100 vh-100 bg-primary"
    >
      <div className="container p-5 rounded bg-white">
        <Form method="post" replace className="d-flex flex-column align-items-center">
          <h3 className="text-center">Add Product</h3>
          <div className="d-flex flex-direction-row align-items-baseline mb-2 w-75">
            <label htmlFor="name" className="fs-3">Name</label>
            <input
              className="form-control form-control-lg m-3"
              type="text"
              name="name"
              placeholder="Enter product name"
            />
          </div>
          <div className="d-flex flex-direction-row align-items-baseline mb-2 w-75">
            <label htmlFor="brand" className="fs-3">Brand</label>
            <input
              className="form-control form-control-lg m-3"
              type="text"
              name="brand"
              placeholder="Enter product brand"
            />
          </div>
          <div className="d-flex flex-direction-row align-items-baseline mb-2 w-75">
            <label htmlFor="model" className="fs-3">Model</label>
            <input
              className="form-control form-control-lg m-3"
              type="text"
              name="model"
              placeholder="Enter product codel"
            />
          </div>
          <div className="d-flex flex-direction-row align-items-baseline mb-2 w-75">
            <label htmlFor="color" className="fs-3">Color</label>
            <input
              className="form-control form-control-lg m-3"
              type="text"
              name="color"
              placeholder="Enter product color"
            />
          </div>
          <div className="d-flex flex-direction-row align-items-baseline mb-2 w-75">
            <label htmlFor="price" className="fs-3">Price</label>
            <input
              className="form-control form-control-lg m-3"
              type="number"
              name="price"
              placeholder="Enter product price"
            />
          </div>
          <div className="d-grid w-25 mt-5">
            <button
              className="btn btn-primary fs-2"
              disabled={ state === 'submitting' }
            >
              {state === 'submitting' ? 'Adding...' : 'Add Product'}
            </button>
          </div>

        </Form>
        <span
          className={ `d-flex
           justify-content-center mt-3 p-1 text-${201 ? 'success' : 'danger'}` }
        >
          {actionReturn ? actionReturn.data.message : null}
        </span>
      </div>
    </div>
  );
}
