import { Container } from "react-bootstrap";
import ListaRecetas from "../common/ListaRecetas";


const Inicio = () => {
    return (
        < >
        <Container fluid className="mainSection">
            <h1>Recetas de Adrian Chanampa</h1>
            <ListaRecetas></ListaRecetas>
            </Container>
        </>
    );
};

export default Inicio;