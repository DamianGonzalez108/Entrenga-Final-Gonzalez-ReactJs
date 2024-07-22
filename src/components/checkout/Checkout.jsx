import { useState } from "react";
import Form from "./Form";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import db from "../../db/db.js";
import { Link } from "react-router-dom";
import validateForm from "../../utils/validationYup.js";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./checkout.css";

const Checkout = () => {
  const MySwal = withReactContent(Swal);
  const [dataForm, setDataForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
    number: "",
    email: "",
    confirmEmail: "",
  });

  const [idOrder, setIdOrder] = useState(null);
  const { cart, totalPrice, deleteAll } = useContext(CartContext);

  const handleChangeInput = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice(),
    };
    try {
      const response = await validateForm(dataForm);
      if (response.status === "success") {
        if (dataForm.email === dataForm.confirmEmail) {
          MySwal.fire({
            title: "¿Quieres guardar los cambios?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Si",
            denyButtonText: `No`,
          }).then((result) => {
            if (result.isConfirmed) {
              generateOrder(order);
              Swal.fire("Guardado con exito", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Los cambios no seran guardados", "", "info");
            }
          });
        } else {
          toast.warning("Verifica que tu email coincida");
        }
      } else {
        toast.warning(response.message);
      }
    } catch (error) {
      toast.warning(error.message);
    }
  };

  const generateOrder = (order) => {
    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, order)
      .then((res) => setIdOrder(res.id))
      .catch((error) =>
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
          footer: "<p>Por favor vuelva a intentar en unos segundos</p>",
        })
      )
      .finally(() => {
        updateStock();
        deleteAll();
      });
  };

  const updateStock = () => {
    cart.map((productCart) => {
      let quantity = productCart.quantity;
      delete productCart.quantity;

      const productRef = doc(db, "products", productCart.id);
      setDoc(productRef, {
        ...productCart,
        stock: productCart.stock - quantity,
      });
    });
  };

  return (
    <div className="divContainerCheckout">
      {idOrder ? (
        <div className="divContainerOrder">
          <div className="divOrder">
            <h2>Orden generada con exito</h2>
            <p>Guarde el id de su orden :{idOrder}</p>
            <Link to="/">
              {" "}
              <button className="buttonInicioCheckout">Volver al inicio</button>
            </Link>
          </div>
        </div>
      ) : (
        <Form
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default Checkout;
