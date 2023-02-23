// Core
import React, { FC, Suspense } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Bus
import { useTogglesState } from '../../bus/client/toggles';

export const Routes: FC = () => {
    const { isLoggedIn } = useTogglesState('isLoggedIn');

    return (
        <Suspense fallback = { <div>Spinner</div> }>
            {
                isLoggedIn
                    ? <Private />
                    : <Public />
            }
        </Suspense>
    );
};
