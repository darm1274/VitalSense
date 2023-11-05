import React from 'react';
/* import ApexCharts from 'apexcharts'; */
import ReactApexChart from 'react-apexcharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Readings.css'

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Datos para la gráfica de área (% Oximetría vs Fecha y Hora)
      areaChart: {
        series: [{
          name: "% Oximetría",
          data: [95, 94, 97, 92, 96, 98, 95, 94, 98, 97]
        }],
        options: {
          chart: {
            type: 'area',
            height: 350,
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          title: {
            text: 'Gráfica de % Oximetría',
            align: 'left'
          },
          xaxis: {
            categories: ['2023-11-01 01:00', '2023-11-01 02:00', '2023-11-01 03:00', '2023-11-01 04:00', '2023-11-01 05:00', '2023-11-01 06:00', '2023-11-01 07:00', '2023-11-01 08:00', '2023-11-01 09:00', '2023-11-01 10:00'],
            title: {
              text: 'Fecha y Hora'
            }
          },
          yaxis: {
            title: {
              text: '% Oximetría'
            }
          }
        }
      },

      // Datos para la gráfica de línea (Frecuencia Cardíaca vs Fecha y Hora)
      lineChart: {
        series: [{
          name: "Frecuencia Cardíaca",
          data: [75, 80, 78, 88, 85, 82, 76, 79, 80, 77]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          title: {
            text: 'Gráfica de Frecuencia Cardíaca',
            align: 'left'
          },
          xaxis: {
            categories: ['2023-11-01 01:00', '2023-11-01 02:00', '2023-11-01 03:00', '2023-11-01 04:00', '2023-11-01 05:00', '2023-11-01 06:00', '2023-11-01 07:00', '2023-11-01 08:00', '2023-11-01 09:00', '2023-11-01 10:00'],
            title: {
              text: 'Fecha y Hora'
            }
          },
          yaxis: {
            title: {
              text: 'Frecuencia Cardíaca (bpm)'
            }
          }
        }
      }
    };
  }

  render() {
    return (
      
      <div className="container mt-5">

        <h1 className='title-center'>Lecturas</h1>
        
        <Card style={{ marginTop: '10px' }}>
        <Card.Header className="text-center" style={{ backgroundColor: '#05B4C2' }}>
        <h2>Alertas</h2>
        </Card.Header>
        <Card.Body>

        <div class="container">
        <div class="row" className='cards-information' style={{margin:'20px auto'}}>
          <div class="card" style={{width: '18rem', marginRight: '10px'}}>
            <img src="./iconoPaciente.png" alt="Descripción" className='img-size'/> 
            <div class="card-body">
              <h5 class="card-title">Paciente</h5>
              <p class="card-text"><strong>Nombre: </strong>Paciente</p>
              <p class="card-text"><strong>Estado: </strong>Hospital en casa</p>
              <p class="card-text"><strong>Documento: </strong>1002932</p>

            {/*   <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>

          <div class="card" style={{width: '18rem', marginLeft: '10px'}}>
            <img src="./iconoMedico.png" alt="Descripción" className='img-size'/> 
            <div class="card-body">
              <h5 class="card-title">Médico</h5>
              <p class="card-text"><strong>Nombre: </strong>Médico</p>
              <p class="card-text"><strong>Especialidad: </strong>Cardiovascular</p>
              <p class="card-text"><strong>Licencia: </strong>1233232</p>

            {/*   <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>


          <div class="card" style={{width: '18rem', marginLeft: '10px'}}>
            <img src="./iconoPaciente.png" alt="Descripción" className='img-size'/> 
            <div class="card-body">
              <h5 class="card-title">Cuidador</h5>
              <p class="card-text"><strong>Nombre: </strong>Cuidador</p>
              <p class="card-text"><strong>Parentesco: </strong>Hijo</p>
              <p class="card-text"><strong>Documento: </strong>1002932</p>

            {/*   <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>


        </div>

        
          <div class="row">
          
            <div class="col-md-6">
              <div class="card">
     
                <div class="text-center p-5" className='color-alert'>
                  <h1 class="text-alert">1</h1>
                </div>
                <div class="card-body">
                  <h5 class="card-title" className='title-center'>Oximetría</h5>
                  <p class="card-text">Registros fuera del rango en las últimas 24 horas</p>
                </div>
              </div>
            </div>
        
            <div class="col-md-6">
              <div class="card">
           
                <div class="text-center p-5" className='color-alert'>
                  <h1 class="text-alert">2</h1>
                </div>
                <div class="card-body">
                  <h5 class="card-title" className='title-center'>Frecunecia cardiaca</h5>
                  <p class="card-text">Registros fuera del rango en las últimas 24 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
          
        </Card.Body>
      </Card>


      <Card style={{ marginTop: '10px' }}>
        <Card.Header className="text-center" style={{ backgroundColor: '#05B4C2' }}>
        <h3>Frecuencia cardiaca</h3>
        </Card.Header>
        <Card.Body>


        <div className="colum">
          
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <ReactApexChart options={this.state.areaChart.options} series={this.state.areaChart.series} type="area" height={350} />
              </div>
            </div>
          </div>
          
        </div>

        <div className="colum">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <ReactApexChart options={this.state.lineChart.options} series={this.state.lineChart.series} type="line" height={350} />
              </div>
            </div>
          </div>
        </div>
          
        </Card.Body>
      </Card>
        
      </div>
    );
  }
}

export default ChartComponent;
