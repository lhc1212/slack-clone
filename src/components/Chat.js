import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons"
import { selectRoomId } from "../features/appSlice"
import { useSelector } from "react-redux";
import { Container, Header, Right, Left, Messages, Bottom } from "../styles/Chat.style"
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore"
import { db } from "../firebase";
import Message from "./Message";
import { useEffect, useRef } from "react";

function Chat() {

    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection("rooms").doc(roomId)
    )
    const [roomMessages] = useCollection(
        roomId &&
        db
            .collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
    );
    const chatRef = useRef(null);

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [roomId, roomMessages])

    return (
        <Container>
            {roomDetails && roomMessages && (
                <>
                    <Header>
                        <Left>
                            <h4>
                                <strong>#{roomDetails?.data().name}</strong>
                            </h4>
                            <StarBorderOutlined />
                        </Left>

                        <Right>
                            <p>
                                <InfoOutlined />
                            Details
                    </p>
                        </Right>
                    </Header>

                    <Messages>
                        {
                            roomMessages?.docs.map((doc) => {
                                const { message, timestamp, user, userImage } = doc.data();

                                return (
                                    <Message
                                        key={doc.id}
                                        id={doc.id}
                                        message={message}
                                        timestamp={timestamp}
                                        user={user}
                                        userImage={userImage}
                                    />
                                )
                            })
                        }
                        <Bottom ref={chatRef} />
                    </Messages>

                    <ChatInput
                        chatRef={chatRef}
                        channelName={roomDetails?.data().name}
                        channelId={roomId}
                    />
                </>
            )}
        </Container>
    )
}

export default Chat
