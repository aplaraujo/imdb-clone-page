import React from 'react';
import MoviesData from '../MoviesData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faHeart } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Container from '../Container';


const Content = () => {

    const movies = MoviesData.map((movie) => {
        return (
           <MoviesListCatalogueItem key={movie.id}>
               <MoviePoster>
                    <img src={movie.movieImage} alt=""/>
                    <Overlay>
                        <Text>
                            <MovieTitleOverlay>{movie.movieTitle}</MovieTitleOverlay>
                            <MovieOverlayIcon><FontAwesomeIcon icon={faPlay}/></MovieOverlayIcon>
                        </Text>
                    </Overlay>
               </MoviePoster>
               <MoviePosterInfoContainer>
                    <MoviePosterInfoContainerTitle>{movie.movieTitle}</MoviePosterInfoContainerTitle>
                    <MoviePosterInfoContainerGenre>
                        <li><MoviePosterInfoContainerGenreItem href="/">{movie.movieGenre}</MoviePosterInfoContainerGenreItem ></li>
                    </MoviePosterInfoContainerGenre>
                        <MoviePosterInfoContainerGenreEvaluation>
                            <MoviePosterInfoContainerGenreEvaluationIcon><FontAwesomeIcon icon={faHeart}/></MoviePosterInfoContainerGenreEvaluationIcon>
                            <MoviePosterInfoContainerGenreEvaluationRating>{movie.movieRating.toFixed(1)}</MoviePosterInfoContainerGenreEvaluationRating>
                        </MoviePosterInfoContainerGenreEvaluation>
               </MoviePosterInfoContainer>
           </MoviesListCatalogueItem>
        )
    })


    return (
        <MoviesList>
            <Container>
                    <MoviesListMenuOptions>
                        <MoviesListMenuOptionsItem><MoviesListMenuOptionsItemStyle href="/">Nos Cinemas</MoviesListMenuOptionsItemStyle></MoviesListMenuOptionsItem>
                        <MoviesListMenuOptionsItem><MoviesListMenuOptionsItemStyle href="/">Em Breve</MoviesListMenuOptionsItemStyle></MoviesListMenuOptionsItem>
                        <MoviesListMenuOptionsItem><MoviesListMenuOptionsItemStyle href="/">Bilheteria</MoviesListMenuOptionsItemStyle></MoviesListMenuOptionsItem>
                        <MoviesListMenuOptionsItem><MoviesListMenuOptionsItemStyle href="/">Séries</MoviesListMenuOptionsItemStyle></MoviesListMenuOptionsItem>
                        <MoviesListMenuOptionsItem><MoviesListMenuOptionsItemStyle href="/">Trailers</MoviesListMenuOptionsItemStyle></MoviesListMenuOptionsItem>
                    </MoviesListMenuOptions>
				</Container>
                <Container>
                    <Row>
                    {movies}
                    </Row>
                </Container>
        </MoviesList>
    )
}
export default Content

const MoviesList = styled.section `
    width: 100%;
    background-color: #F2F2F2;
`;

const MoviesListMenuOptions = styled.ul `
    align-items: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);
	display: flex;
	justify-content: center;
	list-style: none;
	margin: 0 auto;
	padding: 0 20px;
    @media (max-width: 600px){
        display: block;
        text-align: center;
    }
`;

const MoviesListMenuOptionsItem = styled.li `
    margin: 0 20px;
`;

const MoviesListMenuOptionsItemStyle = styled.a `
    color: #E4BB23;
    display: inline-block;
    padding: 25px 0;
    font-size: 1.3em;
	font-weight: bold;
	text-decoration: none;
	text-transform: uppercase; 
    &:hover {
        box-shadow: inset 0 -1px 0 #E4BB23;
    }
`;

const MoviesListCatalogueItem = styled.div `
    background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	display: flex;
    flex-direction: column;
    margin: 30px 0;
    overflow: hidden;
    width: 220px;
    @media(max-width: 600px){
        width: 100%;
    }
`;

const MoviePoster = styled.div `
    margin: 0;
	height: auto;
	overflow: hidden;
    position: relative;
    &:hover {
        opacity: 1;
	    overflow: hidden;
    }
`;

const Overlay = styled.div `
    position: absolute;
  	top: 0;
  	bottom: 0;
  	left: 0;
  	right: 0;
  	height: 100%;
  	width: 100%;
  	opacity: 0;
	transition: .5s ease;
    background-color: rgba(0, 0, 0, 0.5);
    &:hover {
        opacity: 1;
	    overflow: hidden;
    }
`;

const Text = styled.div `
    position: absolute;
  	top: 50%;
  	left: 50%;
  	-webkit-transform: translate(-50%, -50%);
  	-ms-transform: translate(-50%, -50%);
  	transform: translate(-50%, -50%);
  	text-align: center;
`;

const MoviePosterInfoContainer = styled.div `
    padding: 0 16px;
    background-color: white;
    &::after{
        content: "";
	    clear: both;
	    display: table;
    }
`;

const MovieTitleOverlay = styled.p `
    color: #E4BB23;
    font-size: 2em;
	font-weight: bold;
	line-height: 1em;
	text-transform: uppercase; 
`;

const MovieOverlayIcon = styled.div `
    color: white;
	margin-top: 1em;
	font-size: 5em;
    transition: 0.3s;
    &:hover {
        color: #E4BB23;
    }
`;

const MoviePosterInfoContainerTitle = styled.div `
    font-size: 1.5em;
	font-weight: bold;
	margin: 7px 0;
	text-transform: uppercase;
`;

const MoviePosterInfoContainerGenre = styled.ul `
    margin: 10px 0;
	display: flex;
`;

const MoviePosterInfoContainerGenreItem = styled.a `
    font-size: 1.3em;
	color: #E4BB23;
    margin-right: 2px;
    &:hover {
        text-decoration: underline;
    }
`;

const MoviePosterInfoContainerGenreEvaluation = styled.div `
    display: flex;
	justify-content: space-between;
	margin-bottom: 7px;
	font-weight: bold;
`;

const MoviePosterInfoContainerGenreEvaluationIcon = styled.div `
    font-size: 2em;
    color: #BABABA;
    transition: 0.3s;
    &:hover {
        color: #BB0000;
    }
`;

const MoviePosterInfoContainerGenreEvaluationRating = styled.div `
    font-size: 1.5em;
`;

const Row = styled.div `
    display: grid;
	grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
`;