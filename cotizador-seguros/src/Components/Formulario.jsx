import React, { useState } from 'react';
import styled from '@emotion/styled';
import { getYears, getBrands, getPlan  } from '../helpers';


const FieldContainer = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;
const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26c6da;
        cursor: pointer;
    }
`;
const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

function Formulario({setBudget}) {
    const [error, setError] = useState(false)
    const [ state, setState ] = useState({
        brand: '',
        year: '',
        plan: ''
    })
    const {brand, year, plan} = state;
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const isEmpty = Object.values(state).some((x) => (x === '') )
    const handleSubmit = e => {
        e.preventDefault(); 
        if(isEmpty){
            setError(true)
            return;
        }
        setError(false)
        let result = 2000;
        const years = getYears(year)
        result -= ((years * 3) * result) / 100;    
        result = getBrands(brand) * result;
        result = (result * getPlan(plan)).toFixed(2)
        setBudget({
            cotizacion: result,
            state
        })
    }

    return (
        <form onSubmit={handleSubmit}>

            { error ? <Error>Todos los campos son obligatorios</Error> : null}
            <FieldContainer>
                <Label>Marca</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={handleChange}
                    >
                    <option value="">--Seleccione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </FieldContainer>
            <FieldContainer>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={handleChange}
                    >
                    <option value="">--Seleccione--</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </FieldContainer>
            <FieldContainer>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={handleChange}
                /> Básico
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={handleChange}
                /> Completo
            </FieldContainer>

            <Button type="submit">Cotizar</Button>
            
        </form>
    );
}

export default Formulario;