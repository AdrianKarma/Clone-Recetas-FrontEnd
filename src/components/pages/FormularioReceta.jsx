import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form"

const FormularioReceta = () => {
    return (
        <>
            <Container className="my-4">
        <h1>Nuevo Producto</h1>
        <hr />
        <Form onSubmit={handleSubmit(productoValidado)}>
          <Form.Group className="mb-3" controlId="Producto.form">
            <Form.Label>Producto*</Form.Label>
            <Form.Control type="text" placeholder="Ej: café" {
                ...register("nombreProducto", {
                    required:"El nombre del producto es obligatorio",
                     minLength:{
                    value: 2,
                    message:"debe ingresar como minimo 2 caracteres para el nombre del producto"
                }, 
                    maxLength:{
                    value: 50,
                     message:"debe ingresar como maximo 50 caracteres para el nombre del producto"
                }})
            } />
            <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Precio.form">
            <Form.Label>Precio*</Form.Label>
            <Form.Control type="text" placeholder="ej: 1300" {
             ...register("precio", {
                required: "El precio del producto es obligatorio",
                min:{ value:50, message: "debe ingresar un valor mayor a $50"},
                max:{value: 25000, message: "debe ingresar un valor menor a $25.000"}
             }) 
              
            }/>
            <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="URL.form">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control type="text" placeholder="https://www.google.com" {...register("imagen",{required: "ingrese el url de la imagen"})} />
            <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Categoria.form">
            <Form.Label>Categoria*</Form.Label>
            <Form.Select type="text" aria-label="Elige una Categoria" {...register("categoria",{required: "Elija una categoria para el producto"})}>
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            
            <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="breve.form">
            <Form.Label>Descripción breve*</Form.Label>
            <Form.Control as="textarea" rows={2} {...register("descripcion_breve",{required:"Ingrese una descripcion breve",
                minLength:{
                  value: 3,
                  message: "Debe ingresar como minimo 3 caracteres para la descripcion breve"
                },
                maxLength:{
                  value: 30,
                  message: "Debe ingresar como maximo 30 caracteres para la descripcion breve"
                }})} />
            <Form.Text className="text-danger">{errors.descripcion_breve?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="amplia.form">
            <Form.Label>Descripción amplia*</Form.Label>
            <Form.Control as="textarea" rows={3} {...register("descripcion_amplia",{required:"Ingrese una descripcion amplia",
                minLength:{
                  value: 50,
                  message: "Debe ingresar como minimo 50 caracteres para la descripcion amplia"
                },
                maxLength:{
                  value: 1000,
                  message: "Debe ingresar como maximo 50 caracteres para la descripcion amplia"
                }})}/>
            <Form.Text className="text-danger">{errors.descripcion_amplia?.message}</Form.Text>
          </Form.Group>
          <Button type="submit" variant="success">Guardar</Button>
        </Form>
      </Container>
        </>
    );
};

export default FormularioReceta;