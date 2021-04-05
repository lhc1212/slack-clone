import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase";
import Login from "./components/Login";
import Loading from "./components/Loading";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />

  return (
    <Container>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <Body>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </Body>
          </>
        )}
      </Router>
    </Container >
  );
}

export default App;

const Container = styled.div``;

const Body = styled.div`
  display: flex; 
  height: 100vh;
`;