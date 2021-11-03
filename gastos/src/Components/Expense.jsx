import React from 'react';

function Expense({expense}) {
    return (
        <li className="gastos">
            <p>{expense.name} <span className="gasto">$ {expense.amount}</span></p>
        </li>
    );
}

export default Expense;