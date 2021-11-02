import { Fragment, useEffect, useState } from 'react';
import Formulario from './Components/Formulario';
import Citas from './Components/Citas';
import './index.css';

function App() {
    const [citas, guardarCitas] = useState([]);


    const crearCita = cita => {
      guardarCitas([...citas, cita])
      console.log(citas)
    }

    const eliminarCita = id => {
      const newCitas = citas.filter((cita) => cita.id !== id)
      guardarCitas(newCitas)
    }

    const titulo = citas.length ? 'Administra tus citas' : 'No hay Citas'

  return (
     <Fragment>
       <h1>Administrador de Citas</h1>
       <div className="container">
         <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}/>
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Citas
                cita={cita}
                key={cita.id}
                eliminarCita={eliminarCita}/>
            ))}
          </div>
         </div>
       </div>
     </Fragment>
  );
}

export default App;
