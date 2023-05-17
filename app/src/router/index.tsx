import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "@screen/HomeScreen";
import {RootStackParamList} from "@src/types/router";
import {StackLists} from "@src/components/StackLists";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Stack'} component={StackLists} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
