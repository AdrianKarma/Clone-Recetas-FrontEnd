const URI_RECETAS = import.meta.env.VITE_API_RECETAS;

console.log(URI_RECETAS);

export const leerRecetasAPI = async () => {
  try {
    const respuesta = await fetch(URI_RECETAS);

    const listaRecetas = await respuesta.json();

    return listaRecetas;
  } catch (error) {
    console.log(error);
  }
};

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
