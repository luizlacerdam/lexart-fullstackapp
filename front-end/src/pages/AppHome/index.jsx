/* eslint-disable react/jsx-max-depth */
import { useLoaderData } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ProductCard from './components/ProductCard';
import FilterComponent from './components/FilterComponent';
import { getLocalStorage } from '../../utils/localStorageHandling';
import './styles/appHome.css';

export default function AppHome() {
  const dataProducts = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(dataProducts);
  }, [dataProducts]);

  const user = getLocalStorage('user');

  return (
    <div
      className="bg-primary d-flex
     flex-column justify-content-start vh-100 overflow-auto"
    >
      <div className="container mt-5">
        <FilterComponent
          setProducts={ setProducts }
          products={ products }
          dataProducts={ dataProducts }
        />
        <div className="table-responsive">
          <Table striped bordered hover className="product-table">
            <thead>
              <tr className="text-center">
                <th>Id</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Color</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ProductCard
                  key={ product.id }
                  product={ product }
                  user={ user }
                  setProducts={ setProducts }
                  products={ products }
                />
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
