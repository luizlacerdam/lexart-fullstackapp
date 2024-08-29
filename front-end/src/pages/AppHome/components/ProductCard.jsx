/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { requestDeleteWithToken } from '../../../utils/requests';

export default function ProductCard({ product, user, products, setProducts }) {
  const navigate = useNavigate();
  const deleteProduct = async () => {
    try {
      const response = await requestDeleteWithToken(`/product/${product.id}`, user.token);
      const newArray = products.filter((p) => p.id !== product.id);
      setProducts(newArray);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    navigate(`/app/edit/${product.id}`);
  };
  return (
    <tr className="text-center">
      <td data-label="Id">{product.id}</td>
      <td data-label="Name">{product.name}</td>
      <td data-label="Brand">{product.brand}</td>
      <td data-label="Model">{product.model}</td>
      <td data-label="Color">{product.color}</td>
      <td data-label="Price">{product.price}</td>
      <td
        data-label="Actions"
        className="d-flex flex-row
         flex-md-row justify-content-around align-items-center"
      >
        <Button variant="primary" onClick={ handleEdit } className="mb-2 mb-md-0">
          <i className="bi bi-pencil" />
        </Button>
        <Button variant="danger" onClick={ deleteProduct }>
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
  user: PropTypes.shape({
    token: PropTypes.string,
  }).isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    brand: PropTypes.string,
    model: PropTypes.string,
    color: PropTypes.string,
    price: PropTypes.string,
  })).isRequired,
  setProducts: PropTypes.func.isRequired,
};
