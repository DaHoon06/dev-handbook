import {TouchableOpacity, Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types/router";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen(props: Props) {
  const {navigation} = props;

  const redirectHome = () => {
    navigation.navigate('Test')
  }

  return (
    <View>
      <TouchableOpacity
        onPress={redirectHome}
      >
        <Text>=롸 이동됨</Text>
      </TouchableOpacity>
    </View>
  )
}