import React from "react";
import { View, ScrollView, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.8;

export default function SimpleCarousel({ images }) {
  return (
    <View style={styles.scrollContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {images.map((source, i) => (
          <Image key={i} style={styles.image} source={source} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    height,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width,
    height,
  },
});
