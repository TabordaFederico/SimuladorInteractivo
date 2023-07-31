
let Electrodomesticos= [
  {id: 1, name:'Heladera', kWh: 0.035, cantidad:0 , },
  {id: 2, name:'A.C', kWh: 0.658,cantidad:0 , },
  {id: 3, name:'TermoTanque', kWh: 1.5,cantidad:0 , },
  {id: 4, name:'Microondas', kWh: 0.64,cantidad: 0,},
  {id: 5, name:'TV', kWh: 0.09, cantidad:0 ,},
  {id: 6, name:'Focos', kWh: 0.011, cantidad:0 ,}
];


localStorage.setItem('Electrodomesticos', JSON.stringify(Electrodomesticos));

let sumakWh    = 0;
let GastoMes   = 0;
let nroElectrodomesticos = 0;
let ConsumoMes = 0;
let HorasUsoDiario = 10;


function recalcularCostos(){
  sumakWh = 0;
  GastoMes = 0;
  ConsumoMes = 0;

  Electrodomesticos.forEach((electrodomestico) => {
    elect_sumakWh  = electrodomestico.kWh *electrodomestico.cantidad;
    elect_ConsumoMes = (elect_sumakWh * HorasUsoDiario)*30 ;
    elect_GastoMes = elect_ConsumoMes * 27;

    sumakWh+=elect_sumakWh;
    GastoMes+=elect_GastoMes
    ConsumoMes+=elect_GastoMes
})
}


 
const tbody = document.getElementById('items');



Electrodomesticos.forEach((electrodomestico) => {
  const row = document.createElement('tr');

  const addButtonCell = document.createElement('td');
  const addButton = document.createElement('button');
  addButton.innerText = '+';
  addButton.addEventListener('click', () => {
    
    //electrodomestico.cantidad += 1;
    dibujarTabla();
    recontarElectrodomesticos();
    logearDatos();
    recalcularCostos();
  });
  addButtonCell.appendChild(addButton);
  row.appendChild(addButtonCell);

   
  tbody.appendChild(row);
});


function funcionBoton(idElectrodomestico){
  //Electrodomesticos[idElectrodomestico-1].cantidad += 1;
    sumarCantidad(idElectrodomestico);
    dibujarTabla();
    recontarElectrodomesticos();
    logearDatos();
    recalcularCostos();
    dibujarConsumos();
}

function dibujarTabla() {
  const bodyTabla = document.getElementById('items');
  bodyTabla.innerHTML = '';

  Electrodomesticos.forEach(function(electrodomestico) {
    bodyTabla.innerHTML += `
      <tr>
        <td>
          <button onclick="funcionBoton(${electrodomestico.id})">+</button>
          <button onclick="restarCantidad(${electrodomestico.id})">-</button>
        </td>
        
        
        <td>${electrodomestico.name}</td>
        <td>${electrodomestico.kWh}</td>
        <td>${electrodomestico.cantidad}</td>
      </tr>`;
  });
}
function restarCantidad(id) {
  Electrodomesticos.forEach(function(electrodomestico) {
    if (electrodomestico.id === id && electrodomestico.cantidad > 0) {
      electrodomestico.cantidad -= 1;
    }
  });

  // Después de restar la cantidad, actualiza los datos y la tabla
  actualizarDatos();
}
function dibujarConsumos() {
  const bodyDiv = document.getElementById('resultadosConsumos');
  bodyDiv.innerHTML = `<h3>Cant.Electrodomesticos: ${nroElectrodomesticos} la suma de kWh acumula: ${Math.round(sumakWh)} kWh Consumo mensual : ${Math.round(ConsumoMes)} kWh Costo Mensual Aprox.: $${Math.round(GastoMes)}</h3>`;
}

function sumarCantidad(id) {
  Electrodomesticos.forEach(function(electrodomestico) {
    if (electrodomestico.id == id) {
      electrodomestico.cantidad += 1;
    }
  });  
}

function recontarElectrodomesticos(){
  nroElectrodomesticos = 0
  for (let i = 0; i < Electrodomesticos.length; i++) {
    nroElectrodomesticos += Electrodomesticos[i].cantidad;
  }
  
}

function logearDatos() {
  console.clear();
  console.log(`Cant.Electrodomesticos: ${nroElectrodomesticos} la suma de kWh acumula: ${Math.floor(sumakWh)} kWh Consumo mensual: ${Math.floor(ConsumoMes)} kWh Costo Mensual Aprox.: $${Math.floor(GastoMes)}`);
}
 

dibujarTabla();
recontarElectrodomesticos();
recalcularCostos();
logearDatos();
dibujarConsumos();



function actualizarDatos() {
  dibujarTabla();
  recontarElectrodomesticos();
  recalcularCostos();
  logearDatos();
  dibujarConsumos();
}

Electrodomesticos.forEach((electrodomestico) => {
  const row = document.createElement('tr');

  const addButtonCell = document.createElement('td');
  const addButton = document.createElement('button');
  addButton.innerText = '+';
  addButton.addEventListener('click', () => {
    sumarCantidad(electrodomestico.id);
    actualizarDatos();
  });
  addButtonCell.appendChild(addButton);
  row.appendChild(addButtonCell);

  tbody.appendChild(row);
});