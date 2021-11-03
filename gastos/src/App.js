import { useEffect, useState } from 'react';
import Budget from './Components/Budget';
import Formulario from './Components/Formulario';
import Input from './Components/Input';
import List from './Components/List';
import './index.css';

function App() {
  const [budget, setBudget] = useState(0)
  const [budgetReady, setBudgetReady] = useState(true)
  const [dif, setDif] = useState(0)
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    console.log(expenses[expenses.length - 1])
    if(expenses.length){
      const availableBudget = dif - expenses[expenses.length - 1].amount
      setDif(availableBudget)
    }
  }, [expenses])

  const newExpense = (expense) => {
    setExpenses([...expenses, expense])
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        
        <div className="contenido-principal contenido">
          {budgetReady ? (<Input setBudget={setBudget} setDif={setDif} setBudgetReady={setBudgetReady}/>)
          : (
            <div className="row">
              <div className="one-half column">
                <Formulario newExpense={newExpense}/>
                </div>
              <div className="one-half column">
                <List expenses={expenses}/>
                <Budget
                    budget={budget}
                    dif={dif}
                />
              </div>
            </div>
            )}
        </div>
      </header>

    </div>
  );
}

export default App;
