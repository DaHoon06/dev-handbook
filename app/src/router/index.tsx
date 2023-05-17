import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "@screen/HomeScreen";
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
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'AllStory'} component={AllStoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
