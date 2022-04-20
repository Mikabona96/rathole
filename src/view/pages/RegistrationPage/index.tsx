/* eslint-disable id-blacklist */
// Core
import React, { FC } from 'react';
import { useTogglersRedux } from '../../../bus/client/togglers';

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


const userData = {
    username: 'ABOBA',
};

function postData(url = '', data = {}) {
    const response = fetch(url, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return response;
}


const RegistrationPage: FC<PropTypes> = () => {
    const { setTogglerAction } = useTogglersRedux();

    return (
        <S.Container>
            <S.FormWrapper>
                <S.Form onSubmit = { (e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    postData('https://api.barbarossa.pp.ua/users/register', userData)
                        .then((data) => data.json())
                        .then((data) => {
                            localStorage.setItem('_id', data._id);
                            localStorage.setItem('username', data.username);
                            setTogglerAction({ type: 'isLoggedIn', value: true });
                        });
                    e.currentTarget.reset();
                }
                }>
                    <p>Enter your name:</p>
                    <input
                        type = 'text'
                        onChange = { (e: React.ChangeEvent<HTMLInputElement>) => {
                            userData.username = e.target.value;
                        } }
                    />
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
