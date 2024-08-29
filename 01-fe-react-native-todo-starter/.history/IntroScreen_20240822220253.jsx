import React, { useEffect } from "react";
import { View, Text } from "react-native";

const IntroScreen = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Home");
    }, 10000); // Chuyển trang sau 10s

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.appScreen}>
      <Image
        style={styles.samsungGalaxyA145g1}
        contentFit="cover"
        source={require("../assets/samsung-galaxy-a14-5g-1.png")}
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
        contentFit="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Image
        style={styles.welcomeBannerWithGoldenLea}
        contentFit="cover"
        source={require("../assets/welcome-banner-with-golden-leaves-vector-image-on-vectorstockphotoroom-1-1.png")}
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
    width: 360,
    height: 800,
    position: "absolute",
  },
  version100b: {
    top: 784,
    left: 10,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    width: 170,
    height: 33,
  },
  appScreenChild: {
    top: 241,
    left: 33,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_11xl,
    backgroundColor: "rgba(218, 218, 218, 0.61)",
    width: 274,
    height: 366,
    position: "absolute",
  },
  portfolioQuang: {
    top: 452,
    left: 44,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.roundedMplus1cBold,
    color: Color.colorDarkgreen,
    width: 272,
    height: 47,
  },
  appScreenItem: {
    top: 274,
    left: 95,
    borderRadius: 37,
    width: 150,
    height: 150,
    position: "absolute",
  },
  welcomeBannerWithGoldenLea: {
    top: 520,
    left: 56,
    width: 228,
    height: 81,
    position: "absolute",
  },
  appScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 810,
    overflow: "hidden",
  },
});
export default IntroScreen;
