/* eslint-disable react/jsx-max-depth */
import { useLoaderData } from 'react-router-dom';
import React from 'react';
import Table from 'react-bootstrap/Table';
import ProductCard from './components/ProductCard';
import FilterComponent from './components/FilterComponent';
import { getLocalStorage } from '../../utils/localStorageHandling';

export default function AppHome() {
  const dataProducts = useLoaderData();
  console.log(dataProducts);
  const user = getLocalStorage('user');
  return (
    <div
      className="bg-primary
     d-flex flex-row justify-content-around vh-100 overflow-auto"
    >
      <div className="container mt-5">
        <FilterComponent />
        <Table responsive striped bordered hover>
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
            {dataProducts.map((product) => (
              <ProductCard key={ product.id } product={ product } user={ user } />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
