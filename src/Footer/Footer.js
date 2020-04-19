import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import ImdbLogo from '../img/logo-imdb.jpg';
import styled from 'styled-components';
import Container from '../Container';

const Footer = () => {
    return (
        <FooterStyle>
            <Container>
				<Flex>
					<div class="footer-logo c-10-12"><img src={ImdbLogo} alt="Logo do IMDB"/></div>
					<div class="c-2-12">
						<FooterSocialIcons>
							<li><FooterSocialIconsItemTwitter href="/" class="footer-social-icons-item"><FontAwesomeIcon icon={faTwitter}/></FooterSocialIconsItemTwitter></li>
							<li><FooterSocialIconsItemFacebook href="/" class="footer-social-icons-item"><FontAwesomeIcon icon={faFacebookSquare}/></FooterSocialIconsItemFacebook></li>
							<li><FooterSocialIconsItemInstagram href="/" class="footer-social-icons-item"><FontAwesomeIcon icon={faInstagram}/></FooterSocialIconsItemInstagram></li>
						</FooterSocialIcons>
					</div>
				</Flex>
			</Container>
        </FooterStyle>
    )
}
export default Footer;

const FooterStyle = styled.footer `
	padding: 30px 0;
`;

const Flex = styled.div `
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const FooterSocialIcons = styled.ul `
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1em 0;
	margin-right: 20px;
`;

const FooterSocialIconsItemTwitter = styled.a `
	font-size: 25px;
	margin-right: 15px;
	color: #BABABA;
	transition: 0.3s;
	&:hover {
		color: #55ACEE;
	}
`;

const FooterSocialIconsItemFacebook= styled.a `
	font-size: 25px;
	margin-right: 15px;
	color: #BABABA;
	transition: 0.3s;
	&:hover {
		color: #3B5998;
	}
`;

const FooterSocialIconsItemInstagram = styled.a `
	font-size: 25px;
	margin-right: 15px;
	color: #BABABA;
	transition: 0.3s;
	&:hover {
		color: #BB0000;
	}
`;