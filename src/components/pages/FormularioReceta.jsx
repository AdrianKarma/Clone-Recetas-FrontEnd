import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { CrearRecetaAPI, editarRecetaAPI, obtenerRecetaAPI } from "../../helpers/queries";

const FormularioReceta = (editar, titulo) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    //solo si edito
    if (editar === true) {
      cargarDatosFormulario();
    }
  }, []);

  const cargarDatosFormulario = async () => {
    const respuesta = await obtenerRecetaAPI(id);
    if ((respuesta.status = 200)) {
      const recetaBuscada = await respuesta.json();
      console.log(recetaBuscada);
      setValue("nombreReceta", recetaBuscada.nombreReceta);


      
    } else {
      Swal.fire({
        title: "Error",
        text: `error al realizar esta operacion, intente nuevamente`,
        icon: "error",
      });
    }
  };

  const recetaValidada = async (recetas) => {
    try {
      if (editar === true) {
        const respuesta = await editarRecetaAPI(id, recetas);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Producto Editado",
            text: `el producto: ${recetas.nombreReceta} fue editado correctamente`,
            icon: "success",
          });
          navegacion("/administrador");
        } else {
          Swal.fire({
            title: "Error",
            text: `error al editar el producto:${recetas.nombreReceta} , intente nuevamente`,
            icon: "error",
          });
        }
      } else {
        const respuest = await CrearRecetaAPI(recetas);
        if (respuest.status === 201) {
          Swal.fire({
            title: "Producto Creado",
            text: `el producto: ${recetas.nombreReceta} fue creado correctamente`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: `error al crear el producto, intente nuevamente`,
            icon: "error",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="my-4">
        <h1></h1>
        <hr />
        <Form onSubmit={handleSubmit(recetaValidada)}>
          <Form.Group className="mb-3" controlId="Receta.form">
            <Form.Label>Nombre de la Receta*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: café"
              {...register("nombreReceta", {
                required: "El nombre del producto es obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "debe ingresar como minimo 2 caracteres para el nombre del producto",
                },
                maxLength: {
                  value: 50,
                  message:
                    "debe ingresar como maximo 50 caracteres para el nombre del producto",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreReceta?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="tiempo.form">
            <Form.Label>Duracion de la Receta*</Form.Label>
            <Form.Control
              type="text"
              placeholder="ej: 1300"
              {...register("tiempo", {
                required: "El precio del producto es obligatorio",
                min: {
                  value: 50,
                  message: "debe ingresar un valor mayor a $50",
                },
                max: {
                  value: 25000,
                  message: "debe ingresar un valor menor a $25.000",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.tiempo?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="URL.form">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://www.google.com"
              {...register("imagen", {
                required: "ingrese el url de la imagen",
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Categoria.form">
            <Form.Label>Categoria*</Form.Label>
            <Form.Select
              type="text"
              aria-label="Elige una Categoria"
              {...register("categoria", {
                required: "Elija una categoria para el producto",
              })}
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="breve.form">
            <Form.Label>Descripción*</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              {...register("descripcion", {
                required: "Ingrese una descripcion breve",
                minLength: {
                  value: 3,
                  message:
                    "Debe ingresar como minimo 3 caracteres para la descripcion breve",
                },
                maxLength: {
                  value: 30,
                  message:
                    "Debe ingresar como maximo 30 caracteres para la descripcion breve",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcion?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="amplia.form">
            <Form.Label>Preparacion*</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register("preparacion", {
                required: "Ingrese una descripcion amplia",
                minLength: {
                  value: 50,
                  message:
                    "Debe ingresar como minimo 50 caracteres para la descripcion amplia",
                },
                maxLength: {
                  value: 1000,
                  message:
                    "Debe ingresar como maximo 50 caracteres para la descripcion amplia",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.preparacion?.message}
            </Form.Text>
          </Form.Group>
          <Button type="submit" variant="success">
            Guardar
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default FormularioReceta;
