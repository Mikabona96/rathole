// Core
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
import { useMessagesSaga } from './saga';

export const useMessages = () => {
    const { fetchMessages } = useMessagesSaga();
    const messages = useSelector((state) => state.messages); // Add messages to ./src/init/redux/index.ts

    useEffect(() => {
        fetchMessages();
    }, []);

    return {
        messages,
    };
};
