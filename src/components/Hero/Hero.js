import React from 'react';
import { Button, Container, MainHeading} from '../../globalStyles';
import {HeroSection, HeroText, HeroMainHeading} from './HeroStyles'

function Hero(){
    return (
        <HeroSection>
            <Container>
                <HeroMainHeading>Your Contacts</HeroMainHeading>
                <HeroText>Here You Can Find All Your Saved Contact</HeroText>
            </Container>
        </HeroSection>
    )
}

export default Hero