import { StyleSheet } from "react-native";
import colors from "../../modal/colors";

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
  },
  container: {
    paddingTop: 15,
    flex: 1,
    backgroundColor: colors.background,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.white,

    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  postImage: {
    height: 100,
    width: 100,
    borderRadius: 30,
    marginLeft: 10,
    marginRight: 20,
    marginVertical: 10,
  },
  postContentWrap: {
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  postValue: {
    color: colors.primary,
    backgroundColor: colors.secondary,
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 10,
  },
  postPlace: {
    color: colors.grey,
  },
  postTitle: {
    fontWeight: "bold",
  },
});

export default styles;
