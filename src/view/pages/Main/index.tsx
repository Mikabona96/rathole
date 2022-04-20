// Core
import React, { FC, ReactHTMLElement } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

const name = localStorage.getItem('username');


const MessageComponent = () => {
    return (
        <div>
            <p>Имя</p>
            <p>Message</p>
            <p>Time send</p>
        </div>
    );
};
type initialObj = {
    createdAt: string,
    text:      string,
    _id:       string,
    username:  string,
    updatedAt: string,
};


const Main: FC = () => {
    const message = fetch('https://api.barbarossa.pp.ua/messages');

    return (
        <S.Container>
            <S.Welcome>Welcome, {name}</S.Welcome>
            <div>
                {
                    // message
                    //     .then((data) => data.json())
                    //     .then((data) => {
                    //         data.map((m: initialObj) => <MessageComponent />);
                    //     })
                }
            </div>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
