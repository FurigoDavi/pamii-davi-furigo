import Feather from '@expo/vector-icons/Feather';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const Img1 = { src: require('@/assets/images/img1.jpg'), height: 350 };

const explore = [
  {
    id: '1',
    src: "require('@/assets/images/search/img1.jpg')",
  },
  {
    id: '2',
    src: "require('@/assets/images/search/img2.jpg')",
  },
  {
    id: '3',
    src: "require('@/assets/images/search/img3.jpg')",
  },
  {
    id: '4',
    src: "require('@/assets/images/search/img4.jpg')",
  },
]

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imageTop} source={require('@/assets/images/search/image-top.jpg')} />
        <Text style={styles.textHeader}>Para compartilhar e refletir<br/><b style={styles.textHeaderTitle}>Palavras para mulheres</b></Text>
        <Text style={styles.pinterestSignature}>Pinterest Brasil</Text>
      </View>
      <View style={styles.searchGroup}>
        <Feather name="search" size={20} color="black"/>
        <Text>Pesquisar</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.pagination}>
          <View style={styles.paginationCircles}></View>
          <View style={styles.paginationCircles}></View>
          <View style={styles.paginationCircles}></View>
          <View style={styles.paginationCircles}></View>
          <View style={styles.paginationCircles}></View>
          <View style={styles.paginationCircles}></View>
          <View style={styles.paginationCircles}></View>
        </View>
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
  header: {
    width: "100%",
    height: 400,
    backgroundColor: "#000",
  },
  imageTop: {
    width: "100%",
    height: 400,
    opacity: 0.7,
  },
  textHeader: {
    color: "#FFF",
    position: "absolute",
    width: "100%",
    top: "50%",
    left: "50%",
    transform: [
      { translateX: '-50%' },
      { translateY: '-50%' },
    ],
    textAlign: "center",
  },
  textHeaderTitle: {
    fontSize: 16,
  },
  pinterestSignature: {
    color: "#FFF",
    position: "absolute",
    width: "100%",
    bottom: "5%",
    left: "50%",
    transform: [
      { translateX: '-50%' },
      { translateY: '-50%' },
    ],
    textAlign: "center",
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
  content: {
    gap: 12,
    width: "100%",
  },
  pagination: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  paginationCircles: {
    height: 8,
    width: 8,
    backgroundColor: "#BBB",
    borderRadius: "50%",
  },
});
