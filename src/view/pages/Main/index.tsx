// Core
import React, { FC } from 'react';
import { useMessages } from '../../../bus/messages';
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


const Main: FC = () => {
    const { messages } = useMessages();

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
