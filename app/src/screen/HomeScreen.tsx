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
      <TouchableOpacity
        onPress={redirectHome}
      >
        <Text style={homeStyles.homeText}>앱 설정</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={redirectHome}
      >
        <Text style={homeStyles.homeText}>이야기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={redirectHome}
      >
        <Text style={homeStyles.homeText}>모든 이야기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={redirectHome}
      >
        <Text style={homeStyles.homeText}>검색</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={redirectHome}
      >
        <Text style={homeStyles.homeText}>글 추가</Text>
      </TouchableOpacity>
    </View>
  )
}
