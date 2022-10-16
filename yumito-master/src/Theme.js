import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
    body: '#215C96',
    fontColor: '#000'
}

export const darkTheme = {
    body: '#000',
    fontColor: '#FFF'
}

export const GlobalStyles = createGlobalStyle`

    body{
        background-color: ${(props) => props.theme.body};
    }

    h1{
        color: ${(props) => props.theme.fontColor}
    }

`