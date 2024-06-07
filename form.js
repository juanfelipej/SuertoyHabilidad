const scriptURL = 'https://script.google.com/macros/s/AKfycbzmIUDh_UdishKmnwaEJ6YHCxQUJbU87ncCdvbahPyCdLARry6JtgGVUe_GA13-51mwrQ/exec';

// Verificar si hay datos de usuario en el localStorage
document.getElementById('registro').addEventListener('click', () => {
    // Obtener los datos del localStorage
    const datosUsuario = localStorage.getItem('datosUsuario');
  
    // Verificar si hay datos en el localStorage
    if (datosUsuario) {
      // Convertir los datos de cadena JSON a objeto JavaScript
      const datosUsuarioObj = JSON.parse(datosUsuario);
  
      // Convertir el objeto JavaScript a FormData
      const formData = new FormData();
      for (const key in datosUsuarioObj) {
        formData.append(key, datosUsuarioObj[key]);
      }
  
      fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
          if (response.ok) {
            window.location.href = '';
          } else {
            throw new Error('Network response was not ok.');
          }
        })
        .catch(error => console.error('Error!', error.message));
    } else {
      console.error('No hay datos de usuario en el localStorage');
    }
  });
  