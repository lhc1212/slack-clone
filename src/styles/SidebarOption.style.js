import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-left: 2px;
    cursor: pointer;
    opacity: 1;
    
    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;
    }
`;

export const Channel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
`;

// 1:16:02