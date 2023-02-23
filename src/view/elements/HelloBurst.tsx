// Core
import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.section`
    width: 100%;
    height: 100%;

    display: grid;
    place-items: center;
    grid-template-rows: 95% 5%;
    
    padding: 10px;
    
    div {
        display: grid;
        place-items: center;

        img {
            max-width: 300px;
            max-height: 300px;
        }
        
        h1 {
            font-size: 36px;
            color: #f73f52;
            font-family: sans-serif;
            font-weight: bold;
            
            span {
                color: #ff6723;
            }
            
            @media (max-width: 1024px) {
                font-size: 30px;
            }
        }
    }

    h2 {
        font-size: 20px;
        color: #747272;
    }
`;

// Images
import burstLogo from '../../assets/images/burst-logo.png';
import { useTogglesState } from '../../bus/client/toggles';

export const HelloBurst = () => {
    const { isDown } = useTogglesState('isDown');

    console.log('HELLO');

    return (
        <Container>
            <div>
                <img
                    alt = 'burst-logo'
                    src = { burstLogo }
                />
                <h1>Welcome to <span>Burst.🔥</span></h1>
                isDown<p>{String(isDown)}</p>
            </div>
            <h2>Docs are coming soon...</h2>
        </Container>
    );
};
