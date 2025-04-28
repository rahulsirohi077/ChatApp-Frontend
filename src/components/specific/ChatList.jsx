import { Stack } from '@mui/material'
import React from 'react'
import ChatItem from '../shared/ChatItem'
import { bgGradient } from '../../constants/color'

const ChatList = ({
    w='100%',
    chats = [],
    chatId,
    onlineUsers = [],
    newMessagesAlert = [],
    handleDeleteChat,
}) => {
  return (
    <Stack width={w} overflow={"auto"} height={"100%"} >
        {
            chats.map((data,index)=>{
                const {avatar,name,_id,groupChat,members} = data;

                const newMessageAlert = newMessagesAlert.find(({chatId}) => chatId === _id);

                const isOnline = members?.some((member) => onlineUsers.includes(member));

                return <ChatItem 
                    index={index}
                    newMessageAlert={newMessageAlert} 
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name}
                    _id={_id}
                    key={_id}
                    groupChat={groupChat}
                    sameSender={_id === chatId}
                    handleDeleteChat={handleDeleteChat}
                />
            })
        }
    </Stack>
  )
}

export default ChatList