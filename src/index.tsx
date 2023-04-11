import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Books from "./components/Books";
import BookForm from "./components/BookForm";
import Book from "./components/Book";
import { Provider } from 'react-redux';
import { store } from './store/store';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "book/:bookId",
        element: <Book />,
      },
      {
        path: "book/create",
        element: <BookForm />,
      },
      {
        path: "",
        element: <Books />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
