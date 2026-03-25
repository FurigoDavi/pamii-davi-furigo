import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet } from 'react-native';

type Props = {
  imgSource: ImageSourcePropType;
  height: number;
};

export default function ImageViewer({ imgSource, height }: Props) {
  return (
    <Image 
      source={imgSource} 
      style={[styles.image, { height }]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    borderRadius: 20,
    marginBottom: 10,
    padding: 50,
  },
});