import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { ChatbotAvatar } from '../../constants/image';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Set up initial messages if needed
    const initialMessages = [
      {
        _id: 1,
        text: 'Welcome to the chat!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chatbot',
          avatar: ChatbotAvatar,
        },
      },
    ];
    setMessages(initialMessages);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
  };

  return (
    <View style={{ flex: 1 }}>

    </View>
  );
};

export default Chat;
