import styled from 'styled-components';

export const HeroMainHeading = styled.h1`
    font-size: clamp(2.3rem, 6vw, 4.5rem);
    margin-bottom: 2rem;
    color: #BD1C4E;
    width: 100%;
    letter-spacing: 4px;
    text-align: center;
`

export const HeroSection = styled.section`
    background-image: url("./assets/Search.png");
    background-repeat: no-repeat;
    background-size: 500px 500px;
    background-position: 0% 0%;
    height: 30vh;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
    color: #64400B;
`;
