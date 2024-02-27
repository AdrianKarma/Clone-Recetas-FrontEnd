import { json } from "react-router-dom";

const URI_RECETAS = import.meta.env.VITE_API_RECETAS;

console.log(URI_RECETAS);
//get
export const leerRecetasAPI = async () => {
  try {
    const respuesta = await fetch(URI_RECETAS);

    const listaRecetas = await respuesta.json();

    return listaRecetas;
  } catch (error) {
    console.log(error);
  }
};

//get:id
export const obtenerRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_RECETAS}/${id}`);

  

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
//post
export const CrearRecetaAPI = async(recetaNueva)=>{
try {
  const respuesta = await fetch(URI_RECETAS, {
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(recetaNueva)
  })
  return respuesta
} catch (error) {
  console.log(error)
}
}



// delete
export const borrarRecetaAPI = async(id)=>{
  try{
  const respuesta = await fetch(`${URI_RECETAS}/${id}`, {
    method: "DELETE",
    headers:{
      "Content-Type":"application/json"
    },
   
  })
  console.log(respuesta);
  return respuesta
  } catch (error){
    console.log(error)
  }

}

//put
export const editarRecetaAPI = async(id, recetas) =>{
  try{
    const respuesta = await fetch(`${URI_RECETAS}/${id}`, {
      method: "PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(recetas)
    })
    console.log(respuesta);
   return respuesta;

    
  }catch (error){
    console.log(error)
  }

}