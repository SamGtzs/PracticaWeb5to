
async function obtenerDatosDelJSON() {
    
  }
    
  async function obtenerDatosDeAPI() {
    try {
        let url = ('https://fakestoreapi.com/products')
         let res = await fetch(url);
  
      if (!res.ok) {
        throw "Error al acceder a la API";
      }
  
      let json = await res.json();
  
      console.log(res, json);
  
      const $posts = document.querySelector("#posts");
  
      let html = "";
  
      json.forEach((el) => {
        html += `
          <article>
            <img src= "${el.image}"
            <h3> ${el.title} </h3>
            <h3> ${el.description} </h3>
            <h3> ${el.price}</h3>
          </article>
        `;
      });
  
      $posts.innerHTML = html;
    } catch (error) {
      console.warn(error);
    }
  }
  
  document.addEventListener("DOMContentLoaded", (e) => {
    obtenerDatosDelJSON();
    obtenerDatosDeAPI();
  });