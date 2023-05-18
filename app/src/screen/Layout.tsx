import {Router} from "@src/router";
import {Header} from "@src/components/Header";
import {View, StatusBar} from "react-native";

export const Layout = () => {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}  />
      <Header />
      <View style={{
        flex: 1,
        width: '100%',
        height: '100%',
        paddingTop: 90
      }}>
        <Router />
      </View>
    </>
  )
}
