import React, { useState } from 'react';
import './Observations.css';
import Card from 'react-bootstrap/Card';

function Observaciones() {
  const [observaciones, setObservaciones] = useState([
    { usuario: 'Médico', fecha: '2023-10-22', observacion: 'Hay algo en esta página que no me cuadra' },
  ]);
  const [nuevaObservacion, setNuevaObservacion] = useState({ observacion: '' });

  const handleObservacionChange = (e) => {
    setNuevaObservacion({ ...nuevaObservacion, observacion: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setObservaciones([...observaciones, { usuario: 'Médico', fecha: formattedDate, observacion: nuevaObservacion.observacion }]);
    setNuevaObservacion({ observacion: '' });
  }

  return (
    <div className="container">
      {/* ... Resto del código */}
      
      <Card style={{ marginTop: '10px' }}>
        <Card.Header className="text-center" style={{ backgroundColor: '#05B4C2' }}>
          <h4>Registro de observaciones <span class="badge bg-secondary"></span></h4>
        </Card.Header>
        <Card.Body>
          <table className="table table-striped table-responsive">
            <thead>
              <tr>
                <th style={{minWidth: "150px"}}>Usuario</th>  {/* Nuevo campo agregado */}
                <th style={{ width: '300px' }}>Fecha</th>
                <th  style={{minWidth: "150px"}}>Observación</th>
              </tr>
            </thead>
            <tbody>
              {observaciones.map((observacion, index) => (
                <tr key={index}>
                  <td>{observacion.usuario}</td>  {/* Nuevo campo agregado */}
                  <td>{observacion.fecha}</td>
                  <td>{observacion.observacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <form onSubmit={handleSubmit}>
            
          <div class="input-group mb-3" style={{width: "20%", minWidth: "150px"}}>
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value="Médico" disabled />
          </div>




            <div class="form-floating">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={nuevaObservacion.observacion} onChange={handleObservacionChange} required></textarea>
              <label for="floatingTextarea">Ingrese la observación</label>
            </div>

            <button
                  type="submit"
                  className="btn btn-primary custom-button"
                  style={{
                    float: 'right',
                    marginTop: '10px',
                    backgroundColor: '#05B4C2',
                    color: 'black',
                    border: '1px solid #05B4C2',
                  }}
                >
                  Agregar observación
            </button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Observaciones;
