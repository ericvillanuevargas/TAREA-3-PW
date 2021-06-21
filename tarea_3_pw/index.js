
 function buscarcontactos(){
    fetch("http://www.raydelto.org/agenda.php")
    .then(function(resultados){
        return resultados.json();
    }).then(function(resultados){
        let html ='';
        resultados.forEach(function(contactos){
            html += `
                <center>
                <p>${contactos.nombre} ${contactos.apellido}
                <br>Telefono = ${contactos.telefono}</p>
                </center>
            `;
            
        });
        document.getElementById('partes').innerHTML = html;

        
    }) 
}
  
  
  const nombre = document.getElementById('nommbre')
  const apellido = document.getElementById('apellido')
  const number = document.getElementById('telefono')
  
  
  document.getElementById('btn_agregar').addEventListener('click', ejercutar)
  document.getElementById('btn_actualizar').addEventListener('click', buscarcontactos)
  
  async function ejercutar() {
      const apiUrl = 'http://www.raydelto.org/agenda.php'
      await fetch(apiUrl, {
          method: 'POST',
          body: JSON.stringify({
              nombre: nombre.value,
              apellido: apellido.value,
              telefono: Number(telefono.value)
              
          })
      });
      alert('Mensaje enviado correctamente');
      
  }




