import { Card, Button } from "react-bootstrap";

const CardReceta = ({recetas}) => {
    return (
        <>
             <Card className="m-4" style={{ width: '18rem' }}>
             <Card.Header className="text-success ">{recetas.nombreReceta}</Card.Header>
        <Card.Img variant="top" src={recetas.imagen} />
        <Card.Body>
          <Card.Title className="text-success">{recetas.tiempo}</Card.Title>
          <Card.Text>
            
        Descripción: {recetas.descripcion}
          </Card.Text>
        
        </Card.Body>
        

<Card.Footer className="text-end">
<Button  variant="success">Ver mas</Button>
</Card.Footer>

      </Card>
        </>
    );
};

export default CardReceta;