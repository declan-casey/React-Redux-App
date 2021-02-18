import React, {useEffect} from 'react'
import Card from "./Card"
import styled from "styled-components"
import {connect} from "react-redux"
import { getCharacter } from "../actions/action" 

const StyledList = styled.div`
        @import url("./index_files/get-shwifty.ttf");

        @font-face{
        font-family:Get Schwifty;
        src:'./index_files/get-shwifty.ttf';
        }

        .title{
            font-family: Get Schwifty;
            font-size: 3rem;
            color: hsla(120, 100%, 25%, 0.9);
            text-shadow: 2px 2px lime  ;
            background-image: linear-gradient( 45deg, darkslategrey, hotpink );
            width:20%;
            border-radius: 10px;
            padding: 6px;
            box-shadow: 2px 2px 60px 10px lime;
        }

        .header{
            display: flex;
            justify-content: center;
            background:black;
            padding-bottom: -1rem;
        }

        .card{
            width: 25%;
            padding: 4px
        }

        .listDisplay{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
            background-image: linear-gradient(grey, red);
        }
`
export function List(props) {
    useEffect(() => {
        props.getCharacter()
    },[])
    return (
        <StyledList>
            <div className = "header">
                <h1 className = "title">YOU GOTTA GET SCHWIFTY</h1>
            </div>
            <div className = "listDisplay">
                {props.character.map((char) => {
                        return <div className = "card"><Card character = {char}></Card></div>
                    })}
            </div>
        </StyledList>
    )
}
const mapStateToProps = state => {
    return{
        character: state.character,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps,{getCharacter})(List);