import "./Chat.css";

const Chat = () => {
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>lorem ipsum.</p>
            </div>
        </div>
        <div className="icons">
            <img src="./phone.jpeg" alt="" />
            <img src="./video.jpeg" alt="" />
            <img src="./info.jpeg" alt="" />
        </div>
      </div>
      <div className="center">

      </div>
      <div className="bottom">

      </div>
    </div>
  )
}

export default Chat;