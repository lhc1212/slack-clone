import { Button } from "@material-ui/core"
import { auth, microsoftProvider, googleProvider } from "../firebase"
import { Container, InnerContainer, Logo } from "../styles/Login.style"

function Login() {

    const signInWithMicrosoft = () => {
        auth.signInWithPopup(microsoftProvider)
            .catch((error) => alert(error.message));
    }

    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider)
            .catch((error) => alert(error.message));
    }

    return (
        <Container>
            <InnerContainer>
                <Logo
                    src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
                    alt="Slack Logo"
                />
                <h1>Sign In To Slack</h1>
                <p>slack.com</p>

                <Button
                    style={{ margin: "10px", marginTop: "20px" }}
                    variant="outlined"
                    onClick={signInWithMicrosoft}
                >
                    <img
                        height={20}
                        style={{ marginRight: "10px" }}
                        src="https://c.s-microsoft.com/favicon.ico?v2"
                        alt="Microsoft"
                    />
                    Sign in with Microsoft
                </Button>

                <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginTop: "10px" }}
                    onClick={signInWithGoogle}
                >
                    <img
                        height={20}
                        style={{ marginRight: "10px" }}
                        src="http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png"
                        alt="Google"
                    />
                    Sign in with Google
                </Button>
            </InnerContainer>
        </Container>
    )
}

export default Login
