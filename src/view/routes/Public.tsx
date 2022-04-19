// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import RegistrationPage from '../pages/RegistrationPage';


export const Public: FC = () => {
    return (
        <Routes>
            <Route
                element = { <RegistrationPage /> }
                path = '/'
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = '/'
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
