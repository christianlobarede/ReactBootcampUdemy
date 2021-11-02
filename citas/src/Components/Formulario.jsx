import React, { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';

const Formulario = ({crearCita}) => {

    //Crear State de Citas
    const [error, setError] = useState(false)

    const [cita, setCita] = useState({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })
    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    //Extraer Valores
    const {mascota, dueño, fecha, hora, sintomas} = cita;

    const isEmpty = Object.values(cita).some(x => (x === ''))

    //Submit Handle
    const handleSubmit = e => {
        e.preventDefault();
        if(isEmpty){
            setError(true)
            return
        }
        setError(false)
        cita.id = uuid();
        crearCita(cita)

        setCita({
            mascota: '',
            dueño: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
        //Asignar ID
        //Crear Cita
        //Reset Form
    }
    return (
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}    

            <form onSubmit={handleSubmit}>
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota" 
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="dueño" 
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    onChange={handleChange}
                    value={dueño}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha" 
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                 />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora" 
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                 />
                <label>Sintomas</label>
                <textarea 
                    name="sintomas" 
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                 ></textarea>
                 <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;