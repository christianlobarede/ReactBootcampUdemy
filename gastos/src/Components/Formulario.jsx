import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid'

function Formulario({newExpense}) {
    const [error, setError] = useState(false)
    const [state, setState] = useState({
        name: '',
        amount: ''
    })

    const {name, amount} = state;

    const isEmpty = Object.values(state).some((x) => (x === '' || x < 1))

    const handleSubmit = e => {
        e.preventDefault();
        if(isEmpty){
            setError(true)
            return;
        }
        setError(false)

        const expense = {
            name,
            amount,
            id: shortid.generate()
        }

        newExpense(expense)
        setState({
            name: '',
            amount: ''
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agrega tus gastos aqui</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o monto incorrecto"/> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    name="name" 
                    value={name}
                    onChange={e => setState({...state, [e.target.name]: e.target.value})}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300" 
                    name="amount"
                    value={amount}
                    onChange={e => setState({...state, [e.target.name]: parseInt(e.target.value)})}
                />
            </div>
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar gasto"
                />
        </form>
    );
}

export default Formulario;