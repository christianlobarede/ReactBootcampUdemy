import './index.css';
import Header from './Components/Header';
import styled from '@emotion/styled';
import Formulario from './Components/Formulario';
import Resumen from './Components/Resumen';
import { useState } from 'react';


const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const FormContainer = styled.div`
   background-color: #fff;
   padding: 3rem;
`;

function App() {
  const [budget, setBudget] = useState({})
  const {state, cotizacion} = budget;
  return (
    <Container>
      <Header
        title="Cotizador de Seguros"/>

        <FormContainer>
          <Formulario setBudget={setBudget}/>
          {state ? (
            <Resumen state={state} cotizacion={cotizacion}/>
          ) : null}
        </FormContainer>
    </Container>
  );
}

export default App;
