import styled from "styled-components";

const yellowSim = "#fdd835";

interface ButtonProps {
    isActive: boolean;
}



export const Button = styled.button<ButtonProps>`
    border-radius: 5px;
    border: 1px solid darkgray;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    padding: 1rem;
    margin: 1rem;
    font-family: "Homer Simpson Revised", sans-serif;
    font-size: 1.4rem;


    :hover {
        color: black;
        border: 2px solid black;
        cursor: pointer;
        background-color: ${yellowSim};
    }

    color: ${(props) =>(props.isActive ? 'black' : '#fdd835' )};
    background-color: ${(props) =>(props.isActive ? '#fdd835' : '#4899EE' )};
    border: ${(props) =>(props.isActive ? '2px solid black ' : '2px solid #fdd835' )};

` 