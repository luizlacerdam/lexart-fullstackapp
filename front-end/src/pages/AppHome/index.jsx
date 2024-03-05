import { useLoaderData } from 'react-router-dom';
import React from 'react';

export default function AppHome() {
  const dataProducts = useLoaderData();
  console.log(dataProducts);
  return (
    <div className="bg-primary d-flex flex-row justify-content-around">
      <div className="">
        PRODUCT CARDS
      </div>
    </div>
  );
}
