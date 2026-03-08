import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const conversas = [ //array com conversas
  {
    id: '1', //identificador unico 
    nome: 'João Siles',
    mensagem: 'que tela perfeita, MB',
    hora: '10:45',
    foto: '',
  },
  {
    id: '2',
    nome: 'enejota',
    mensagem: 'valeu pelas dicas pra bater penal...',
    hora: '09:20',
    foto: require('../../assets/images/neymar.jpg'),
  },
  {
    id: '3',
    nome: 'Japones yuji',
    mensagem: 'eu sou mais louco que tod...',
    hora: '19:45',
    foto: '',
  },
  {
    id: '4', 
    nome: 'PH',
    mensagem: 'Davi, o siles disse que quer...',
    hora: '07:38',
    foto: '',
  },
  {
    id: '5', 
    nome: 'Gustavo lopes',
    mensagem: 'fala q eu coloco la',
    hora: '21:45',
    foto: '',
  },
];

export default function HomeScreen() {

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.topo}>
          <Text style={styles.titulo}>
             WhatsApp 
          </Text>

          <View style={styles.icones}>
            <Ionicons name="camera" size={24} color="white" /> 
            <MaterialIcons name="more-vert" size={24} color="white" />
          </View>
        </View>

        <View style={styles.pesquisa}>
          <Ionicons name="search" size={24} color="#9AA0A6" />
          <Text style={styles.textoPesquisa}> 
            Pergunte à Meta AI ou pesquise 
          </Text>
        </View>
      </View>

        <FlatList // para listas grandes
        data={conversas} //qual lista sera exibida
        keyExtractor={(item) => item.id}//id único para cada item.
        renderItem={({ item }) => ( //como cada conversa será desenhada na tela.
          <View style={styles.conversa}>
            <Image source={item.foto} style={styles.foto} />

            <View style={styles.textos}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.mensagem}>{item.mensagem}</Text>
            </View>

            <Text style={styles.hora}>{item.hora}</Text>
          </View>
        )}
        />

        <TouchableOpacity style={styles.botao}> 
        <Ionicons name="chatbubble" size={24} color="black" />
      </TouchableOpacity> {/*botao clicavel*/}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1014',
    justifyContent: 'flex-start', //coloca os itens no topo
    alignItems: 'center',
  },

  header: {
    width: '100%',
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  topo: {
    flexDirection: 'row', //coloca elementos lado a lado
    justifyContent: 'space-between',//separa esquerda e direita
    alignItems: 'center',
  },

  titulo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  icones: {
    flexDirection: 'row',
    gap: 20, //espaço entre ícones
  },

  pesquisa: {
    marginTop: 15,
    height: 50,
    backgroundColor: '#373E44',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 10,
  },

  textoPesquisa: {
    color: '#9AA0A6',
    fontSize: 15,
  },

  conversa: {
    flexDirection: 'row', //itens lado a lado
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomColor: '#333',
  },

  foto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  textos: {
    flex: 1,
    marginLeft: 20,
  },

    nome: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  mensagem: {
    color: '#9AA0A6',
    fontSize: 15,
  },

  hora: {
    color: '#9AA0A6',
    fontSize: 14,
  },

  botao: {
    position: 'absolute', //botao flutuante
    right: 20,
    bottom: 30,
    backgroundColor: '#25D366',
    width: 60,
    height: 60,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});