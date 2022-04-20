// Core
import React, { FC, Suspense, useEffect } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Bus
import { useTogglersRedux } from '../../bus/client/togglers';

// Elements
import { Spinner } from '../elements';

export const Routes: FC = () => {
    const { togglersRedux: { isLoggedIn }} = useTogglersRedux();

    const  { setTogglerAction } = useTogglersRedux();

    const userId = localStorage.getItem('_id');


    useEffect(() => {
        if (userId) {
            fetch(`https://api.barbarossa.pp.ua/users/refresh/${userId}`)
                .then((data) => data.json())
                .then((data) => {
                    if (userId === data._id) {
                        setTogglerAction({ type: 'isLoggedIn', value: true });
                    }
                });
        }
    }, []);


    return (
        <Suspense fallback = { <Spinner /> }>
            {
                isLoggedIn
                    ? <Private />
                    : <Public />
            }
        </Suspense>
    );
};
