import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const ModalDelete = (props) => {

    const {store, actions}= useContext(Context)

    const navigate = useNavigate()

    return (    
    <div className="modal" tabIndex="-1" style={{display:props.stateModal.view}}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Seguro?</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{props.setModal({view:"none"})}}></button>
                </div>
                <div className="modal-body">
                    <p>Se borrara para siempre...</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{props.setModal({view:"none"})}}>Cerrar</button>
                    <button type="button" className="btn btn-primary" onClick={()=>{

                        actions.deleteContact(store.contactToDelete.id)
                        props.setModal({view:"none"})
                        window.location.reload(false)
                        }}>YES BABY!</button>
                </div>
            </div>
        </div>
    </div>
    )
};

export default ModalDelete
