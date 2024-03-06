import React from 'react';

export default function FilterComponent({ dataProducts }) {
  return (
    <div className="mb-5">
      <h1 className="text-center mb-3">Filter Component</h1>
      <div className="d-flex justify-content-around">
        <input type="text" className="form-control w-25" placeholder="Search" />
        <select className="form-select w-25" aria-label="Default select example">
          <option value="1">Brand</option>
          <option value="2">Model</option>
          <option value="3">Color</option>
        </select>
      </div>
    </div>
  );
}
