import * as Yup from "yup";

const telefono =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validFileExtensions = {
  image: ["jpg", "png", "jpeg", "pdf"],
};

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
  );
}

export const registroSchema = Yup.object().shape({
  file: Yup.mixed()
    .nullable()
    .test("is-valid-type", "Imágen requerida (JPG, JPEG, PNG, PDF)", (value) =>
      isValidFileType(value, "image")
    ),
  nombre: Yup.string()
    .required("Nombre requerido")
    .min(3, "Debe tener al menos 3 caracteres")
    .max(20, "Máximo 20 caracteres"),
  tel: Yup.string()
    .matches(telefono, "Teléfono inválido")
    .required("Teléfono requerido")
    .min(6, "Debe tener al menos 6 números")
    .max(20, "Máximo 20 números"),
  email: Yup.string().email("Email inválido").required("Email requerido"),
  password: Yup.string()
    .min(8, "Debe tener al menos 8 caracteres")
    .max(20, "Máximo 20 caracteres")
    .required("Contraseña requerida"),
});

export const initialValues = {
  file: "",
  nombre: "",
  tel: "",
  email: "",
  password: "",
};
