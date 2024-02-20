import CardReceta from "./CardReceta";
import "../../helpers/queries"
import { useEffect, useState } from "react";
import { leerRecetasAPI } from "../../helpers/queries";
import { Container,Table, Button, Image } from "react-bootstrap";


const ListaRecetas = () => {
    const [recetas, setRecetas] = useState ([]);

useEffect(()=>{
traerRecetas();
},[])


const traerRecetas = async()=>{
try{

   const ListaRecetas = await leerRecetasAPI()
   setRecetas (ListaRecetas);
}
catch(error){
    console.log(error)}
}
    return (
        <Container fluid className="my-4 d-flex flex-wrap ">
         {
   recetas.map((recetas)=> <CardReceta key={recetas.id} recetas={recetas}></CardReceta>)
        }
        </Container>
    );
};

export default ListaRecetas;