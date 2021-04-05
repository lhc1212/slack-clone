import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import { Container, Left, UserAvatar, Search, Input, Right } from "../styles/Header.style"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase"

function Header() {
    const [user] = useAuthState(auth);
    return (
        <Container>
            <Left>
                <UserAvatar
                    src={user?.photoURL}
                    alt={user?.displayName}
                    onClick={() => auth.signOut()}
                />
                <AccessTimeIcon />
            </Left>

            <Search>
                <SearchIcon />
                <Input placeholder="Search" />
            </Search>

            <Right>
                <HelpOutlineIcon />
            </Right>
        </Container>
    )
}

export default Header