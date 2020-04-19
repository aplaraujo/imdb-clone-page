import { createGlobalStyle } from 'styled-components';
import MontserratWoff from './Fonts/Montserrat.woff';
import MontserratWoff2 from './Fonts/Montserrat.woff2';
import MontserratBoldWoff from './Fonts/Montserrat Bold.woff';
import MontserratBoldWoff2 from './Fonts/Montserrat Bold.woff2';

const GlobalStyles = createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        vertical-align: baseline;
        list-style: none;
        border: 0;
        font-family: Montserrat, sans-serif;
        font-size: 10px;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        url(${MontserratWoff2}) format('woff2'),
        url(${MontserratWoff}) format('woff');
        font-weight: 400;
        font-style: regular;
    }

    @font-face {
        font-family: 'Montserrat Bold';
        src: local('Montserrat Bold'), local('Montserrat Bold'),
        url(${MontserratBoldWoff2}) format('woff2'),
        url(${MontserratBoldWoff}) format('woff');
        font-weight: 700;
        font-style: bold;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
`;

export default GlobalStyles