import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState([]); // New state to hold all conversations
  const [currentConversationId, setCurrentConversationId] = useState(null); // Track the current conversation ID

  const generateConversationId = () => Math.random().toString(); // Function to generate a unique conversation ID

  const startNewConversation = () => {
    const newConversationId = generateConversationId();
    setCurrentConversationId(newConversationId); // Set the new conversation ID
    setMessages([]); // Clear messages for the new conversation
    // Optionally, you can also add a placeholder entry to conversations
    setConversations((prev) => [...prev, { id: newConversationId, messages: [] }]);
  };

  const onSend = useCallback((newMessages = []) => {
    // Update the current messages
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));

    const prompt = newMessages[0].text;

    fetch('http://10.0.2.2:4001/api/v1/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('API Response:', response); // Log the response to check structure

        // Create the bot reply message
        const replyMessage = {
          _id: Math.random().toString(),
          text: response.data, // Adjusted to use response.data for the content
          createdAt: new Date(),
          user: { _id: 2, name: 'Bot' },
        };

        // Append bot reply to the current messages
        setMessages((previousMessages) => GiftedChat.append(previousMessages, [replyMessage]));

        // Update the conversations array with the new message
        setConversations((prevConversations) => {
          return prevConversations.map((conversation) => {
            if (conversation.id === currentConversationId) {
              return {
                ...conversation,
                messages: GiftedChat.append(conversation.messages, newMessages.concat(replyMessage)), // Append messages to the current conversation
              };
            }
            return conversation;
          });
        });

        console.log(response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [currentConversationId]); // Add currentConversationId as a dependency

  // Debugging: Log all conversations
  useEffect(() => {
    console.log('All Conversations:', conversations);
  }, [conversations]);

  // Example of starting a new conversation
  useEffect(() => {
    startNewConversation(); // Call this function to start the first conversation
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
