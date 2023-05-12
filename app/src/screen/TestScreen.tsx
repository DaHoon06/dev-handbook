import {Text, TouchableOpacity, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types/router";

type Props = NativeStackScreenProps<RootStackParamList, 'Test'>;

export function TestScreen(props: Props) {
  const {navigation} = props;

  const redirectTest = () => {
    navigation.navigate("Home")
  }

  return (
    <View>
      <Text>
        TESTasdsadasdadas
      </Text>
      <TouchableOpacity
        onPress={redirectTest}
      >
        <Text>TEST</Text>
      </TouchableOpacity>
    </View>
  )
}