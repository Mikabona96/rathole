// Types
import * as types from './types';

export const setMessages: types.SetMessagesContract = (state, action) => {
    return {
        ...state,
        messages: action.payload,
    };
};
