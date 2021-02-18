import React from 'react'
import styled from "styled-components"

const StyledCard = styled.div`
margin-top: 3rem;
border-radius:10px;
box-shadow: 2px 2px 40px 2px green;
width: 100%;
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

.container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}
background-image: linear-gradient(black, white);

h2{
    color:white;
}

img{
    border-radius: 10px
}
`
export default function Card(props) {
    return (
        <StyledCard className = "thisClass">
            
            <h2>{props.character.name}</h2>
            <img src = {props.character.image}/>
            <div className = "container">
            
                <p>{props.character.location.name}</p>
                <p>{props.character.origin.name}</p>
                <p>{props.character.species}</p>
                <p>{props.character.gender}</p>
                <p>{props.character.status}</p>
            
            </div>
        </StyledCard>
    )
}