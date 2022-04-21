// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type Message = {
    _id: string,
    username: string,
    text: string,
    createdAt: string,
    updatedAt:string,
};

// State
export type Messages = Array<any>
export type MessagesState = {
    messages: Messages | null
}

// Contracts
export type SetMessagesContract = CaseReducer<MessagesState, PayloadAction<Messages>>
