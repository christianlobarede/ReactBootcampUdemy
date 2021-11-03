import React, { Fragment, useState} from 'react';
import Error from './Error';

function Input({setBudget, setDif, setBudgetReady}) {
    const [total, setTotal] = useState(0)
    const [error, setError] = useState(false)

    const handleChange = e => {
        setTotal(parseInt(e.target.value))
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(total < 1 || isNaN( total )){
            setError(true)
            return;
        }
        setError(false)
        setBudget(total)
        setDif(total)
        setBudgetReady(false)
    }

    return (
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>

            { error ? <Error mensaje="El presupuesto fue incorrecto"/>  : null}

            <form onSubmit={handleSubmit} >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Indica tu presupuesto"
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir tu presupuesto"
                />
            </form>
            
        </Fragment>
    );
}

export default Input;