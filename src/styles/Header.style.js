import { Avatar } from "@material-ui/core"
import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;

export const Left = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

export const UserAvatar = styled(Avatar)`
    cursor: pointer;
    opacity: 1;

    :hover {
        opacity: 0.7;
    }
`;

export const Search = styled.div`
    flex: 0.4;
    display: flex;
    align-items: center;
    padding: 0 50px;
    color: gray;
    background-color: #421f44;
    border: 1px solid gray;
    border-radius: 6px;
    opacity: 1;
`;

export const Input = styled.input`
    background-color: transparent;
    text-align: center;
    color: white;
    min-width: 30vw;
    border: none;
    outline: 0;
`;

export const Right = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;