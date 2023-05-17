import { StyleSheet } from 'react-native';
import {Colors} from "@asset/styles/colors";

export const homeStyles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black200,
    paddingTop: 20
  },
  homeItemsWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  imageWrapper: {
    flex: 1,
    width: 100,
    height: 100,
    borderBottomLeftRadius: 9,
    borderTopLeftRadius: 9,
  }
});
