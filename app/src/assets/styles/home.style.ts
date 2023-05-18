import { StyleSheet } from 'react-native';
import {Colors} from "@asset/styles/colors";

export const homeStyles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-end',
    backgroundColor: Colors.black200,
    paddingTop: 20
  },
  homeItemsWrapper: {
    width: 60,
    height: '100%',
    marginRight: 25,
  },
  homeDirectoryButton: {
    marginBottom: 20,
  }
});
