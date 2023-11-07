import './ClinicHistory.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

function ClinicHistory() {
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  return (
    <div className="container">
      {/* <div style={{ textAlign: 'center' }}>
        <h1>Historia clínica <span className="badge bg-secondary"></span></h1>
      </div> */}
      <Card style={{ marginTop: '10px' }}>
        <Card.Header className="text-center" style={{ backgroundColor: '#05B4C2' }}>
          <h4>Información personal <span className="badge bg-secondary"></span></h4>
        </Card.Header>

        <Card.Body>
          <p className="details"><span className="bold-label">Nombre:</span> Liz</p>
          <p className="details"><span className="bold-label">Cédula:</span> 1234</p>
          <p className="details"><span className="bold-label">Email:</span> lamejorbailarina@gmail.com</p>
        </Card.Body>
      </Card>

      <Card style={{ marginTop: '10px' }}>
        <Card.Header className="text-center" style={{ backgroundColor: '#05B4C2' }}>
          <h4>Historia Clínica <span className="badge bg-secondary"></span></h4>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="bold-label">Fecha de nacimiento:</span> 2000/09/20
                </li>
                <li className="list-group-item">
                  <span className="bold-label">Género:</span> Femenino
                </li>
                <li className="list-group-item">
                  <span className="bold-label">Dirección:</span> Calle 4 # 4-24
                </li>
                <li className="list-group-item">
                  <span className="bold-label">Número de seguro social:</span> 12345
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="bold-label">Alergias:</span> Tusa
                </li>
                <li className="list-group-item">
                  <span className="bold-label">Comorbilidades:</span> No
                </li>
                <li className="list-group-item">
                  <span className="bold-label">Medicamentos:</span> Acetaminofén
                </li>
              </ul>
            </div>
          </div>
          <div style={{width:"100%", display:'flex', alignContent:'center', justifyContent:'center'}}>
            <Button
              variant="primary"
              style={{  
                marginTop: '10px',
                backgroundColor: '#05B4C2',
                color: 'black',
                border: '1px solid #05B4C2',
                }}
                onClick={() => setShowModal(true)} >
            <strong>Ver exámenes</strong>
            </Button>
            </div>
        </Card.Body>
        <Card.Footer>
          
        <Modal show={showModal} onHide={() => setShowModal(false)} dialogClassName="modal-100w">
        <Modal.Header closeButton>
          <Modal.Title>Exámenes médicos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="bold-label">Fecha:</span> 2015/09/20
                </li>
                <li className="list-group-item">
                  <span className="bold-label">Entidad:</span> IPS Universitaria
                </li>
                <li className="list-group-item">
                  <span className="bold-label">Tipo de examen:</span> Glucosa
                </li>
                <li className="list-group-item">
                  <span className="bold-label">Resultados:</span> 80 mg/dl
                </li>
                <li className="list-group-item">
                  <span className="bold-label">Médico responsable:</span> Juan Perez
                </li>
                <li className="list-group-item">
                  <span className="bold-label">Observaciones:</span> Valores normales de glucosa en sangre
                </li>
              </ul>
        </Modal.Body>
        <Modal.Footer>
        <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
            style={{
              backgroundColor: '#0694AB',
              border: '1px solid #0694AB',  
              color: 'black', 
            }}
          >
            Cerrar
         </Button>
        </Modal.Footer>
        </Modal>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ClinicHistory;