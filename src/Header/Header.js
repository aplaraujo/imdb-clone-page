import React from 'react';
import ImdbLogo from '../img/logo-imdb.jpg';
import WalterWhite from '../img/walter-white.jpg';
import MadMaxBackground from '../img/capa-madmax2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyle>
            <Nav>
                <NavLogo href="/">
                    <img src={ImdbLogo} alt="Logo do IMDB"/>
                </NavLogo>
                <NavLink>
                    <NavLinkItem><NavLinkItemStyle href="/">Lançamentos</NavLinkItemStyle></NavLinkItem>
                    <NavLinkItem><NavLinkItemStyle href="/">Crítica</NavLinkItemStyle></NavLinkItem>
                    <NavLinkItem><NavLinkItemStyle href="/">Em cartaz</NavLinkItemStyle></NavLinkItem>
                </NavLink>
                <NavUser>
                    <NavUserPicture><img src={WalterWhite} alt="/"/></NavUserPicture>
                    <NavUserName>Walter White</NavUserName>
                </NavUser>
            </Nav>
            <HeaderContent>
				<HeaderContentContainer>
					<HeaderContentMovieTitle>Mad Max: Estrada da Fúria</HeaderContentMovieTitle>
					<HeaderContentMovieGenre>
						<li><HeaderContentMovieGenreItem href="/">Aventura</HeaderContentMovieGenreItem></li>
						<li><HeaderContentMovieGenreItem href="/">Sci-Fi</HeaderContentMovieGenreItem></li>
						<li><HeaderContentMovieGenreItem href="/">Terror</HeaderContentMovieGenreItem></li>
					</HeaderContentMovieGenre>
					<HeaderContentButton href="/">Assistir ao Trailer <FontAwesomeIcon icon={faPlayCircle} /></HeaderContentButton >
					<HeaderContentInfo>
						<HeaderContentInfoOne>Nos Cinemas</HeaderContentInfoOne>
						<HeaderContentInfoTwo>15 de Outubro de 2015 (Brasil)</HeaderContentInfoTwo>
					</HeaderContentInfo>
				</HeaderContentContainer>
			</HeaderContent>
        </HeaderStyle>
    )
}
export default Header;

const HeaderStyle = styled.header `
    width: 100%;
    height: 90vh;
    background-image: url(${MadMaxBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
	position: relative;
    &::after {
    background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 0.6) 0%,
		rgba(0, 212, 255, 0) 75%
	);
	content: "";
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
    }
`;

const Nav = styled.nav `
    width: 960px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 0;
    z-index: 2;
    @media (max-width: 600px){
       display: block; 
       padding: 10px 0;
    }
`;

const NavLogo = styled.a `
    margin-left: 10px;
`;

const NavLink = styled.ul `
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 600px){
        display: block;
    }
`;

const NavLinkItem = styled.li `
    list-style: none;
    margin-right: 25px;
    @media (max-width: 600px){
        padding: 10px 0;
    }
`;

const NavLinkItemStyle = styled.a `
    color: white;
    text-transform: uppercase;
    font-size: 1.3rem;
    transition: 0.3s;

    &:hover {
        color: #E4BB23;
    }
`;

const NavUser = styled.div `
    display: flex;
    align-items: center;
`;

const NavUserPicture = styled.div `
    border-radius: 100%;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
	height: 45px;
	margin-right: 15px;
	overflow: hidden;
	width: 45px;
`;

const NavUserName = styled.p `
    color: white;
	font-size: 1.3em;
	font-weight: bold;
`;

const HeaderContent = styled.section `
    z-index: 2;
    position: relative;
    width: 100%;
`;

const HeaderContentContainer = styled.div `
    width: 960px;
    margin: 0 auto;
    z-index: 2;
    position: relative;
`;

const HeaderContentMovieTitle = styled.h2 `
    color: white;
    font-size: 6.5em;
	font-weight: bold;
	line-height: 1.2em;
	margin: 0;
	text-transform: uppercase;
    @media (max-width: 600px){
        font-size: 3em;
    }
`;

const HeaderContentMovieGenre = styled.ul `
    display: flex;
	margin: 15px 0 30px;
`;

const HeaderContentMovieGenreItem = styled.a `
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
	margin-right: 15px;
	text-transform: uppercase;
	transition: 0.3s;
    &:hover {
        color: #E4BB23;
    }
`;

const HeaderContentButton = styled.a `
    display: inline-block;
	padding: 15px 40px;
	color: black;
	font-size: 1.5em;
    text-decoration: none;
	background-color: #E4BB23;
	border-radius: 40px;
	position: relative;
	transition: 0.3s;
    &:hover {
        background-color: #B6961C;
    }
`;

const HeaderContentInfo = styled.div `
    padding: 20px 0;
`;

const HeaderContentInfoOne = styled.p `
    margin-bottom: 20px;
    color: white;
    font-size: 1.4em;
`;

const HeaderContentInfoTwo = styled.p `
    color: #E4BB23;
    font-size: 1.4em;
`;