import "./List.css";

// Friends Chat list information Card
import ChatList from "./ChatList/ChatList";

// Component for User information including self
import UserInfo from "./UserInfo/UserInfo";

const List = () => {
  return (
    <div className='list'>
      <ChatList />
      <UserInfo />
    </div>
  )
}

export default List;