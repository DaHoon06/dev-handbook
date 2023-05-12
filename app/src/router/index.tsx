import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "../screen/HomeScreen";
import {TestScreen} from "../screen/TestScreen";
import {RootStackParamList} from "../types/router";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Test"}>
        <Stack.Screen name={'Test'} component={TestScreen} />
        <Stack.Screen name={'Home'} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}