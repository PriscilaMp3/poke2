import React from "react";
import "./App.css";
import Paginaprincipal from "./pages/paginaprincipal/Paginaprincipal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaDetalles from "./pages/paginaDetalles/PaginaDetalles";
import Paginaevoluciones from "./pages/paginaEvoluciones/Paginaevoluciones";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Paginaprincipal /> },
    { path: "/pokemon/:id", element: <PaginaDetalles /> },
    { path: "/evoluciones/:id", element: <Paginaevoluciones /> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
