import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddFriendScreen = ({ navigation, setFriends }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bday, setBday] = useState('');
  const [status, setStatus] = useState('');
  const [quote, setQuote] = useState('');

  const saveFriend = () => {
    if (name.trim()) {
      setFriends(prev => [
        ...prev,
        { name, age, bday, status, quote },
      ]);
      navigation.goBack(); // Go back to HomeScreen after adding the friend
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Friend's Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Birthday"
        value={bday}
        onChangeText={setBday}
        style={styles.input}
      />
      <TextInput
        placeholder="Status"
        value={status}
        onChangeText={setStatus}
        style={styles.input}
      />
      <TextInput
        placeholder="Quote"
        value={quote}
        onChangeText={setQuote}
        style={[styles.input, { height: 100 }]}
        multiline
      />
      <TouchableOpacity style={styles.saveButton} onPress={saveFriend}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, borderColor: '#999', padding: 10, borderRadius: 5, marginBottom: 12 },
  saveButton: { 
    backgroundColor: '#CDAA7D', // Beige color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default AddFriendScreen;
