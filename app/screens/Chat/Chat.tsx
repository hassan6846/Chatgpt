import React, { useState, useCallback } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView, Text } from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Generative AI instance with your API key
const genAI = new GoogleGenerativeAI(process.env.GPT_KEY); // Use your actual API key

const Chat = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = useCallback(() => {
    if (message.trim()) {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
         model
        .generateContent(message)
        .then((result) => {
          console.log('API Response:', result); 
          setResponse(result.response.candidates[0].content.parts[0].text);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      setMessage('');  
    }
  }, [message]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chatContainer}>
        {/* Input field */}
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message"
        />

        {/* Send button */}
        <Button title="Send" onPress={handleSend} />

        {/* Display server response */}
        {response ? <View style={styles.responseContainer}><Text>{response}</Text></View> : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  chatContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  responseContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
});

export default Chat;
