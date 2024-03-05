import { useLoaderData } from 'react-router-dom';
import React from 'react';

export default function AppHome() {
  const dataProducts = useLoaderData();
  console.log(dataProducts);
  return (
    <div className="container bg-primary d-flex flex-row justify-content-around">
      <div className="">
        <h1>PRODUCTS</h1>
      </div>
      <div>
        <div>
          <h1>ADD PRODUCT</h1>
        </div>
        <div>
          sdasddsa
        </div>
      </div>
    </div>
  );
}
