import React from 'react';
import styled from '@emotion/styled';
import { textTransformToUppercase } from '../helpers';

const ResumenContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

function Resumen({state, cotizacion}) {
    const {brand, year, plan} = state;
    return (
        <ResumenContainer>
        <h2>Resumen de Cotizacion</h2>
        <ul>
            <li>Marca del vehiculo: {textTransformToUppercase(brand)}</li>
            <li>Año del vehiculo: {year}</li>
            <li>Plan: {textTransformToUppercase(plan)}</li>
            <li>Total: {cotizacion}</li>
        </ul>
        </ResumenContainer>
    );
}

export default Resumen;