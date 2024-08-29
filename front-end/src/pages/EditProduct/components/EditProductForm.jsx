import React, { useState } from 'react';
import { Form, useActionData, useLoaderData, useNavigation } from 'react-router-dom';

export default function EditProductForm() {
  const dataProducts = useLoaderData();
  const actionReturn = useActionData();
  const [name, setName] = useState(dataProducts.name);
  const [brand, setBrand] = useState(dataProducts.brand);
  const [model, setModel] = useState(dataProducts.model);
  const [color, setColor] = useState(dataProducts.color);
  const [price, setPrice] = useState(dataProducts.price);

  const { state } = useNavigation();
  const OK = 200;
  return (
    <div
      className="d-flex justify-content-center
     align-items-center w-100 vh-100 bg-primary"
    >
      <div
        className="container-sm p-4
       rounded bg-white shadow-lg"
        style={ { maxWidth: '500px' } }
      >
        <Form method="post" replace className="d-flex flex-column align-items-center">
          <h3 className="text-center mb-4">Edit Product</h3>

          <div className="mb-3 w-100">
            <label htmlFor="id-input" className="form-label fs-5">Id</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-hash" />
              </span>
              <input
                id="id-input"
                className="form-control form-control-lg"
                type="text"
                name="id"
                readOnly
                value={ dataProducts.id }
              />
            </div>
          </div>

          <div className="mb-3 w-100">
            <label htmlFor="name-input" className="form-label fs-5">Name</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-tag" />
              </span>
              <input
                id="name-input"
                className="form-control form-control-lg"
                type="text"
                name="name"
                placeholder="Enter product name"
                value={ name }
                onChange={ (e) => setName(e.target.value) }
                required
              />
            </div>
          </div>

          <div className="mb-3 w-100">
            <label htmlFor="brand-input" className="form-label fs-5">Brand</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-building" />
              </span>
              <input
                id="brand-input"
                className="form-control form-control-lg"
                type="text"
                name="brand"
                placeholder="Enter product brand"
                value={ brand }
                onChange={ (e) => setBrand(e.target.value) }
                required
              />
            </div>
          </div>

          <div className="mb-3 w-100">
            <label htmlFor="model-input" className="form-label fs-5">Model</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-cpu" />
              </span>
              <input
                id="model-input"
                className="form-control form-control-lg"
                type="text"
                name="model"
                placeholder="Enter product model"
                value={ model }
                onChange={ (e) => setModel(e.target.value) }
                required
              />
            </div>
          </div>

          <div className="mb-3 w-100">
            <label htmlFor="color-input" className="form-label fs-5">Color</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-palette" />
              </span>
              <input
                id="color-input"
                className="form-control form-control-lg"
                type="text"
                name="color"
                placeholder="Enter product color"
                value={ color }
                onChange={ (e) => setColor(e.target.value) }
                required
              />
            </div>
          </div>

          <div className="mb-3 w-100">
            <label htmlFor="price-input" className="form-label fs-5">Price</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-currency-dollar" />
              </span>
              <input
                id="price-input"
                className="form-control form-control-lg"
                type="number"
                name="price"
                placeholder="Enter product price"
                value={ price }
                step={ 0.01 }
                onChange={ (e) => setPrice(e.target.value) }
                required
              />
            </div>
          </div>

          <div className="d-grid w-50 mt-4">
            <button
              className="btn btn-primary btn-lg"
              disabled={ state === 'submitting' }
            >
              {state === 'submitting' ? 'Editing...' : 'Finish Editing'}
            </button>
          </div>
        </Form>

        <span
          className={ `d-flex justify-content-center mt-3 p-1 
            text-${actionReturn?.status === OK ? 'success' : 'danger'}` }
        >
          {actionReturn ? actionReturn.data.message : null}
        </span>
      </div>
    </div>
  );
}
