import ImageViewer from '@/components/ImageViewer';
import { StyleSheet, Image, Text, View } from 'react-native';

const Img1 = { src: require('@/assets/images/img1.jpg'), height: 350 };

export default function Search() {
  return (
    <View style={styles.container}>
        <Image style={styles.imageTop} source={require('@/assets/images/search/image-top.jpg')}/>
      <View style={styles.imageContainer}>
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
  },
  imageTop: {
    height: 200,
    width: '100%',
  }
});
