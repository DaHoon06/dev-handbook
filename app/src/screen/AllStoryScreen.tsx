import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@src/types/router";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {AllStoriesStyle} from "@asset/styles/all.stories.style";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

type Props = NativeStackScreenProps<RootStackParamList, 'AllStory'>;

export const AllStoryScreen = (props: Props) => {
  const {navigation} = props;
  const home = () => {
    navigation.navigate("Home")
  }

  return (
    <View style={{
      flex: 1
    }}>
      <View style={AllStoriesStyle.Top}>
        <TouchableOpacity>
          <Icon
            size={24}
            name="plus"  />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="dots-vertical" size={24} />
        </TouchableOpacity>
      </View>
      <View style={AllStoriesStyle.body}>
        <ScrollView style={AllStoriesStyle.listWrapper}>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트dasfjs;ldfja</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트asfsajhfsk</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트dasfjs;ldfja</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트asfsajhfsk</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트dasfjs;ldfja</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트asfsajhfsk</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트dasfjs;ldfja</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트asfsajhfsk</Text>
          <Text style={AllStoriesStyle.listItems}>게시글 리스트</Text>
        </ScrollView>
      </View>
      <View style={AllStoriesStyle.bottom}>
        <TouchableOpacity onPress={home}>
          <Icon
            size={24}
            name="circle-outline"  />
        </TouchableOpacity>
      </View>
    </View>
  )
}
