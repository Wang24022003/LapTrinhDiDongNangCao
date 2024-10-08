import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const IntroScreen = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Home");
    }, 3000); // Chuyển trang sau 10s

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.appScreen}>
      <Image
        style={styles.samsungGalaxyA145g1}
        source={require('./../assets/samsung-galaxy-a14-5g-1.png')}
      />
      <Text style={[styles.version100b, styles.version100bFlexBox]}>
        Version: 1.0.0b
      </Text>
      <View style={styles.appScreenChild} />
      <Text style={[styles.portfolioQuang, styles.version100bFlexBox]}>
        Portfolio Quang
      </Text>
      <Image
        style={styles.appScreenItem}
        source={require('./../assets/rectangle-4.png')}
      />
      <Image
        style={styles.welcomeBannerWithGoldenLea}
        source={require('./../assets/welcome-banner-with-golden-leaves-vector-image-on-vectorstockphotoroom-1-1.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  version100bFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  samsungGalaxyA145g1: {
    top: 0,
    left: 0,
    width: 420,
    height: 1010,
    position: "absolute",
  },
  version100b: {
    top: 900,
    left: 10,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#fff",
    width: 170,
    height: 33,
  },
  appScreenChild: {
    top: 261,
    left: 50,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: 30,
    backgroundColor: "rgba(218, 218, 218, 0.61)",
    width: 304,
    height: 366,
    position: "absolute",
  },
  portfolioQuang: {
    top: 452,
    left: 80,
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#014f0e",
    width: 272,
    height: 47,
  },
  appScreenItem: {
    top: 294,
    left: 130,
    borderRadius: 37,
    width: 150,
    height: 150,
    position: "absolute",
  },
  welcomeBannerWithGoldenLea: {
    top: 540,
    left: 90,
    width: 228,
    height: 81,
    position: "absolute",
  },
  appScreen: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 810,
    overflow: "hidden",
  },
});

export default IntroScreen;
