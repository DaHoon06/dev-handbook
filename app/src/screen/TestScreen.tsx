import {Text, TouchableOpacity, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@type/router";
import {instance} from "@lib/axios";

type Props = NativeStackScreenProps<RootStackParamList, 'Test'>;

export const TestScreen = (props: Props) => {
  const {navigation} = props;

  const redirectTest = () => {
    navigation.navigate("Home")
  }

  const axiosTest = async () => {
    try {
      const {data} = await instance.get<any>('/recipes/all-recipes');
      console.log(data)
    } catch (e) {
      throw new Error('악!!');
    }
  }

  return (
    <View>
      <TouchableOpacity
        onPress={redirectTest}
      >
        <Text>redirectHome</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={axiosTest}
      >
        <Text>AXIOS TEST</Text>
      </TouchableOpacity>
    </View>
  )
}