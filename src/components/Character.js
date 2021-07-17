// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.button`
display: flex;
align-items: center;
justify-content: space-between;
border: 3px solid;
padding: 2%;
margin: 0 10%;
background-color: Transparent;
background-repeat:no-repeat;
cursor:pointer;
height: 6em;

&:hover{
    transform: scale(1.02);
}
h1{
    font-family: 'Alfa Slab One', cursive;
    -webkit-text-stroke: 1px gold;
    color: #17333b;
}
div{
    background-color: #88d2d5;
    padding: 1%;
    border: 3px dotted gold;
    border-radius: 2%;
}
h3{
    font-family: 'Zen Tokyo Zoo', cursive;
    color: #17333b;
}
`

export default function Character(props){
    const {data} = props

    return data.map(item => (
    <StyledContainer>
        <h1>{item.name}</h1>
        <div><h3>{item.birth_year}</h3></div>
    </StyledContainer>)
    )
}