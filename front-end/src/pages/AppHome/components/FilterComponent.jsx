import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/FilterComponent.css'; // Make sure to import the custom CSS

export default function FilterComponent({ setProducts, dataProducts }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('name');

  const filterProducts = () => {
    if (search === '') {
      setProducts(dataProducts);
      return;
    }

    const filteredProducts = dataProducts.filter(
      (product) => product[filter].toLowerCase().includes(search.toLowerCase()),
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="mb-5">
      <h1 className="text-center mb-3">Search Component</h1>
      <div
        className="d-flex flex-column
       flex-md-row justify-content-around align-items-center"
      >
        <input
          id="search-input"
          type="text"
          className="form-control search-inputs mb-3 mb-md-0"
          placeholder="Search"
          onChange={ (e) => setSearch(e.target.value) }
          onKeyUp={ filterProducts }
          value={ search }
        />
        <select
          id="search-select-input"
          className="form-select search-inputs"
          aria-label="Default select example"
          onChange={ (e) => setFilter(e.target.value) }
          value={ filter }
        >
          <option value="name">Name</option>
          <option value="brand">Brand</option>
          <option value="model">Model</option>
          <option value="color">Color</option>
        </select>
      </div>
    </div>
  );
}

FilterComponent.propTypes = {
  setProducts: PropTypes.func.isRequired,
  dataProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      brand: PropTypes.string,
      model: PropTypes.string,
      color: PropTypes.string,
      price: PropTypes.string,
    }),
  ).isRequired,
};
