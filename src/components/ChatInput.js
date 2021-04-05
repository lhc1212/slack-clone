import { Button } from "@material-ui/core"
import { useRef } from "react";
import { auth, db } from "../firebase";
import { Container, Input } from "../styles/ChatInput.style"
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth"

function ChatInput({ channelName, channelId, chatRef }) {

    const inputRef = useRef(null);
    const [user] = useAuthState(auth);

    const sendMessage = (e) => {
        e.preventDefault();

        if (!channelId) return false;

        db.collection("rooms").doc(channelId).collection("messages").add({
            message: inputRef.current.value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
        });

        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

        inputRef.current.value = null;
    }

    return (
        <Container>
            <form>
                <Input
                    ref={inputRef}
                    placeholder={`Message #${channelName}`}
                />
                <Button type="submit" onClick={sendMessage}>
                    Send
                </Button>
            </form>
        </Container>
    )
}

export default ChatInput
