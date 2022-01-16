import React from "react";
import styled from 'styled-components';

// динамические стили
const StyledTitle = styled.h2`
    
`

const Title = (props) => {
    return (
        <StyledTitle {...props} />
    );
}

export default Title;
