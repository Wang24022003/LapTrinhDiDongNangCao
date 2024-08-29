import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <View style={styles.headerBackground} />
      <Image
        style={styles.headerImage}
        source={require("../assets/tai-xung-2-1.png")}
      />
      <Image
        style={styles.searchBackground}
        source={require("../assets/rectangle-5.png")}
      />
      <Text style={styles.search}>Search............</Text>
      <Image
        style={styles.addAPhotoIcon}
        source={require("../assets/add-a-photo.png")}
      />
      <Image
        style={styles.searchIcon}
        source={require("../assets/search.png")}
      />
      <Image
        style={styles.discoverTuneIcon}
        source={require("../assets/discover-tune.png")}
      />
      <Image
        style={styles.profilePicture}
        source={require("../assets/131321493-345922260232932-7824312325167757271-n-1.png")}
      />
      <Text style={styles.name}>Lê Minh Quang</Text>
      <Text style={styles.studentId}>21110279</Text>
      <Text style={styles.greeting}>Xin chào,</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 222,
    backgroundColor: "rgba(0, 255, 71, 0.08)",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  headerImage: {
    width: "100%",
    height: 222,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    position: "absolute",
    top: 0,
  },
  searchBackground: {
    width: "80%",
    height: 37,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    marginVertical: 20,
  },
  search: {
    position: "absolute",
    top: 212,
    left: "50%",
    transform: [{ translateX: -60 }],
    fontSize: 16,
    color: "#787878",
    textAlign: "center",
  },
  addAPhotoIcon: {
    position: "absolute",
    top: 210,
    right: 20,
    width: 24,
    height: 24,
  },
  searchIcon: {
    position: "absolute",
    top: 210,
    left: 20,
    width: 24,
    height: 24,
  },
  discoverTuneIcon: {
    position: "absolute",
    top: 218,
    right: 50,
    width: 24,
    height: 24,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
  studentId: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
  },
  greeting: {
    fontSize: 36,
    fontWeight: "700",
    color: "#006400",
    textAlign: "center",
    marginTop: 50,
  },
});

export default HomeScreen;
