import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const menuItems = [
    { id: '1', name: 'Spaghetti', category: 'Pasta', price: 12 },
    { id: '2', name: 'Caesar Salad', category: 'Salads', price: 8 },
    { id: '3', name: 'Grilled Chicken', category: 'Entrees', price: 15 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <View style={styles.hero}>
        <Text style={styles.heroText}>Welcome to Little Lemon Restaurant!</Text>
        <TextInput style={styles.searchBar} placeholder="Search..." />
      </View>
      <View style={styles.menuCategories}>
        <Button title="Pasta" onPress={() => {}} />
        <Button title="Salads" onPress={() => {}} />
        <Button title="Entrees" onPress={() => {}} />
      </View>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.name}</Text>
            <Text>{item.category}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
      />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  hero: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
  },
  heroText: {
    fontSize: 18,
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  menuCategories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  menuItem: {
    padding: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

export default HomeScreen;
