import styled from "styled-components"


export const Container = styled.div`
    flex: 0.7;
    flex-grow: 1;
    margin-top: 60px;
    overflow-y: scroll;
    overflow-x: hidden;
`;

export const Header = styled.div`
    position: fixed;
    top: 50;
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid whitesmoke;
    background-color: white;
    z-index: 1;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > h4 > .MuiSvgIcon-root {
        margin-left: 20px;
        font-size: 10px;
    }
`;

export const Right = styled.div`
    margin-right: 50px;

    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px;
        font-size: 16px;
    }
`;

export const Messages = styled.div`
    margin-top: 60px;
`;

export const Bottom = styled.div`
    padding-bottom: 200px;
`;