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
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.brand}</td>
      <td>{product.model}</td>
      <td>{product.color}</td>
      <td>{product.price}</td>
      <td className="d-flex justify-content-around flex-wrap">
        <Button variant="primary" onClick={ handleEdit }>
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
