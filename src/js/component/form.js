import React, { Component } from "react";


const Form = () => (
  <form>
  <div className="mb-3">
    <label for="exampleInputName" className="form-label">Nombre</label>
    <input type="email" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Full name"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail" className="form-label">Correo</label>
    <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter email"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPhone" className="form-label">Telefono</label>
    <input type="phone" className="form-control" id="exampleInputPhone" placeholder="Enter phone"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputAddress" className="form-label">Password</label>
    <input type="address" className="form-control" id="exampleInputAddress" placeholder="Enter address"/>
  </div>
    <div>
        <button type="submit" className="btn btn-primary">Guardar</button>
        <a href="">Ir a tras a contactos</a>
    </div>
  </form>
);

export default Form