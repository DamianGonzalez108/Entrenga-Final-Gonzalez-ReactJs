import "./form.css";

const Form = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <div className="containerForm">
      <div className="divForm">
              <div className="divTittleForm">
               <h1 className="tittleForm">Datos de contacto</h1>
      </div>
      <form onSubmit={handleSubmitForm} className="form">
        <input className="inputsForm"
          placeholder=" Nombre"
          type="text"
          name="name"
          value={dataForm.nombre}
          onChange={handleChangeInput}
        />

        <input className="inputsForm"
          placeholder=" Apellido"
          type="text"
          name="lastName"
          value={dataForm.apellido}
          onChange={handleChangeInput}
        />

        <input className="inputsForm"
          placeholder=" Telefono"
          type="text"
          name="phone"
          value={dataForm.telefono}
          onChange={handleChangeInput}
        />

        <input className="inputsForm"
          placeholder=" Direccion"
          type="text"
          name="address"
          value={dataForm.direccion}
          onChange={handleChangeInput}
        />

        <input className="inputsForm"
          placeholder=" Numero"
          type="text"
          name="number"
          value={dataForm.numero}
          onChange={handleChangeInput}
        />
        <input className="inputsForm"
          placeholder=" Email"
          type="email"
          name="email"
          value={dataForm.email}
          onChange={handleChangeInput}
        />

        <input className="inputsForm"
          placeholder=" Confirmar email"
          type="email"
          name="confirmEmail"
          value={dataForm.confirmEmail}
          onChange={handleChangeInput}
        />

        <button type="submit" className="btnOrden">Enviar orden</button>
      </form>
      </div>

    </div>
  );
};

export default Form;
