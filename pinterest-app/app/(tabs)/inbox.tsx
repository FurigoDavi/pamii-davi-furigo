import Entypo from '@expo/vector-icons/Entypo';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const defaultAvatar = require('../../assets/images/avatar.png');

const chats = [
  { id: '1', name: 'Ana', lastMessage: 'Oi! Tudo bem?', photo: defaultAvatar },
  { id: '2', name: 'Carlos', lastMessage: 'Gostei da ideia!', photo: defaultAvatar },
  { id: '3', name: 'Ricardo', lastMessage: 'O Leandrinho é um merda', photo: defaultAvatar },
  { id: '4', name: 'Leandrinho', lastMessage: 'O Ricardo é legal', photo: defaultAvatar },
  { id: '5', name: 'Rodney', lastMessage: 'Rodney', photo: defaultAvatar },
  { id: '6', name: 'Ariana Grande', lastMessage: 'Sou zépekena', photo: defaultAvatar },
  { id: '7', name: 'Taylor Swift', lastMessage: 'Show gratuito pra vc', photo: defaultAvatar },
  { id: '8', name: 'Dedé do Vasco', lastMessage: 'Sou do Vasco!', photo: defaultAvatar },
];

export default function Home() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Atualizações</Text>
        <Text style={styles.headerText}>Caixa de Entrada</Text>
      </View>

      <View style={styles.newMessage}>
        <Entypo 
          name="new-message" 
          size={24} 
          color="black" 
          style={styles.newMessageIcon}
        />
        <Text style={styles.newMessageText}>Nova Mensagem</Text>
      </View>

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatItem}>
            
            <Image 
              source={item.photo || defaultAvatar} 
              style={styles.avatar} />

            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.lastMessage}</Text>
            </View>

          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },

  headerText: {
    fontWeight: '500',
  },

  newMessage: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  newMessageText: {
    fontWeight: 'bold',
  },

  newMessageIcon: {
    color: '#FFF',
    padding: 8,
    backgroundColor: '#E00',
    borderRadius: 12,
  },

  chatItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  message: {
    color: '#666',
  },
});