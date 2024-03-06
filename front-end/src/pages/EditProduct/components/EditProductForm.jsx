/* eslint-disable no-magic-numbers */
/* eslint-disable no-constant-condition */
import React, { useState } from 'react';
import { Form, useActionData, useLoaderData, useNavigation } from 'react-router-dom';

export default function EditProductForm() {
  const dataProducts = useLoaderData();
  const actionReturn = useActionData();
  const [name, setName] = useState(dataProducts.name);
  const [brand, setBrand] = useState(dataProducts.brand);
  const [model, setModel] = useState(dataProducts.model);
  const [color, setColor] = useState(dataProducts.model);
  const [price, setPrice] = useState(dataProducts.price);

  const { state } = useNavigation();

  return (
    <div
      className="d-flex
    justify-content-center align-items-center w-100 vh-100 bg-primary"
    >
      <div className="container p-5 rounded bg-white">
        <Form method="post" replace className="d-flex flex-column align-items-center">
          <h3 className="text-center">Edit Product</h3>

          <div className="d-flex flex-direction-row align-items-baseline mb-2 w-25">
            <label htmlFor="id" className="fs-3">Id</label>
            <input
              className="form-control form-control-lg m-3"
              type="text"
              name="id"
              readOnly
              placeholder={ dataProducts.id }
              value={ dataProducts.id }
            />
          </div>
          <div className="d-flex flex-direction-row align-items-baseline mb-2 w-75">
            <label htmlFor="name" className="fs-3">Name</label>
            <input
              className="form-control form-control-lg m-3"
              type="text"
              name="name"
              placeholder={ dataProducts.name }
              onChange={ (e) => setName(e.target.value) }
              value={ name }
            />
          </div>
          <div className="d-flex flex-direction-row align-items-baseline mb-2 w-75">
            <label htmlFor="brand" className="fs-3">Brand</label>
            <input
              className="form-control form-control-lg m-3"
              type="text"
              name="brand"
              value={ brand }
              onChange={ (e) => setBrand(e.target.value) }
              placeholder={ dataProducts.brand }
            />
          </div>
          <div className="d-flex flex-direction-row align-items-baseline mb-2 w-75">
            <label htmlFor="model" className="fs-3">Model</label>
            <input
              className="form-control form-control-lg m-3"
              type="text"
              name="model"
              value={ model }
              onChange={ (e) => setModel(e.target.value) }
              placeholder={ dataProducts.model }
            />
          </div>
          <div className="d-flex flex-direction-row align-items-baseline mb-2 w-75">
            <label htmlFor="color" className="fs-3">Color</label>
            <input
              className="form-control form-control-lg m-3"
              type="text"
              name="color"
              value={ color }
              onChange={ (e) => setColor(e.target.value) }
              placeholder={ dataProducts.color }
            />
          </div>
          <div className="d-flex flex-direction-row align-items-baseline mb-2 w-75">
            <label htmlFor="price" className="fs-3">Price</label>
            <input
              className="form-control form-control-lg m-3"
              type="number"
              name="price"
              value={ price }
              onChange={ (e) => setPrice(e.target.value) }
              placeholder={ dataProducts.price }
            />
          </div>
          <div className="d-grid w-25 mt-5">
            <button
              className="btn btn-primary fs-2"
              disabled={ state === 'submitting' }
            >
              {state === 'submitting' ? 'Editing...' : 'Finish Editing'}
            </button>
          </div>

        </Form>
        <span
          className={ `d-flex
           justify-content-center mt-3 p-1 text-success` }
        >
          {actionReturn ? actionReturn.data.message : null}
        </span>
      </div>
    </div>
  );
}
