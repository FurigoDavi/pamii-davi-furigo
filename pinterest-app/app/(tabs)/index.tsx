import ImageViewer from '@/components/ImageViewer';
import { StyleSheet, View } from "react-native";

const Img1 = { src: require('@/assets/images/img1.jpg'), height: 350 };
const Img2 = { src: require('@/assets/images/img2.jpg'), height: 230 };
const Img3 = { src: require('@/assets/images/img3.jpg'), height: 300 };
const Img4 = { src: require('@/assets/images/img4.jpg'), height: 280 };

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={Img1.src} height={Img1.height}/>
        <ImageViewer imgSource={Img2.src} height={Img2.height}/>
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={Img3.src} height={Img3.height}/>
        <ImageViewer imgSource={Img4.src} height={Img4.height}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "rgb(255, 255, 255)",
    overflowY: "auto",
    gap: 10,
    paddingHorizontal: 10,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "column",
    columnGap: 10,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  }
});