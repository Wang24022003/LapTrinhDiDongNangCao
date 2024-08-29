import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.samsungGalaxyA145g1, styles.taiXung21Position]} />
      <Image
        style={[styles.taiXung21, styles.taiXung21Position]}
        contentFit="cover"
        source={require("../assets/tai-xung-2-1.png")}
      />
      <Image
        style={styles.homeChild}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Text style={styles.search}>Search............</Text>
      <Image
        style={[styles.addAPhotoIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/add-a-photo.png")}
      />
      <Image
        style={[styles.searchIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <Image
        style={[styles.discoverTuneIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/discover-tune.png")}
      />
      <Image
        style={[styles.homeItem, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.homeInner, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.homeChild1, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.homeChild2, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.n1Icon}
        contentFit="cover"
        source={require("../assets/131321493-345922260232932-7824312325167757271-n-1.png")}
      />
      <Text style={[styles.lMinhQuang, styles.textText]}>Lê Minh Quang</Text>
      <Text style={[styles.text, styles.textText]}>21110279</Text>
      <Text style={styles.xinCho}>Xin chào,</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taiXung21Position: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  homeChildPosition: {
    height: 12,
    width: 12,
    left: "50%",
    top: "50%",
    marginTop: -222,
    position: "absolute",
  },
  textText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    color: Color.colorWhite,
    width: 177,
    left: 40,
    textAlign: "left",
    position: "absolute",
  },
  samsungGalaxyA145g1: {
    backgroundColor: "rgba(0, 255, 71, 0.08)",
    height: 810,
  },
  taiXung21: {
    borderTopLeftRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 222,
  },
  homeChild: {
    top: 203,
    left: 62,
    borderRadius: Border.br_11xl,
    width: 240,
    height: 37,
    position: "absolute",
  },
  search: {
    top: 212,
    left: 108,
    fontSize: FontSize.size_mini,
    color: "#787878",
    width: 105,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  addAPhotoIcon: {
    left: 260,
    top: 210,
    width: 24,
  },
  searchIcon: {
    left: 73,
    top: 210,
    width: 24,
  },
  discoverTuneIcon: {
    top: 218,
    left: 295,
  },
  homeItem: {
    marginLeft: -9,
  },
  homeInner: {
    marginLeft: -48,
  },
  ellipseIcon: {
    marginLeft: -28,
  },
  homeChild1: {
    marginLeft: 11,
  },
  homeChild2: {
    marginLeft: 31,
  },
  n1Icon: {
    top: 71,
    left: 241,
    borderRadius: 40,
    width: 80,
    height: 80,
    position: "absolute",
  },
  lMinhQuang: {
    top: 107,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    height: 23,
    textShadowColor: "rgba(0, 0, 0, 0.85)",
  },
  text: {
    top: 134,
    fontSize: 12,
    height: 17,
    textShadowColor: "rgba(0, 0, 0, 0.91)",
    fontFamily: FontFamily.interRegular,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    color: Color.colorWhite,
  },
  xinCho: {
    top: 253,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.roundedMplus1cBold,
    color: Color.colorDarkgreen,
    height: 47,
    width: 177,
    left: 40,
    textAlign: "left",
    position: "absolute",
  },
  home: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});



export default HomeScreen;
