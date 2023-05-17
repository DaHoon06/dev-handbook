import {TouchableOpacity, Text, View, ScrollView, Image} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@src/types/router";
import {homeStyles} from "@asset/styles/home.style";
import {Card} from "@src/components/Card";
import JAVASCRIPT from '@asset/images/javascript.png';
import TYPESCRIPT from '@asset/images/typescript.png';
import REACT from '@asset/images/react.png';
import VUE from '@asset/images/vue.png';

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
      <ScrollView contentContainerStyle={homeStyles.homeItemsWrapper}>
        <TouchableOpacity>
          <Card>
            <Image style={homeStyles.imageWrapper} source={JAVASCRIPT} />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card>
            <Image style={homeStyles.imageWrapper} source={TYPESCRIPT} />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card>
            <Image style={homeStyles.imageWrapper} source={REACT} />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card>
            <Image style={homeStyles.imageWrapper} source={VUE} />
          </Card>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
