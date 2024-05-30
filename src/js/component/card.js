import React, { Component } from "react";

const Card = (props) => (

        <div className="card mb-3" key={props.id}>
        <div className="row g-0 text-black">
            <div className="col-3">
                <img src="https://img.freepik.com/foto-gratis/retrato-hombre-blanco-aislado_53876-40306.jpg?w=996&t=st=1717089336~exp=1717089936~hmac=244147991b4151b56a19f9cc62eaa3f6afcb11040da8f9d2a3d0e5199057783c" className="img-fluid rounded-circle p-2 m-3 mr-3" alt="..."/>
            </div>
            <div className="col-7">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.address}</p>
                    <p className="card-text">{props.phone}</p>
                    <p className="card-text">{props.email}</p>
                </div>
            </div>
            <div className="col-2 d-flex">
                <div><i className="fa fa-pen p-2 m-3"/></div>
                <div><i className="fa fa-trash p-2 m-3" onClick={handleClick}/></div>
            </div>
        </div>
    </div>
    
);

export default Card