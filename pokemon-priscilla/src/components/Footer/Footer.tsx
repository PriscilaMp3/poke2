import React from "react";

interface Footerprops {
  paginaInicio: number;
  cambioPagina: (page: number) => void;
}
const Footer = ({ paginaInicio, cambioPagina }: Footerprops) => {
  return (
    <footer>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="pagination">
            <button
              className="btn btn-warning"
              onClick={() => cambioPagina(paginaInicio - 1)}
              disabled={paginaInicio === 1}
            >
              Anterior
            </button>
            <span className="form-control"> Pagina {paginaInicio}</span>
            <button
              className="btn btn-warning"
              onClick={() => cambioPagina(paginaInicio + 1)}
              disabled={paginaInicio === 65}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
