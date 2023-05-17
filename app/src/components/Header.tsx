import {TouchableOpacity, View} from "react-native";
import { StyleSheet } from 'react-native';
import {Colors} from "@asset/styles/colors";

export const Header = () => {
  return (
    <View style={style.header}>
      <View style={style.headerWrapper}>
        <TouchableOpacity>
          <View style={style.redButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.yellowButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={style.greenButton} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    height: 90,
    paddingTop: 40,
    zIndex: 99,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: Colors.black100,
  },
  headerWrapper: {
    flex: 1,
    padding: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: "row"
  },
  redButton: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: Colors.red,
    marginRight: 10,
  },
  yellowButton: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: Colors.yellow,
    marginRight: 10,
  },
  greenButton: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: Colors.green
  }
})
