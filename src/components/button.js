import React from "react";
import styled from 'styled-components';

// набор стилей по состоянию одного props
const StyledButton = styled.button`
    border: none;
    margin: 5px;
    padding: 10px 35px;
    font-size: 1rem;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    box-shadow: none;
    transition: box-shadow 0.5s;
    &:hover {
        box-shadow: 0 0 10px ${props=>props.theme.fontColor};
    }
    align-self: ${props => props.align || 'stretch'};
    color: ${props=>props.theme.fontColor};
    border: 1px solid ${props=>props.theme.fontColor};
    background: transparent;
`

const Button = (props) => {
    return (
        <>
            <StyledButton onClick={props.press} {...props} />
        </>
    );
}

Button.defaultProps = {
    press: () => {}
}

export default Button;
