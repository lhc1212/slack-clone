import styled from "styled-components";

export const Container = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > button {
        display: none;
    }
`;

export const Input = styled.input`
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
`;