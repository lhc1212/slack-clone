import { db } from "../firebase";
import { Container, Channel } from "../styles/SidebarOption.style"
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice"

function SidebarOption({ key, id, Icon, title, addChannelOption }) {

    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt("Please enter the channel name");

        if (channelName) {
            db.collection("rooms").add({
                name: channelName,
            })
        }
    }

    const selectChannel = () => {
        if (id) {
            dispatch(
                enterRoom({
                    roomId: id,
                }))
        }
    }

    return (
        <Container
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon font-size="small" style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <Channel>
                    <span>#</span> {title}
                </Channel>
            )}
        </Container>
    )
}

export default SidebarOption

// 1:42:19