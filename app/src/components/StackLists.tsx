import {Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@src/types/router";

type Props = NativeStackScreenProps<RootStackParamList, 'Stack'>;

export const StackLists = ({route}: Props) => {
  return (
    <View>
      <Text>{route.params.type}</Text>
    </View>
  )
}
