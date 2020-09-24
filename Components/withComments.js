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
  // this will be the scroll location of our ScrollView
  const scrollX = new Animated.Value(0);
  // position will be a value between 0 and photos.length - 1 assuming you don't scroll pass the ends of the ScrollView
  let position = Animated.divide(scrollX, width);

  return (
    <View style={styles.container}>
      <View style={{ width, height: width }}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true} // animates ScrollView to nearest multiple of it's own width
          showsHorizontalScrollIndicator={false}
          // the onScroll prop will pass a nativeEvent object to a function
          onScroll={Animated.event(
            // Animated.event returns a function that takes an array where the first element...
            [{ nativeEvent: { contentOffset: { x: scrollX } } }], // ... is an object that maps any nativeEvent prop to a variable
            { useNativeDriver: false }
          )} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
          scrollEventThrottle={16} // this will ensure that this ScrollView's onScroll prop is called no faster than 16ms between each function call
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
          // the _ just means we won't use that parameter
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
            outputRange: [0.3, 1, 0.3], // when position is not i, the opacity of the dot will animate to 0.3
            extrapolate: "clamp", // this will prevent the opacity of the dots from going outside of the outputRange (i.e. opacity will not be less than 0.3)
          });
          return <Animated.View key={i} style={[styles.dots, { opacity }]} />; // we will animate the opacity of the dots so use Animated.View instead of View here
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
    backgroundColor: "#595959", // you can use whatever color you want for the dots
    margin: 8,
    borderRadius: 5,
  },
});
