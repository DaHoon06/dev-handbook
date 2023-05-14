import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@src/types/router";
import {Text, View} from "react-native";
import {AllStoriesStyle} from "@asset/styles/all.stories.style";

type Props = NativeStackScreenProps<RootStackParamList, 'AllStory'>;

export const AllStoryScreen = (props: Props) => {

  return (
    <View>
      <View style={AllStoriesStyle.Top}>
        <Text>TEST1</Text>

      </View>
      <View>
        <Text>게시글 리스트</Text>
        <Text>게시글 리스트</Text>
        <Text>게시글 리스트</Text>
        <Text>게시글 리스트</Text>
        <Text>게시글 리스트</Text>
      </View>
      <View style={AllStoriesStyle.bottom}>
      </View>
    </View>
  )
}
