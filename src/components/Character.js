// Write your Character component here
import React from 'react'
// import styled from 'styled-components'

// const StyledContainer = styled.

export default function Character(props){
    const {data} = props

    return data.map(item => <div><h2>{item.name}</h2><p>{item.birth_year}</p></div>)
}