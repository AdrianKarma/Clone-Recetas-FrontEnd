import { Container,Table, Button, Image } from "react-bootstrap";
import { borrarRecetaAPI, leerRecetasAPI } from "../../helpers/queries";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemReceta = ({recetas, setRecetas}) => {

  
  const borrarReceta = ()=>{
    Swal.fire({
      title: "Estas seguro de Eliminar el producto?",
      text: "No pruedes revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6", 
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then ( async (result) => {
      if (result.isConfirmed) {

      const respuesta = await borrarRecetaAPI(recetas.id)
      if (respuesta.status === 200){
        Swal.fire({
          title: "Producto Eliminado!",
          text: `El producto"${recetas.nombreReceta}"fue eliminado correctamente`,
          icon: "success"
        });
        const recetasActualizadas= await leerRecetasAPI()
        setRecetas(recetasActualizadas)
      }
        else{
          Swal.fire({
            title: "Ocurrio un Error",
            text: `El producto"${recetas.nombreReceta}"no fue eliminado  `,
            icon: "error"
          });
        }
      }
    });
  }

    return (
        <tr>
        <td className="align-middle">{recetas.id}</td>
        <td className="align-middle">{recetas.nombreReceta} </td>
        <td className="align-middle">
          {recetas.tiempo}
        </td>
        <td className="align-middle"><Image className="img-fluid imgTabla" src={recetas.imagen}></Image></td>
        <td className="align-middle">{recetas.categoria}</td>
        <td className="align-middle">
          <div className="d-flex justify-content-around">
        <Button variant="warning" as={Link} to={`/administrador/editar/${recetas.id}`}><i className="bi bi-pencil-square"></i></Button>
          <Button variant="danger" onClick={borrarReceta}><i className="bi bi-trash"></i></Button>
          </div>
        </td>
      </tr>       
    );
};

export default ItemReceta;