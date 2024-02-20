import { Container,Table, Button, Image } from "react-bootstrap";
const ItemReceta = ({recetas}) => {
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
        <Button variant="warning"><i className="bi bi-pencil-square"></i></Button>
          <Button variant="danger"><i className="bi bi-trash"></i></Button>
          </div>
        </td>
      </tr>       
    );
};

export default ItemReceta;