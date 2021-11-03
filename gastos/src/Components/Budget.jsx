import React, {Fragment} from 'react';
import { checkBudget } from '../helpers'

function Budget({budget, dif}) {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${budget}
            </div>
            <div className={checkBudget(budget, dif)}>
                 Restante : ${dif}
            </div>
            
        </Fragment>
    );
}

export default Budget;