// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

const Root: FC = () => {
    return (
        <Container>
            <header>
                <h1>Your best cv</h1>
            </header>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
);
