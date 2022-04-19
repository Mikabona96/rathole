// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const RegistrationPage: FC<PropTypes> = () => {
    const response = fetch('https://barbarossa.pp.ua/messages');
    response.then((data) => data.json()).then((data) => console.log(data));

    return (
        <S.Container>
            <S.FormWrapper>
                <S.Form>
                    <p>Enter your name:</p>
                    <input type = 'text' />
                    <button>Drop into hole!</button>
                </S.Form>
            </S.FormWrapper>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <RegistrationPage />
    </ErrorBoundary>
);
