import "./form.css";

const Form = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <div className="divForm">
      <form onSubmit={handleSubmitForm} className="form">
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={dataForm.nombre}
          onChange={handleChangeInput}
        />

        <label htmlFor="">Telefono:</label>
        <input
          type="text"
          name="phone"
          value={dataForm.telefono}
          onChange={handleChangeInput}
        />

        <label> Email:</label>
        <input
          type="email"
          name="email"
          value={dataForm.email}
          onChange={handleChangeInput}
        />

        <label>Confirmar Email:</label>
        <input
          type="email"
          name="confirmEmail"
          value={dataForm.confirmEmail}
          onChange={handleChangeInput}
        />

        <button type="submit">Enviar orden</button>
      </form>
    </div>
  );
};

export default Form;
