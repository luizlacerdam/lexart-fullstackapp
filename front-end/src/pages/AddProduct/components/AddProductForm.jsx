import React from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';

export default function AddProductForm() {
  const actionReturn = useActionData();
  const { state } = useNavigation();
  const STATUS_CREATED = 201;
  return (
    <div
      className="d-flex justify-content-center
     align-items-center w-100 vh-100 bg-primary"
    >
      <div
        className="container-sm p-4 rounded
       bg-white shadow-lg"
        style={ { maxWidth: '500px' } }
      >
        <Form method="post" replace className="d-flex flex-column align-items-center">
          <h3 className="text-center mb-4">Add Product</h3>

          <div className="mb-3 w-100">
            <label htmlFor="name" className="form-label fs-5">Name</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-tag" />
              </span>
              <input
                id="name"
                className="form-control form-control-lg"
                type="text"
                name="name"
                placeholder="Enter product name"
                required
              />
            </div>
          </div>

          <div className="mb-3 w-100">
            <label htmlFor="brand" className="form-label fs-5">Brand</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-building" />
              </span>
              <input
                id="brand"
                className="form-control form-control-lg"
                type="text"
                name="brand"
                placeholder="Enter product brand"
                required
              />
            </div>
          </div>

          <div className="mb-3 w-100">
            <label htmlFor="model" className="form-label fs-5">Model</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-cpu" />
              </span>
              <input
                id="model"
                className="form-control form-control-lg"
                type="text"
                name="model"
                placeholder="Enter product model"
                required
              />
            </div>
          </div>

          <div className="mb-3 w-100">
            <label htmlFor="color" className="form-label fs-5">Color</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-palette" />
              </span>
              <input
                id="color"
                className="form-control form-control-lg"
                type="text"
                name="color"
                placeholder="Enter product color"
                required
              />
            </div>
          </div>

          <div className="mb-3 w-100">
            <label htmlFor="price" className="form-label fs-5">Price</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-currency-dollar" />
              </span>
              <input
                id="price"
                className="form-control form-control-lg"
                type="number"
                step={ 0.01 }
                name="price"
                placeholder="Enter product price"
                required
              />
            </div>
          </div>

          <div className="d-grid w-50 mt-4">
            <button
              className="btn btn-primary btn-lg"
              disabled={ state === 'submitting' }
            >
              {state === 'submitting' ? 'Adding...' : 'Add Product'}
            </button>
          </div>
        </Form>

        <span
          className={ `d-flex justify-content-center mt-3 p-1 text-${
            actionReturn?.status === STATUS_CREATED ? 'success' : 'danger'}` }
        >
          {actionReturn ? actionReturn.data.message : null}
        </span>
      </div>
    </div>
  );
}
