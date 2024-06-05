import { mixed, object, string } from "yup";       

let userSchema = object({
    name: string().required("Nombre es requerido"),
    phone: mixed().required("Telefono es requerido"),
    email: string().email().required("E-mail es requerido")
}) 

const validateForm = async(dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return {status:"success"}
    } catch (error) {
        return { status:"error", message:error.message}
    }
}

export default validateForm