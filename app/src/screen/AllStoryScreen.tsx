import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@src/types/router";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {AllStoriesStyle} from "@asset/styles/all.stories.style";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {useState} from "react";
import {Menu, MenuItem, MenuDivider} from "react-native-material-menu";

type Props = NativeStackScreenProps<RootStackParamList, 'AllStory'>;

export const AllStoryScreen = (props: Props) => {
  const {navigation} = props;
  const home = () => {
    navigation.navigate("Home")
  }

  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

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
        <View>
          <Menu
            visible={visible}
            anchor={
              <Text onPress={showMenu}>
                <Icon name="dots-vertical" size={24} />
              </Text>}
            onRequestClose={hideMenu}
          >
            <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
            <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
            <MenuItem disabled>Disabled item</MenuItem>
            <MenuDivider />
            <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
          </Menu>
        </View>
      </View>
      <View style={AllStoriesStyle.body}>
        <ScrollView style={AllStoriesStyle.listContainer}>
          <View style={AllStoriesStyle.lists}>
            {new Array(0,0,0,0,0).map((list, index) => {
              return (
                <TouchableOpacity key={index}>
                  <Text style={AllStoriesStyle.listItems}>
                    게시글 리스트
                  </Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>
      </View>
      <View style={AllStoriesStyle.bottom}>
        <TouchableOpacity
          style={AllStoriesStyle.button}
          onPress={home}>
          <Icon
            size={24}
            name="circle-outline"  />
        </TouchableOpacity>
      </View>
    </View>
  )
}
