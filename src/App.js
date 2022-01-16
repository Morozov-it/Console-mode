import React, { useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./themes";

import Console from "./components/console";
import Flex from "./components/flex";
import Title from "./components/title";
import Switch from "./components/switch";

// создание стилизованного компонента для оборачивания основного компонента
const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  font-size: 24px;
  background: ${props => props.theme.background};
  color: ${props => props.theme.fontColor};
`

const App = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = (e) => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider
      theme={theme === 'light' ? lightTheme : darkTheme}>
      <AppWrapper>
        <Flex justify={'center'}>
          <Title >Console cmd. fake</Title>
        </Flex>
        <Flex justify={'flex-end'}>
          <Switch press={themeToggler} title={theme} />
        </Flex>
        <Flex direction={'column'} margin={'10px 0px'}>
          <Console />
        </Flex>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
