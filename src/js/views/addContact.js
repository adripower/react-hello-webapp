import React, { useState , useContext} from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";




const AddContact = () => {
    const [fullName,setFullName]= useState("")
    const [address,setAddress]= useState("")
    const [email,setEmail]= useState("")
    const [phone,setPhone]= useState("")
    const navigate = useNavigate()
    const {store, actions}= useContext(Context)
    

    function handleSubmit() {
        
        actions.createContact(fullName,email,address,phone);
        navigate("/");
    }
    
    return(
    
   <><div className="d-flex justify-content-center"><h1>Agregar un nuevo Contacto</h1></div>
   <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Nombre completo" onChange={e => setFullName(e.target.value)} value={fullName}  />
        </div>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail" placeholder="Introduce tu  email" onChange={e => setEmail(e.target.value)} value={email} />
        </div>
        <div className="mb-3">
            <label className="form-label">Telefono</label>
            <input type="text" className="form-control" id="exampleInputPhone" placeholder="Introduce tu telefono"  onChange={e => setPhone(e.target.value)} value={phone} />
        </div>
        <div className="mb-3">
            <label className="form-label">Direccion</label>
            <input type="text" className="form-control" id="exampleInputAddress" placeholder="Introduce tu direccion" onChange={e => setAddress(e.target.value)} value={address} />
        </div>
        <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">Guardar</button>
            <Link to="/">Ir a contactos</Link>
        </div>
    </form></>
);}


export default AddContact