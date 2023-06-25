function dibujarTabla(){
    const bodyTabla= document.getElementById('Electrodomesticos');
    bodyTabla.innerHTML=``; 
    Electrodomesticos.forEach((id) => {
      bodyTabla.innerHTML= bodyTabla.innerHTML +
      <tr>
      <th >1</th>
      <td>${Electrodomesticos.name}</td>
      <td>${Electrodomesticos.kWh}</td>
      <td>${Electrodomesticos.cantidad}</td>
    </tr>
      
    })
  }
  dibujarTabla()