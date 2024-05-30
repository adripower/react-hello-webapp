import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { ModalDelete } from "../component/modalDelete";
import { useEffect, useState } from "react";

const Contact = ()=>{

    const [state,setState] =useState({
         view: "none"
    })
    const usenavigate = useNavigate()

    useEffect(()=>{
        actions.crearAgenda()
        actions.getAllContacts()
    },[]);
    function showmModal() {
        setState({view:"block"})
    }

    return(
        <div>
            <div className="container">        
    <div className="d-flex justify-content-end">
        <Link className="btn btn-success " to="/add-contact">Add new contact</Link>
    </div>

    {store.contacts?.map((contact)=>{

return ( 
        <div className="card mb-3" key={contact.id}>
        <div className="row g-0 text-black">
            <div className="col-3">
                <img src="https://img.freepik.com/foto-gratis/retrato-hombre-blanco-aislado_53876-40306.jpg?w=996&t=st=1717089336~exp=1717089936~hmac=244147991b4151b56a19f9cc62eaa3f6afcb11040da8f9d2a3d0e5199057783c" className="img-fluid rounded-circle p-2 m-3 mr-3" alt="..."/>
            </div>
            <div className="col-7">
                <div className="card-body">
                    <h5 className="card-title">{contact?.name}</h5>
                    <p className="card-text">{contact?.address}</p>
                    <p className="card-text">{contact?.phone}</p>
                    <p className="card-text">{contact?.email}</p>
                </div>
            </div>
            <div className="col-2 d-flex">
                <div onClick={()=>{
                    actions.seeContact(contact)
                    navigate("/edit-contact")
                }}><i className="fa fa-pen p-2 m-3" /></div>
                <div><i className="fa fa-trash p-2 m-3" onClick={()=>{
                    showModal()
                    actions.setContactToDelete(contact)
                }}/></div>
            </div>
        </div>
    </div>
    
)

})}
<ModalDelete stateModal={state} setModal={setState} />


</div>
        </div>
    )


}

export default Contact