import React, { Component } from 'react';
import uuid from 'uuid';
//se usa para verificar que el state no este en blanco para mostrar 
//error y pedir que los campos esten llenos
class AgregarCita extends Component {

    //refs
    nombreMascotaRef = React.createRef();
    propietarioRef = React.createRef();
    fechaRef = React.createRef();
    horaRef = React.createRef();
    sintomasRef = React.createRef();


    state = {
        error: false
    }

    crearNuevaCita = (e) => {
        //manenjando los errores
        e.preventDefault();
        //crear variables
        const mascota = this.nombreMascotaRef.current.value;
        const propietario = this.propietarioRef.current.value;
        const fecha = this.fechaRef.current.value;
        const hora = this.horaRef.current.value;
        const sintomas = this.sintomasRef.current.value;

        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
            this.setState({
                error: true
            })
        } else {
            const nuevaCita = {
                id: uuid(),
                mascota,
                propietario,
                fecha,
                hora,
                sintomas
            }


            //se envia el objeto hacia el padre, para actualizar el state
            this.props.crearCita(nuevaCita);
            //Reiniciar el formulario
            e.currentTarget.reset();
            //eliminar el error
            this.setState({
                error: false
            })
        }

    }
    render() {
        const existeError = this.state.error;

        return (
            //usa la clase card mt-5 estilo de la clase boostrap y un margen top de 5
            //card-title clase de boostrap texto centrado y margen botton de 5
            //card-body agrega pading hacia dentro
            <div className = "card mt-5" >
            <div className = 'card-body' >
            <h2 className = "card-title text-center" > Agrega las Citas Aquí </h2>

            <form onSubmit = { this.crearNuevaCita } >
            <div className = "form-group row" >
            <label className = "col-sm-4 col-lg-2 col-form-label" > Nombre Mascota </label>
            <div className = "col-sm-8 col-lg-10" >
            <input ref = { this.nombreMascotaRef }
            type = "text"
            className = "form-control"
            placeholder = "Nombre Mascota" />
            </div> 
            </div>
            <div className = "form-group row" >
            <label className = "col-sm-4 col-lg-2 col-form-label" > Nombre Dueño </label>
            <div className = "col-sm-8 col-lg-10" >
            <input ref = { this.propietarioRef }
            type = "text"
            className = "form-control"
            placeholder = "Nombre Dueño de la Mascota" />
            </div>
            </div>

            <div className = "form-group row" >
            <label className = "col-sm-4 col-lg-2 col-form-label" > Fecha </label>
            <div className = "col-sm-8 col-lg-4  mb-4 mb-lg-0" >
            <input ref = { this.fechaRef }
            type = "date"
            className = "form-control" />
            </div>                            

            <label className = "col-sm-4 col-lg-2 col-form-label" > Hora </label>
            <div className = "col-sm-8 col-lg-4" >
            <input ref = { this.horaRef }
            type = "time"
            className = "form-control" />
            </div>
            </div>

            <div className = "form-group row" >
            <label className = "col-sm-4 col-lg-2 col-form-label" > Sintomas </label>
            <div className = "col-sm-8 col-lg-10" >
            <textarea ref = { this.sintomasRef }
            className = "form-control" > </textarea>
            </div>
            </div>
            <div className = "form-group row justify-content-end" >
            <div className = "col-sm-3" >
            <button type = "submit"
            className = "btn btn-success w-100" > Agregar </button>
            </div>
            </div>
            </form> {
                existeError ? < div className = 'alert alert-danger text-center' > Todos los campos son obligatorios </div> : ''} 
                </div>
                </div>
            );
        }
    }

    export default AgregarCita;