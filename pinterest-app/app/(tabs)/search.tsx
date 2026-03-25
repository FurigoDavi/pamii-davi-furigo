import Feather from '@expo/vector-icons/Feather';
import { Image, StyleSheet, Text, View } from 'react-native';

const Img1 = { src: require('@/assets/images/img1.jpg'), height: 350 };

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imageTop} source={require('@/assets/images/search/image-top.jpg')}/>
      </View>
      <View style={styles.searchGroup}>
        <Feather name="search" size={20} color="black"/>
        <Text>Pesquisar</Text>
      </View>
      <View style={styles.searchGroup}>
        <Feather name="search" size={20} color="black"/>
        <Text>Pesquisar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    overflowY: "auto",
    gap: 10,
    position: "relative",
  },
  searchGroup: {
    position: "fixed",
    flexDirection: "row",
    width: '90%',
    padding: 8,
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FFF',
    top: 24,
    borderRadius: 12,
    left: '50%',
    transform: [
			{ translateX: '-50%' },
		],
  },
  imageTop: {
    height: 300,
    width: '100%',
  }
});
