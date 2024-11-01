import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const Chat = () => {
  const [messages, setMessages] = useState([]);
 
  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));

    const prompt = newMessages[0].text;

    fetch('http://10.0.2.2:4001/api/v1/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    })
      .then((response) => response.json()
    
    )
      .then((response) => {
        console.log('API Response:', response);  // Log the response to check structure

        // Accessing data.data to get the text content
        const replyMessage = {
          _id: Math.random().toString(),
          text: response.data,  // Adjusted to use data.data for the content
          createdAt: new Date(),
          user: { _id: 2, name: 'Bot' },
        };

        setMessages((previousMessages) => GiftedChat.append(previousMessages, [replyMessage]));
        console.log(response)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
     
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{ _id: 1 }}
        placeholder="Type a message..."
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200ee',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Chat;
