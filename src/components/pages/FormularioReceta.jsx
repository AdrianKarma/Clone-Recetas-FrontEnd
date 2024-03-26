import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { CrearRecetaAPI, editarRecetaAPI, obtenerRecetaAPI } from "../../helpers/queries";

const FormularioReceta = ({editar, titulo}) => {
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
    if (respuesta.status === 200) {
      const recetaBuscada = await respuesta.json();
      console.log(recetaBuscada);
      setValue("nombreReceta", recetaBuscada.nombreReceta);
      setValue("tiempo", recetaBuscada.tiempo);
      setValue("categoria", recetaBuscada.categoria);
      setValue("descripcion", recetaBuscada.descripcion);
      setValue("preparacion", recetaBuscada.preparacion);
      setValue("imagen", recetaBuscada.imagen);



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
            title: "Receta Editado",
            text: `la receta: ${recetas.nombreReceta} fue editada correctamente`,
            icon: "success",
          });
          navegacion("/administrador");
        } else {
          Swal.fire({
            title: "Error",
            text: `error al editar la receta:${recetas.nombreReceta} , intente nuevamente`,
            icon: "error",
          });
        }
      } else {
        const respuest = await CrearRecetaAPI(recetas);
        if (respuest.status === 201) {
          Swal.fire({
            title: "Receta Creado",
            text: `La Receta: ${recetas.nombreReceta} fue creado correctamente`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: `error al crear la receta, intente nuevamente`,
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
        <h1>{titulo}</h1>
        <hr />
        <Form onSubmit={handleSubmit(recetaValidada)}>
          <Form.Group className="mb-3" controlId="Receta.form">
            <Form.Label>Nombre de la Receta*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: café"
              {...register("nombreReceta", {
                required: "El nombre de la receta es obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "debe ingresar como minimo 2 caracteres para el nombrede la receta",
                },
                maxLength: {
                  value: 50,
                  message:
                    "debe ingresar como maximo 50 caracteres para el nombre de la receta",
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
              placeholder="ej: 60"
              {...register("tiempo", {
                required: "El tiempo de preparacion es obligatorio",
                min: {
                  value: 1,
                  message: "debe ingresar un valor mayor a 1",
                },
                max: {
                  value: 120,
                  message: "debe ingresar un valor menor a 120",
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
                required: "Elija una categoria para la receta",
              })}
            >
              <option>Elige una Categoria</option>
              <option value="ensaladas">ensaladas</option>
              <option value="pastas">pastas</option>
              <option value="postres">postres</option>
            </Form.Select>

            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="descripcion.form">
            <Form.Label>Descripción*</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              {...register("descripcion", {
                required: "Ingrese una descripcion ",
                minLength: {
                  value: 5,
                  message:
                    "Debe ingresar como minimo 5 caracteres para la descripcion ",
                },
                maxLength: {
                  value: 50,
                  message:
                    "Debe ingresar como maximo 50 caracteres para la descripcion ",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcion?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="preparacion.form">
            <Form.Label>Preparacion*</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register("preparacion", {
                required: "Ingrese la preparacion",
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
