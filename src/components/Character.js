// Write your Character component here
import React from "react"
import styled from "styled-components"

const StyledCharacter = styled.div`
    background-color: #debd9288;
    padding: 0.25em 2em;
    margin: 2em auto;
    width: 90%;
    text-align: left;
    border: 2px solid #e4a654;
`;

const Character = (props) => {
    const {character} = props;

    return (
        <StyledCharacter>
            <h1>{character.name}</h1>
        </StyledCharacter>
    )
};

export default Character;