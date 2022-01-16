import React from "react";
import styled, { css } from 'styled-components';


//функция для получения свойств theme
const themeColor = (props) => {
    // return props.color || props.theme.colors.primary
};

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
        box-shadow: 0 0 10px ${themeColor};
    }
    align-self: ${props => props.align || 'stretch'};

    ${props => props.primary && css`
        color: ${themeColor};
        background: ${props => props.background || 'black'};
    `}

    ${props => props.outlined && css`
        color: ${themeColor};
        border: 1px solid ${themeColor};
        background: transparent;
    `}
`
//расширение стилей компонента, параметром передается наследуемый компонент
// const LargeButton = styled(StyledButton)`
//     font-size: 32px;
// `

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
