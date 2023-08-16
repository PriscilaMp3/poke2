import React from "react";
import "./Footer.css"

interface Footerprops {
  paginaInicio: number;
  cambioPagina: (page: number) => void;
}
const Footer = ({ paginaInicio, cambioPagina }: Footerprops) => {
  return (
    <footer>
      <div className="paginacion">
        {/* <div className="col-md-6">
          <div className="pagination"> */}
            <button
              className="bestie btn2 btn-warning"
              onClick={() => cambioPagina(paginaInicio - 1)}
              disabled={paginaInicio === 1}
            >
              Anterior
            </button>
            <span className="form-control"> Pagina {paginaInicio}</span>
            <button
              className="bestie btn2 btn-warning"
              onClick={() => cambioPagina(paginaInicio + 1)}
              disabled={paginaInicio === 65}
            >
              Siguiente
            </button>
          {/* </div>
        </div>*/}
      </div> 
    </footer>
  );
};

export default Footer;
