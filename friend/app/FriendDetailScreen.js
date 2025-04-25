import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FriendDetailScreen = ({ route }) => {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{friend.name}</Text>
      <Text style={styles.detailText}>Age: {friend.age}</Text>
      <Text style={styles.detailText}>Birthday: {friend.bday}</Text>
      <Text style={styles.detailText}>Status: {friend.status}</Text>
      <Text style={styles.detailText}>Quote: "{friend.quote}"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'left', padding: 70 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  detailText: { fontSize: 18, marginBottom: 8 },
});

export default FriendDetailScreen;
