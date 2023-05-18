import {Router} from "@src/router";
import {Header} from "@src/components/Header";
import {StatusBar} from "expo-status-bar";
import {View} from "react-native";

export const Layout = () => {
  return (
    <>
      <StatusBar style={"light"} />
      <Header />
      <View style={{
        flex: 1,
        width: '100%',
        height: '100%',
        paddingTop: 90,
      }}>
        <Router />
      </View>
    </>
  )
}
