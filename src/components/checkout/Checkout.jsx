import { useState } from "react";
import Form from "./Form";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import db from "../../db/db.js";
import { Link } from "react-router-dom";
import validateForm from "../../utils/validationYup.js";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'





const Checkout = () => {
  const MySwal = withReactContent(Swal)
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
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
        MySwal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        }),setTimeout(5000);
        generateOrder(order);
      } else {
       toast.warning(response.message)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const generateOrder = (order) => {
    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, order)
      .then((res) => setIdOrder(res.id))
      .catch((error) => console.log(error))
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
    <div>
      {idOrder ? (
        <div>
          <h2>Orden generada con exito</h2>
          <p>Guarde el id de su orden :{idOrder}</p>
          <Link to="/">
            {" "}
            <button>Volver al inicio</button>
          </Link>
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
