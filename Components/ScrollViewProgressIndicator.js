import React from "react";
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  Animated,
} from "react-native";

const { width } = Dimensions.get("window");

export default function ScrollViewProgressIndicator({ photos }) {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  return (
    <View style={styles.container}>
      <View style={{ width, height: width }}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          {photos.map((source, i) => {
            return (
              <Image key={i} style={{ width, height: width }} source={source} />
            );
          })}
        </ScrollView>
      </View>
      <View style={{ flexDirection: "row" }}>
        {photos.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });
          return <Animated.View key={i} style={[styles.dots, { opacity }]} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dots: {
    height: 10,
    width: 10,
    backgroundColor: "#595959",
    margin: 8,
    borderRadius: 5,
  },
});
