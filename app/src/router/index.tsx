import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "@screen/HomeScreen";
import {TestScreen} from "@screen/TestScreen";
import {RootStackParamList} from "@src/types/router";
import {AllStoryScreen} from "@screen/AllStoryScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}>
        <Stack.Screen name={'Test'} component={TestScreen} />
        <Stack.Screen name={'AllStory'} component={AllStoryScreen} />
        <Stack.Screen name={'Home'} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
