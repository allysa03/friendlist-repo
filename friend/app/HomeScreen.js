import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation, friends = [], setFriends }) => {
  return (
    <View style={styles.container}>
      {friends.length === 0 ? (
        <Text style={styles.emptyText}>Empty list</Text>
      ) : (
        <FlatList
          data={friends}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.friendButton}
              onPress={() => navigation.navigate('FriendDetail', { friend: item })}
            >
              <Text style={styles.friendText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddFriend')}  // Just navigate to AddFriend without passing setFriends
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  emptyText: { textAlign: 'center', fontSize: 18, marginVertical: 20 },
  friendButton: { backgroundColor: '#CDAA7D', padding: 15, marginVertical: 8, borderRadius: 8 },
  friendText: { color: '#fff', fontSize: 16, textAlign: 'center' },
  addButton: { position: 'absolute', bottom: 20, left: 20, backgroundColor: '#CDAA7D', padding: 20, borderRadius: 50 },
  addButtonText: { fontSize: 24, color: 'white' }
});

export default HomeScreen;
