/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  return (
    <tr className="text-center">
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.brand}</td>
      <td>{product.model}</td>
      <td>{product.color}</td>
      <td>{product.price}</td>
      <td className="d-flex justify-content-around flex-wrap">
        <Button variant="primary">
          <i className="bi bi-pencil" />
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash" />
        </Button>
      </td>
    </tr>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    brand: PropTypes.string,
    model: PropTypes.string,
    color: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};
