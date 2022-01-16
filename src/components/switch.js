import React from "react";
import styled from 'styled-components';

const StyledInput = styled.input`
    position: relative;
    width: 50px;
    height: 25px;
    margin: 0;
    vertical-align: top;
    background: #ffffff;
    border: 1px solid ${props=>props.theme.fontColor};
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    appearance: none;
    transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
    &::after {
        content: "";
        position: absolute;
        left: 0px;
        top: 0px;
        width: 22.5px;
        height: 22.5px;
        background-color: black;
        border-radius: 50%;
        transform: translateX(0);
        transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
    }
    &:checked::after {
        transform: translateX(calc(100% + 3px));
        background-color: #fff;  
    }
    &:checked {
        background-color: black;
    }
`
const StyledLabel = styled.label`
    font-size: 1rem;
    margin: 2.5px 0px 0px 5px;
    color: ${props=>props.theme.fontColor};
`

const Switch = (props) => {
    return (
        <>
            <StyledInput
                onClick={props.press}
                type="checkbox"
                {...props} />
            <StyledLabel>
                {props.title}
            </StyledLabel>
        </>
    );
}

Switch.defaultProps = {
    press: () => {}
}

export default Switch;
