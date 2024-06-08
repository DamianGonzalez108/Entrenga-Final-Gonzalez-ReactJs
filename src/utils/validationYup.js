import { mixed, object, string } from "yup";
import { toast } from "react-toastify";

let userSchema = object({
  name: string().required("Nombre es requerido"),
  phone: mixed().required("Telefono es requerido"),
  email: string().email().required("E-mail es requerido"),
  confirmEmail: string().email().required("Confirma tu Email"),
});

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm);
    return { status: "success" };
  } catch (error) {
    return toast.warning(error.message);
  }
};

export default validateForm;
