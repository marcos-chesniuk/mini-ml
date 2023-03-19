import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from 'pages/Home/Home'
import SearchResult, {loader as productsLoader} from 'pages/SearchResult/SearchResult'
import ProductDetail, {loader as productLoader} from 'pages/ProductDetail/ProductDetail'
import 'styles/App.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "items",
        element: <SearchResult />,
        loader: productsLoader,
      },
      {
        path: "items/:id",
        element: <ProductDetail />,
        loader: productLoader,
      }
    ],
  },
]);

const App = () => {
  return (
    <div className='App'>
      <section className='App-content'>
        <RouterProvider router={router} />
      </section>
    </div>
  );
};

export default App;