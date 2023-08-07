import React from "react";
import "./App.css";
import Paginaprincipal from "./pages/paginaprincipal/Paginaprincipal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Paginaprincipal /> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
