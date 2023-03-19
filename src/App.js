import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home/Home'
import SearchResult, {loader as productLoader} from './pages/SearchResult/SearchResult'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "items",
        element: <SearchResult />,
        loader: productLoader
      },
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