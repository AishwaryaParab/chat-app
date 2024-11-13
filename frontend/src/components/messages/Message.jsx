import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
  const {authUser} = useContext(AuthContext);
  const {selectedConversation} = useConversation();

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : "";

  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="chat-bubble" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor}`}>
            {message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
            12:42
        </div>
    </div>
  )
}

export default Message