/*
async function obtenerDatosDelJSON() {
    try {
      let res = await fetch("data.json");
  
      if (!res.ok) {
        throw "Error al acceder al archivo JSON";
      }
  
      let json = await res.json();
  
      console.log(res, json);
  
      const $peliculas = document.querySelector("#peliculas");
  
      let html = "";
  
      json.peliculas.forEach((el) => {
        html += `
          <article>
            <img src="${el.poster}" alt="${el.nombre}" />
            <h4>${el.nombre}</h4> 
            <h5>${el.estreno}</h5> 
          </article>
        `;
      });
  
      $peliculas.innerHTML = html;
    } catch (error) {
      console.warn(error);
    }
  }
    */
  
  async function obtenerDatosDeAPI() {
    try {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))
  
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
            <h5>ID: ${el.id} </h5> 
            <h3> ${el.title} </h3>
            <h3> ${el.category}</h3>
            <h3> ${el.description} </h3>
            <p> ${el.image} </p> 
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