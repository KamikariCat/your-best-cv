// Core
import React, { FC, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Routes
import { Routes } from './routes';

// Hooks
import { togglesStore } from '../bus/client/toggles';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Styles
export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const App: FC = () => {
    const setOnlineStatusHandler = (status: 'online' | 'offline') => {
        togglesStore.setValues({ isOnline: status === 'online' });
    };


    useEffect(() => {
        window.addEventListener('online', () => setOnlineStatusHandler('online'));
        window.addEventListener('offline', () => setOnlineStatusHandler('offline'));
    }, []);

    return (
        <ThemeProvider theme = { defaultTheme }>
            <GlobalStyles />
            <AppContainer>
                <Routes />
            </AppContainer>
        </ThemeProvider>
    );
};
