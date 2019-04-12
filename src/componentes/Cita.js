import React, { Component } from 'react';

class Cita extends Component {


    eliminarCita=()=>{
        this.props.borrarCita(this.props.info.id);
    }

    render() {
        const { fecha, hora, sintomas, propietario, mascota } = this.props.info;
        return ( 
            <div className = "media mt-3" >
            <div className = "media-body" >
            <h3 className = "mt-0" > Nombre Mascota: { mascota } </h3>
            <p className = "card-text" > < span > Nombre del Dueño: </span>{propietario}</p >
            <p className = "card-text" > < span > Fecha: </span>{fecha}</p >
            <p className = "card-text" > < span > Hora: </span>{hora}</p >
            <p className = "card-text" > < span > Sintomas: </span></p >
            <p className = "card-text" > { sintomas } </p>

            <button onClick={this.eliminarCita} 
            className="btn btn-danger">Borrar &times;</button>
            </div>
            </div>
        );
    };
}
export default Cita; 