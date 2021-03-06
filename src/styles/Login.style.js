import styled from "styled-components";

export const Container = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 100px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Logo = styled.img`
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
`;