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
  listWrapper: {
    width: '100%',
    textAlign: 'left',
    height: '100%'
  },
  listItems: {
    marginBottom: 30,
  },
  bottom: {
    flex: 0.3
  },
  button: {
    width: 'auto'
  }
})
