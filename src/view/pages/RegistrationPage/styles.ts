// Core
import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: start;
    padding: 10rem 15rem;
    height: 100vh;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 13%, rgba(17,15,15,1) 23%, rgba(17,18,18,1) 35%, rgba(23,24,24,1) 50%);
`;

export const FormWrapper = styled.div`
    display: flex;
    width: 20rem;
    height: 10rem;
    justify-content: start;
    background-color: rgba(0, 0, 0, .5);
    border: 1px solid white;
    z-index: 1;
    border-radius: 5px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    p {
        font-size: 1.5rem;
        color: white;
        margin-bottom: 1rem;
    }
    button {
        height: 2rem;
        font-size: 1rem;
        margin-top: 1rem;
        padding: 0px 10px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: rgba(255, 255, 255, .7);
        cursor: pointer;
        transition: .5 ease;
        &:hover {
            background-color: rgb(255, 255, 255)
        }
    }
    input {
        background-color: rgba(75, 75, 75, .5);
        color: white;
        font-size: 1.5rem;
        height: 2rem;
        border-radius: 5px;
        border: none;
        outline: none;
    }
`;
