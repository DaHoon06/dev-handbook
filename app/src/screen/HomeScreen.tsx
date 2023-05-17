import {TouchableOpacity, Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@src/types/router";
import {homeStyles} from "@asset/styles/home.style";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = (props: Props) => {
  const {navigation} = props;

  const redirectHome = () => {
    navigation.navigate('AllStory')
  }

  const redirectController = (type: any) => {
    navigation.navigate(type);
  }

  return (
    <View style={homeStyles.homeContainer}>
      <Text>TEST</Text>
    </View>
  )
}
