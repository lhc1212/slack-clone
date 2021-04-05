import { Container, UserAvatar, Info } from "../styles/Message.style"

function Message({ id, user, timestamp, message, userImage }) {
    return (
        <Container>
            <UserAvatar
                src={userImage}
                alt="userImage"
            />

            <Info>
                <h4>
                    {user}{" "}
                    <span>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
            </Info>
        </Container>
    )
}

export default Message
