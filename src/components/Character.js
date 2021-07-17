// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border: 3px solid;
padding: 2%;
margin: 0 10%;

h2{
    font-family: 'Courier New', sans-serif;
}
`

export default function Character(props){
    const {data} = props

    return data.map(item => (
    <StyledContainer>
        <h2>{item.name}</h2>
        <p>{item.birth_year}</p>
    </StyledContainer>)
    )
}