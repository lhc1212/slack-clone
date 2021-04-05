import styled from "styled-components"
import { Circle } from "better-react-spinkit";

function Loading() {
    return (
        <Container>
            <Contents>
                <Logo
                    src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
                    alt="Slack Logo"
                />
                <Circle
                    color="#36c5f0"
                    size={70}
                />
            </Contents>
        </Container>
    )
}

export default Loading

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
`;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-bottom: 100px;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    height: 120px;
    padding: 20px;
    margin-bottom: 10px;
`;