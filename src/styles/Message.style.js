import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`;

export const UserAvatar = styled.img`
    height: 50px;
    border-radius: 8px;
`;

export const Info = styled.div`
    padding-left: 10px;

    > h4 > span {
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`;