import React from "react";
import "./App.css";
import Paginaprincipal from "./pages/paginaprincipal/Paginaprincipal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaDetalles from "./pages/paginaDetalles/PaginaDetalles";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Paginaprincipal /> },
    { path: "/pokemon/:id", element: <PaginaDetalles /> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
