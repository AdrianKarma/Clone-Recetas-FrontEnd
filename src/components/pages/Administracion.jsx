import "../../helpers/queries"
import { useEffect, useState } from "react";
import { leerRecetasAPI } from "../../helpers/queries";
import { Link} from 'react-router-dom';
import { Container,Table, Button, Image } from "react-bootstrap";
import ItemReceta from "../common/ItemReceta";



const Administracion = () => {
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
        <>
        <Container fluid className="mainSection">
        <section className="d-flex justify-content-between align-items-center">
            <h1 className="" >Recetas</h1>
<Button as={Link} to={'crear'}><i className="bi bi-file-earmark-plus"></i></Button>
</section>
        <article className="table-responsive">
            <Table striped bordered hover className="mt-4 text text-center">
      <thead>
        <tr>
          <th>Cod</th>
          <th>Receta</th>
          <th>Tiempo</th>
          <th>URL de Imagen</th>
          <th>Categoria</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {
   recetas.map((recetas)=> <ItemReceta key={recetas.id} recetas={recetas}></ItemReceta>)
        }
     
      

      </tbody>
    </Table>

    </article>
            </Container>
        </>
    );
};

export default Administracion;