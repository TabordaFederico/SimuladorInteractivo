// La idea es generar una calculadora que te indique el consumo electrico mensual y cuanto tendrias que pagar aprox.//
let Electrodomesticos= [
  {id: 1, name:'Heladera', kWh: 0.035, cantidad: 1 , },
  {id: 2, name:'A.C', kWh: 0.658,cantidad:2 , },
  {id: 3, name:'TermoTanque', kWh: 1.5,cantidad:1 , },
  {id: 4, name:'Microondas', kWh: 0.64,cantidad: 1,},
  {id: 5, name:'TV', kWh: 0.09, cantidad:3 ,},
  {id: 6, name:'Focos', kWh: 0.011, cantidad:6 ,}
];

//El uso se promedia pero la intencion es poder agregar los datos por separado mas adelante//
var sumakWh    = 0;
var nroElectrodomesticos = 0;
var ConsumoMes = 0;
var HorasUsoDiario = prompt ("Horas de uso") ;

Electrodomesticos.forEach( function(Electrodomesticos){
         sumakWh    += Electrodomesticos.kWh;
         nroElectrodomesticos += 1;
         ConsumoMes = (sumakWh * HorasUsoDiario)*30 ;
         GastoMes= ConsumoMes * 27;
 })
console.log( ` Cant.Electrodomesticos: ${nroElectrodomesticos} la suma de kWh acumula: ${sumakWh+"kWh"} Consumo mensual : ${ConsumoMes+"kwH"} Costo Mensual Aprox.:${"$"+GastoMes}`);