import React from 'react';
import '../assets/styles/grafico.css'; // Archivo CSS para estilos

function GraficoDeBarras(props) {
  const { stats } = props;

  if (!stats || stats.length === 0) {
    return null;
  }

  const pokeData = stats.map(stat => stat.base_stat);
  const pokeLabels = stats.map(stat => stat.stat.name);

  return (
    <div className="grafico-area">
      <hr />
      <h3>Estadisticas:</h3>
      <ul className="grafico-barras">
        {pokeData.map((valor, index) => {
          return (
            <li key={index} className="grafico-item">

              <p className="item-titulo">{pokeLabels[index]}</p>

              <div className="barra">
                <div className="barra-completa" style={{ width: `${valor}%` }}></div>
              </div>

              <div className='barra-porcentajes'>
                <div> <p>0%</p> </div>
                <div> <p>50%</p> </div>
                <div> <p>100%</p> </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GraficoDeBarras;
