
let Electrodomesticos= [
  {id: 1, name:'Heladera', kWh: 0.035, cantidad: 0 , },
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
let HorasUsoDiario = prompt ("Horas de uso") ;
for (let i = 0; i < Electrodomesticos.length; i++) {
  nroElectrodomesticos += Electrodomesticos[i].cantidad;
}

Electrodomesticos.forEach( function(Electrodomesticos){
         sumakWh    += Electrodomesticos.kWh *Electrodomesticos.cantidad;
         ConsumoMes = (sumakWh * HorasUsoDiario)*30 ;
         GastoMes= ConsumoMes * 27;
 })
console.log( ` Cant.Electrodomesticos: ${nroElectrodomesticos} la suma de kWh acumula: ${sumakWh+"kWh"} Consumo mensual : ${ConsumoMes+"kwH"} Costo Mensual Aprox.:${"$"+GastoMes}`);





const tbody = document.getElementById('items');


Electrodomesticos.forEach((electrodomestico) => {
  const row = document.createElement('tr');

  
  const addButtonCell = document.createElement('td');
  const addButton = document.createElement('button');
  addButton.innerText = '+';
  addButton.addEventListener('click', () => {
    
    electrodomestico.cantidad += 1;
    dibujarTabla();
  });
  addButtonCell.appendChild(addButton);
  row.appendChild(addButtonCell);

  
 

 
  tbody.appendChild(row);
});

function dibujarTabla() {
  const bodyTabla = document.getElementById('items');
  bodyTabla.innerHTML = '';

  Electrodomesticos.forEach(function(electrodomestico) {
    bodyTabla.innerHTML += `
      <tr>
        <td>
          <button onclick="sumarCantidad(${electrodomestico.id})">+</button>
        </td>
        
        <td>${electrodomestico.name}</td>
        <td>${electrodomestico.kWh}</td>
        <td>${electrodomestico.cantidad}</td>
      </tr>`;
  });
}

function sumarCantidad(id) {
  Electrodomesticos.forEach(function(electrodomestico) {
    if (electrodomestico.id === id) {
      electrodomestico.cantidad += 1;
    }
  });
  dibujarTabla();
}

dibujarTabla();
