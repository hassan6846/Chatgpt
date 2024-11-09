import React, { useState, useCallback } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet } from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GiftedChat ,InputToolbar} from 'react-native-gifted-chat';

// Initialize the Google Generative AI instance with your API key
const genAI = new GoogleGenerativeAI('AIzaSyAce9vOu6Bm6qijMzA91oTUu9O_MA2sLQY'); // Use your actual API key

const Chat = () => {
  const [messages, setMessages] = useState([]);  // For GiftedChat messages

  const handleSend = useCallback((newMessages = []) => {
    const userMessage = newMessages[0];
    
    if (userMessage.text.trim()) {
      // Add user message to the chat
      setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));

      // Use Google Generative AI to process the prompt
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      model
        .generateContent(userMessage.text)
        .then((result) => {
          console.log('API Response:', result);  // Log the response to check structure

          // Assuming response structure contains the reply content
          const botMessage = {
            _id: Math.round(Math.random() * 1000000),
            text: result.response.candidates[0].content.parts[0].text,  // Adjust according to actual response
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Bot',
            },
          };

          // Add bot response to the chat
          setMessages((previousMessages) => GiftedChat.append(previousMessages, [botMessage]));
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, []);
  const customtInputToolbar = props => {
    return (
      <InputToolbar
 
        {...props}
        containerStyle={{
          backgroundColor: "white",
          borderTopColor: "#E8E8E8",
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderRightWidth:0.3,
          padding:5,
          borderLeftWidth:0.3,
          borderRadius:10,
          borderBottomColor:"#E8E8E8",
        }}
      />
    );
  };
  return (
 <KeyboardAvoidingView style={{flex:1,marginBottom:80,padding:20,backgroundColor:"#fff"}}>


      <GiftedChat
     renderInputToolbar={props => customtInputToolbar(props)}

      messagesContainerStyle={{flex:1,marginBottom:5,backgroundColor:"#fff"}}
        messages={messages}
        onSend={handleSend}
        user={{
          _id: 1,
          name: 'User',
        }}
      />
 </KeyboardAvoidingView>
  );
};



export default Chat;
