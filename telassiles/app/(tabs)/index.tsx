import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text> aqui </Text>

        <View style={styles.pesquisa}>
          <Text> Pergunte à Meta AI ou pesquise </Text>
        </View>

      </View>

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
    width: 500,
    height: 100,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, //distancia do topo
  },

  pesquisa: {
    width: 338,
    height: 50,
    backgroundColor: '#373E44',
    justifyContent: 'center',//alinha no meio(de cima pra baixo)
    alignItems: 'center',//alinha no meio(de esq. para dir.)
    borderRadius: 50, //arredondando a borda
  }
});