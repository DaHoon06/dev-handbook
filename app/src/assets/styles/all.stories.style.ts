import { StyleSheet } from 'react-native';

export const AllStoriesStyle = StyleSheet.create({
  Top: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  body: {
    width: '100%',
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
    textAlign: 'left',
    height: '100%'
  },
  lists: {
    paddingHorizontal: 10,
    marginHorizontal: 'auto',
    width: '100%',
  },
  listItems: {
    marginBottom: 30,
    // borderStyle: "solid",
    // borderBottomWidth: 1,
    // borderBottomColor: 'black'
  },
  bottom: {
    flex: 0.3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  button: {
    marginRight: 20,
    width: 'auto',
  }
})
