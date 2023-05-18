import {TouchableOpacity, Text, View, ScrollView, Image} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@src/types/router";
import {homeStyles} from "@asset/styles/home.style";
import {Card} from "@src/components/Card";
import JAVASCRIPT from '@asset/images/javascript.png';
import TYPESCRIPT from '@asset/images/typescript.png';
import REACT from '@asset/images/react.png';
import VUE from '@asset/images/vue.png';
import {Folder} from "@src/components/folder/Folder";
import {Header} from "@src/components/Header";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


const categories = [
  {
    _id: 'obj-id1',
    name: 'JavaScript'
  },
  {
    _id: 'obj-id2',
    name: 'TypeScript'
  },
  {
    _id: 'obj-id3',
    name: 'React'
  },
  {
    _id: 'obj-id4',
    name: 'Vue'
  },
]

export const HomeScreen = (props: Props) => {
  const {navigation} = props;

  const onClickHandlerCard = (type: any) => {
    navigation.navigate("Stack", {type});
  }

  return (
    <View style={homeStyles.homeContainer}>
      <ScrollView contentContainerStyle={homeStyles.homeItemsWrapper}>
        {categories.map((value, index) => {
          return (
            <TouchableOpacity
              key={value._id}
              style={homeStyles.homeDirectoryButton}
              onPress={() => onClickHandlerCard(value.name)}
            >
              <Folder label={value.name} />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}
